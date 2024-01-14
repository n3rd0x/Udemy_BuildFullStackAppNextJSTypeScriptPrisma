export default function Head() {
    return (
        <>
            <title>{process.env.WEBSITE_NAME}</title>
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta name="description" content={`${process.env.WEBSITE_NAME} Demonstration`} />
            <link rel="icon" href="/favicon.ico" />
        </>
    );
}
