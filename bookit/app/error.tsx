"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset?: () => void;
}) {
    return (
        <div className="flex h-full flex-col items-center justify-center p-10">
            <h1 className="font-bold text-red-500 text-2xl text-center">
                Something went wrong!
            </h1>
            <div className="m-4">
                <p className="font-bold">Error Message</p>
                <p>{error.message}</p>
            </div>

            <p>
                <span className="font-bold">Sorry</span> for the inconvenience!
            </p>
            <button
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                onClick={() => reset?.()}
            >
                Try again
            </button>
        </div>
    );
}
