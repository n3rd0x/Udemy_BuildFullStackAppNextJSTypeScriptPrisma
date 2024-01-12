import { deleteRoom, updateRoom } from "@/controller/roomControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
    params: {
        id: string;
    };
}

const router = createEdgeRouter<NextRequest, RequestContext>();
router.delete(deleteRoom);
router.put(updateRoom);

export async function DELETE(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export async function PUT(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
