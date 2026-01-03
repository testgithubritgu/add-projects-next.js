'use server'

import { auth, currentUser } from "@clerk/nextjs/server"
import { productSchema } from "./product-validations"
import { db } from "@/db"
import { products } from "@/db/schema"
import z from "zod"

export const addProductAction = async (prevState, formdata) => {

    try {
        const { isAuthenticated, redirectToSignIn, userId ,orgId } = await auth()

        if (!userId) {
            return {
                success: false,
                message: "You must be sign in to submit a product",
            }
        }

        if (!orgId) {
            return {
                success: false,
                message:"You must be a member of an orgnization to submit a product"
            }
        }

        const user = await currentUser()
        const userEmail  = user?.emailAddresses[0].emailAddress || "anonymouse"

        const rowFormData = Object.fromEntries(formdata.entries())

        const validateData = productSchema.safeParse(rowFormData)

        if (!validateData.success) {
            return {
                success: false,
                message: "Invalid form data",
                errors: validateData.error.flatten().fieldErrors // ✅ only fieldErrors
            }
        }


        const data = validateData.data

        //transform the data 
        const { slug, name, tagline, websiteUrl, description, tags } = data

        const tagArray = tags ? tags.filter(tag => typeof tag === "string") : []
        await db.insert(products).values({ slug,organizationId:"", name, tagline, websiteUrl, description, tags: tagArray, status: "approved", submittedBy: userEmail, userId: "" })
        
        return ({
            success:true,
            message:"Product submittes successfully: It will be reviewes shortly."
        })

    } catch (error) {
        if(error instanceof z.ZodError){
            return ({
                success:false,
                error:error.flatten().fieldErrors,
                message:"Failed to submite product"
            })
        }
        return {
            success: false,
            errors: error,
            message: "Failed to submit product"
        }
    }
}