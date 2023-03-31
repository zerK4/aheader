import GithubProvider from "next-auth/providers/github"
import NextAuth, { AuthOptions, Profile, User } from "next-auth"
import { createAccount } from "@/lib/prismaFunctions/accounts"

const githubId: string = process.env.GITHUB_ID!
const clientSecret: string = process.env.GITHUB_SECRET!
const secret = process.env.JWT_SECRET!

export interface UserProfile extends Profile {
  login: string;
  created_at: Date | undefined;
  updated_at: Date | undefined;
  githubId: string;
  email: string | undefined;
  name: string | undefined;
  avatar_url: string | undefined;
  bio: string | undefined;
  location: string | undefined;
  company: string | undefined;
  repos_url: string
}

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: clientSecret,
    }),
    // ...add more providers here
  ],
  secret: secret,
  callbacks: {
    async signIn(params) {
      const { profile, account, user }  = params;
      const userProfile = profile as UserProfile;

      const data: UserProfile = {
        login: userProfile.login,
        created_at: userProfile.created_at,
        updated_at: userProfile.updated_at,
        githubId: user.id,
        email: userProfile.email,
        name: userProfile.name,
        avatar_url: userProfile.avatar_url,
        bio: userProfile.bio,
        location: userProfile.location,
        company: userProfile.company,
        repos_url: userProfile.repos_url,
      }

      await createAccount(data);
      return true;
    }
  }
}
export default NextAuth(authOptions)