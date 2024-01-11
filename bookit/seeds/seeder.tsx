import { promises as fs } from "fs";
import { PrismaClient } from "@prisma/client";
import { RoomRecord } from "../backend/config/interfaces";

const prisma = new PrismaClient();

const seedRooms = async () => {
    try {
        console.log("========================================");
        console.log("= Seeding Rooms")
        console.log("========================================");
        const filePath = process.cwd() + "/seeds/rooms.json";
        const contents = await fs.readFile(filePath, "utf-8");
        const json = JSON.parse(contents);

        await prisma.room.deleteMany();
        console.log("Rooms are deleted");

        for (const itr of json) {
            const room: RoomRecord = itr;
            await prisma.room.create({ data: room });
        }
        console.log("Rooms are added");
    } catch (e) {
        console.log(e);
        process.exit();
    }
};

function Seeds() {
    seedRooms();
}

Seeds();
