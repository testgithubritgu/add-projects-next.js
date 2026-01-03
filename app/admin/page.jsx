import { auth, clerkClient } from "@clerk/nextjs/server"
import { redirect } from "next/dist/server/api-utils"

export default async function AdminPage(){
    const {userId} = await auth()
    if(!userId){
        redirect("/sign-in")
    }
    const response = await clerkClient()
    const user = await response.users.getUser(userId)
    console.log(user)
    return <div>Adming Page</div>
}