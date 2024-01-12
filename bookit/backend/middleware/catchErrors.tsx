import { NextRequest, NextResponse } from "next/server";

type HandlerFunction = (req: NextRequest, params: any) => Promise<NextResponse>;

interface IValidationError {
    message: string;
}

export const catchErrors =
    (handler: HandlerFunction) => async (req: NextRequest, params: any) => {
        try {
            return await handler(req, params);
        } catch (e: any) {
            if (e?.name === "CastError") {
                e.message = "Resource not found. Invalid ${e?.path}";
                e.statusCode = 400;
            }

            if (e?.name === "ValidationError") {
                e.massage = Object.values<IValidationError>(e.errors).map((value) => value.message);
                e.statusCode = 400;
            }

            return NextResponse.json(
                {
                    message: e.message,
                },
                {
                    status: e.statusCode || 500,
                }
            );
        }
    };
