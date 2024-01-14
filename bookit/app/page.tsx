import RoomItem from "@/component/roomItem";
import { IRecordRoom } from "@/config/interfaces";

const getRooms = async () => {
    // Not caching the data.
    const res = await fetch(`${process.env.API_URL}/api/rooms`);

    return res.json();
};

export default async function Home() {
    const rooms = await getRooms();
    return (
        <div className="p-6">
            <h1 className="text-4xl text-bold">{process.env.WEBSITE_NAME}</h1>
            <RoomItem />
        </div>
    );
}
