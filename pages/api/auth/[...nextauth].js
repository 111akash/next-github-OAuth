import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export default nextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        // similarly more providers can be added here in the same format.
    ]
})