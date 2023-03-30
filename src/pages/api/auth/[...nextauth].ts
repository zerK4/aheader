import { randomBytes, randomUUID } from "crypto"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const githubId: string = process.env.GITHUB_ID!
const clientSecret: string = process.env.GITHUB_SECRET!
const secret = process.env.JWT_SECRET!
const nodeEnv = process.env.NODE_ENV!

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: clientSecret,
    }),
    // ...add more providers here
  ],
  secret: secret,
  debugger: nodeEnv === "development" ? true : false,
  logger: {
    error(code: any, metadata: any) {
      console.error(code, metadata);
    },
    debug(code: any, metadata: any) {
      console.debug(code, metadata)
    }
  },
  generateSessionToken: () => {
    return randomUUID?.() ?? randomBytes(32).toString("hex")
  }
}
export default NextAuth(authOptions)