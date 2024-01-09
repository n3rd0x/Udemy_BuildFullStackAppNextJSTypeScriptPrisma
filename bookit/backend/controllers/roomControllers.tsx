import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@config/prisma";


export const allRooms = async(req: NextRequest) => {
    const data = await prisma.category.findMany();
    return NextResponse.json(data);
}


export const newRoom = async(req: NextRequest) => {
    const body = await req.json()
    const room = await prisma.user.create(body)
    return NextResponse.json({
        success: true,
        room
    })
}