import { promises as fs } from "fs";
import { prisma } from "../backend/config/prisma";
import { RoomRecord } from "../backend/config/interfaces";

// NOT WORKING
const seedRooms = async () => {
    try {
        const filePath = process.cwd() + "/seeder/rooms.json";
        const contents =  await fs.readFile(filePath, "utf-8");
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

seedRooms();
