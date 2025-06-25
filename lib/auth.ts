import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions:NextAuthOptions = {
    providers: [
        // Add your authentication providers here
         GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID! ,
            clientSecret: process.env.GITHUB_CLIENT_SECRET! 
         })
    ],
   
};