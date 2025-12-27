import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function getFeaturedData(){
    const productData = db.select().from(products).where(eq(products.status,'approved')).orderBy(desc(products.voteCount))
    return productData
} 

export async function getRecentlyLaunchedProducts(){
    // await new Promise((resolve)=>setTimeout(resolve, 3000))
    const productsData = await getFeaturedData()
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate()-7)
    return productsData.filter((product)=> product.createdAt && new Date(product.createdAt.toISOString())>= oneWeekAgo)
}