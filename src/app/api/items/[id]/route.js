import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

//  single one data to get single data
export async function GET(req, { params }) {

    const p = await params;
    const singleData = await dbConnect(collectionNames.NEXT).findOne({ _id: new ObjectId(p.id) })

    return Response.json(singleData)
}

//  single one data to delete single data
export async function DELETE(req, { params }) {

    const p = await params;
    const response = await dbConnect(collectionNames.NEXT).deleteOne({ _id: new ObjectId(p.id) })

    return Response.json(response)
}

//  single one data to patch single data
export async function PATCH(req, { params }) {

    const p = await params;
    const postedData = await req.json()
    const filter = { _id: new ObjectId(p.id) }
    const updatedResponse = await dbConnect(collectionNames.NEXT).updateOne(filter, { $set: { ...postedData } }, { upsert: true })

    return Response.json(updatedResponse)
}