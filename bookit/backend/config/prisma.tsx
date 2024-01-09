import { PrismaClient } from "@prisma/client";


// Using only the default database url.
//const prisma = new PrismaClient();

// Alternative. Prevent multiple instances of the object.
// This would use same instance through out application.
const globalPrisma = globalThis as unknown as { prisma: PrismaClient};

let DB_URI : string = "";
if(process.env.NODE_ENV === "development") {
    DB_URI = process.env.DB_LOCAL!;
}
else if(process.env.NODE_ENV === "production") {
    DB_URI = process.env.DB_REMOTE!;
}


export const prisma = globalPrisma.prisma || new PrismaClient({
    datasources: {
        db: {
            // Define in terminal
            //url: process.env.DATABASE_URL

            // Define in next.config.js
            url: DB_URI
        }
    }
});


// Prevent creating new instance during hot-loading.
if(process.env.NODE_ENV !== "production") {
    globalPrisma.prisma = prisma;
}