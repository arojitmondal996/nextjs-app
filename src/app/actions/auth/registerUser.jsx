"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {

    try {
        // Need to check unique username was given

        const result = await dbConnect(collectionNames.NEXT).insertOne(payload);
        return result;
    } catch (error) {
        console.log(error)
        return null
    }

}