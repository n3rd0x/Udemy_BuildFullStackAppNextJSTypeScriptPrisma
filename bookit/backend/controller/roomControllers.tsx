import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
import { IRecordRoom } from "@/config/interfaces";
import { catchErrors } from "@/middleware/catchErrors";
import { RoomNotFound } from "@/util/errorHandler";

// ----------------------------------------
// api/rooms
// ----------------------------------------
export const allRooms = catchErrors(async (req: NextRequest) => {
    const perPage: number = 8;
    const rooms = await prisma.room.findMany();
    return NextResponse.json({
        success: true,
        perPage,
        rooms,
    });
});

// ----------------------------------------
// api/rooms/:id
// ----------------------------------------
export const getRoom = catchErrors(
    async (req: NextRequest, { params }: { params: { id: string } }) => {
        const room = await prisma.room.findUnique({
            where: { id: Number(params.id) },
        });

        if (!room) {
            throw RoomNotFound;
        }

        return NextResponse.json({
            success: true,
            room,
        });
    }
);

// ----------------------------------------
// api/admin/rooms
// ----------------------------------------
export const newRoom = catchErrors(async (req: NextRequest) => {
    const body: IRecordRoom = await req.json();
    const room = await prisma.room.create({
        data: body,
    });
    return NextResponse.json({
        success: true,
        room,
    });
});

// ----------------------------------------
// api/admin/rooms/:id
// ----------------------------------------
export const updateRoom = catchErrors(
    async (req: NextRequest, { params }: { params: { id: string } }) => {
        let room = await prisma.room.findUnique({
            where: { id: Number(params.id) },
        });

        if (!room) {
            throw RoomNotFound;
        }

        const body: IRecordRoom = await req.json();
        room = await prisma.room.upsert({
            where: { id: Number(params.id) },
            update: body,
            create: body,
        });

        return NextResponse.json({
            success: true,
            room,
        });
    }
);

// ----------------------------------------
// api/admin/rooms/:id
// ----------------------------------------
export const deleteRoom = catchErrors(
    async (req: NextRequest, { params }: { params: { id: string } }) => {
        let room = await prisma.room.findUnique({
            where: { id: Number(params.id) },
        });

        if (!room) {
            throw RoomNotFound;
        }

        // TODO: Delete images associated with the room

        await prisma.room.delete({
            where: { id: Number(params.id) },
        });

        return NextResponse.json({
            success: true,
        });
    }
);
