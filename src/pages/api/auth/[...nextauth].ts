import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const githubId: string = process.env.GITHUB_ID!
const clientSecret: string = process.env.GITHUB_SECRET!
const secret = process.env.JWT_SECRET!

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: clientSecret,
    }),
    // ...add more providers here
  ],
  secret: secret
}
export default NextAuth(authOptions)