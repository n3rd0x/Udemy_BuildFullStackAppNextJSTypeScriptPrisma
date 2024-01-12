import { updateRoom } from "@/controller/roomControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
    params: {
        id: string;
    };
}

const router = createEdgeRouter<NextRequest, RequestContext>();
router.put(updateRoom);

export async function PUT(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
