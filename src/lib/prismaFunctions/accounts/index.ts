import { AuthOptions, Profile } from "next-auth";
import prisma from "../prisma";
import { UserProfile } from "@/pages/api/auth/[...nextauth]";


export const createAccount = async (profile: UserProfile) => {
    const user = {
        login: profile.login,
        createdAt: profile.created_at,
        updatedAt: profile.updated_at,
        githubId: profile.githubId,
        email: profile.email,
        name: profile.name,
        avatarUrl: profile.avatar_url,
        bio: profile.bio,
        location: profile.location,
        company: profile.company,
        repoUrl: profile.repos_url
    }
    try {
        const data = await prisma.account.upsert({
            where: { githubId: profile.githubId},
            update: user,
            create: user
        })
        
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}