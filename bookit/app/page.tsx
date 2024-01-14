import Home from "@/component/home";
import Error from "@/error";
export const dynamic = "force-dynamic";

const getRooms = async () => {
    const res = await fetch(`${process.env.API_URL}/api/rooms`);

    return res.json();
};

export default async function HomePage() {
    const data = await getRooms();
    if (data?.message) {
        return <Error error={data} />;
    }

    return <Home data={data} />;
}
