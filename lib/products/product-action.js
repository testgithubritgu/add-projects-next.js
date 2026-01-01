'use server'

import { auth } from "@clerk/nextjs/server"
import { productSchema } from "./product-validations"



export const addProductAction = async (prevState, formdata)=>{
    
    try {
        const { isAuthenticated, redirectToSignIn, userId } = await auth()
        if (!userId) {
            return {
                success:false,
                message:"You must be sign in to submit a product",
            }
        }
        const rowFormData = Object.fromEntries(formdata.entries())

        const  validateData = productSchema.safeParse(rowFormData)

        if(!validateData.success){
            //check error
            console.log(validateData.error.flatten())
            return {
                success:false,
                errors:validateData.error.flatten(),
                fieldErrors,
                message:"Invalidate Data"
            }
        }

        const data = validateData.data

        //transform the data 


        console.log(validateData)

    } catch (error) {
        console.log(error)
        return {
            success:false,
            errors:error,
            message:"Failed to submit product"
        }
    }
}