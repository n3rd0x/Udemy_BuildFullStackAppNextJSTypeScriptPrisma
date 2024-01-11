import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
import { RoomRecord } from "@/config/interfaces";

export const allRooms = async (req: NextRequest) => {
    const perPage: number = 8;
    const rooms = await prisma.room.findMany();
    return NextResponse.json({
        success: true,
        perPage,
        rooms,
    });
};

export const newRoom = async (req: NextRequest) => {
    const body: RoomRecord = await req.json();
    const room = await prisma.room.create({
        data: body,
    });
    return NextResponse.json({
        success: true,
        room,
    });
};

export const getRoomDetails = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    const room = await prisma.room.findUnique({
        where: { id: Number(params.id) },
    });

    if (!room) {
        return NextResponse.json(
            {
                message: "Room not found",
            },
            {
                status: 404,
            }
        );
    }

    return NextResponse.json({
        success: true,
        room,
    });
};
