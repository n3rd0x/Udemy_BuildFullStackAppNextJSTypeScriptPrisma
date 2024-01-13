export module error {
    export class ErrorHandler extends Error {
        statusCode: number;

        constructor(emsg: string, code: number) {
            super(emsg);
            this.statusCode = code;
        }
    }

    export class RoomNotFound extends ErrorHandler {
        constructor(id: string) {
            super(`Room [${id}] not found`, 404);
        }
    }
}
