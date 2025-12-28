'use server'
export const addProductAction =async (formdata)=>{
    console.log(formdata)
    return {
        success:true,
        errors:{},
        message:"product added successfully"
    }
}