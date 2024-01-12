class ErrorHandler extends Error {
    statusCode: number;

    constructor(emsg: string, code: number) {
        super(emsg);
        this.statusCode = code;
    }
}

export const RoomNotFound = new ErrorHandler("Room not found", 404);

export default ErrorHandler;
