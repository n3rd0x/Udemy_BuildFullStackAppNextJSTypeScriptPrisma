import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/config/prisma";
import { IRecordRoom } from "@/config/interfaces";
import { catchErrors } from "@/middleware/catchErrors";
import { error } from "@/util/errorHandler";
import { search } from "@/util/search";

// ----------------------------------------
// api/rooms
// ----------------------------------------
export const allRooms = catchErrors(async (req: NextRequest) => {
    const pagination: number = 2;
    //const rooms = await prisma.room.findMany();

    // REF: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
    // Example: app/products/api/route.ts
    const { searchParams } = new URL(req.url);
    const strQuery: any = {};
    searchParams.forEach((value, key) => {
        strQuery[key] = value;
    });

    const filter = new search.Filter(prisma.room, strQuery).exec(pagination);

    const rooms = await filter.query;
    const numRooms = rooms.length;

    return NextResponse.json({
        success: true,
        pagination,
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
            throw new error.RoomNotFound(params.id);
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
            throw new error.RoomNotFound(params.id);
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
            throw new error.RoomNotFound(params.id);
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
