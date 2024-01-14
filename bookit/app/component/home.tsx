export default async function Home(data: any) {

    return (
        <div className="p-6">
            <h1 className="text-4xl text-bold">{process.env.WEBSITE_NAME}</h1>
        </div>
    );
}
