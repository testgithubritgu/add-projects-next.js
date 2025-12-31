'use server'

import { auth } from "@clerk/nextjs/server"

export const addProductAction =async (formdata)=>{
    const { isAuthenticated, redirectToSignIn, userId } = await auth()
    console.log(formdata)
    try {

        
    } catch (error) {
        
        return {
            success:true,
            errors:{},
            message:"product added successfully"
        }
    }
}