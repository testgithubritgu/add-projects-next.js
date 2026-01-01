import {z} from "zod";

const productSchema = z.object({
    name:z.string().min(3,{message:"name must be atleast 3 chractors"}).max(120,{message:"Name must be less than 120 charactors"}),
    slug:z.string().min(3,{message:"Slug must be 3 charactors"}).max(140,{message:"Slug must be less than 140 charactors"
    }).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{message:"Slug must lowercase and contain only letters and numbers"}),
    tagline:z.string().max(200,{message:"Tagline must be less than 200 charactors"}),
    description:z.string().optional(),
    websiteUrl:z.string().min(1,{message:"Website URL is required"}),
    tags:z.string().min(1,{message:'Tag is required'}).transform((val)=>val.split(",").map(tag=>tag.trim().toLowerCase()))
})

