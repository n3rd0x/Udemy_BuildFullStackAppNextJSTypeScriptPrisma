import { Toaster } from "react-hot-toast";

export default function GlobalProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Toaster />
            {children}
        </>
    );
}
