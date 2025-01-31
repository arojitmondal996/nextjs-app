import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

//  get route all data
export async function GET() {

const data = await dbConnect(collectionNames.NEXT).find({}).toArray()

    return Response.json(data)
}
//  post route
export async function POST(req) {

    const postedData = await req.json();
    const result = await dbConnect(collectionNames.NEXT).insertOne(postedData)
    revalidatePath("/products");
    return Response.json(result)
}