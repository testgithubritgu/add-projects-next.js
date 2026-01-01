'use server'

import { auth } from "@clerk/nextjs/server"



export const addProductAction =async (formdata)=>{
    
    try {
        const { isAuthenticated, redirectToSignIn, userId } = await auth()
        if (!userId) {
            return {
                success:false,
                message:"You must be sign in to submit a product",
            }
        }
        const rowFormData = Object.fromEntries(formdata.entries())

    } catch (error) {
        console.log(error)
        return {
            success:false,
            errors:error,
            message:"Failed to submit product"
        }
    }
}