import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
import { RoomRecord } from "@/config/interfaces";

// api/rooms
export const allRooms = async (req: NextRequest) => {
    const perPage: number = 8;
    const rooms = await prisma.room.findMany();
    return NextResponse.json({
        success: true,
        perPage,
        rooms,
    });
};

// api/rooms/:id
export const getRoom = async (
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

// api/admin/rooms
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

// api/admin/rooms/:id
export const updateRoom = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    let room = await prisma.room.findUnique({
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

    const body: RoomRecord = await req.json();
    room = await prisma.room.upsert({
        where: { id: Number(params.id) },
        update: body,
        create: body,
    });

    return NextResponse.json({
        success: true,
        room,
    });
};

// api/admin/rooms/:id
export const deleteRoom = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    let room = await prisma.room.findUnique({
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

    // TODO: Delete images associated with the room

    await prisma.room.delete({
        where: { id: Number(params.id) },
    });

    return NextResponse.json({
        success: true,
    });
};
