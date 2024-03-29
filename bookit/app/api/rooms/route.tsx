import { allRooms } from "@/controller/roomControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();
router.get(allRooms);

export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}
