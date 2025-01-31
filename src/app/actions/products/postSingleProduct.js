"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const postSingleData = async (postedData) => {
    try {
        const result = await dbConnect(collectionNames.NEXT).insertOne(postedData)
        revalidatePath("/products");
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}