import { IRecordRoom } from "@/config/interfaces";
import RoomItem from "@/component/roomItem"

interface Props {
    data: {
        sucess: boolean,
        pagination: number,
        numRooms: number,
        rooms: IRecordRoom[]
    }
}

export default async function Home({data}:Props) {

    const {pagination, numRooms, rooms} = data;

    return (
        <div className="p-6">
            <h1 className="text-4xl text-bold mb-4">{process.env.WEBSITE_NAME}</h1>
            <div className="items-stretch grid xl:grid-cols-4 sm:grid-cols-2 gap-6">
                {rooms?.length === 0 ? (
                    <h1 className="font-bold">Sorry! No rooms available</h1>
                ) : (
                    rooms.map((itr) => <RoomItem key={itr.id} room={itr} />)
                )}
            </div>
        </div>
    );
}
