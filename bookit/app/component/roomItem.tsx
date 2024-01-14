"use client"
import Image from "next/image";
import StarRatings from "react-star-ratings";
import { IRecordRoom } from "@/config/interfaces";

interface Props {
    room: IRecordRoom
}

export default function RoomItem({room}: Props) {
    return (
        <div className="bg-gray-300">
            <div className="">
                {/** Using keyword 'unoptimized' to allow external URL.  */}
                <Image
                    src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
                    alt={room.name}
                    width="250"
                    height="150"
                    unoptimized
                ></Image>
            </div>
            <div className="font-bold">{room.name}</div>
            <div>$ {room.pricePerNight}</div>
            <div className="">
                <StarRatings
                    rating={4}
                    starRatedColor="red"
                    numberOfStars={5}
                    starDimension="12px"
                    starSpacing="1px"
                    name="rating"
                />
            </div>
            <div className="">Reviews</div>
            <button>View Details</button>
        </div>
    );
}
