import Link from "next/link";

export default function Pins( { icon, text, href }: { icon: React.ReactNode; text: string; href: string } ) {
    return (
        <Link href={href}>
            <button className="bg-black/10  flex justify-center text-xl items-center gap-2 p-3 rounded-full hover:bg-black/50 hover:cursor-pointer transition">
                {icon}
                {text}
            </button>
        </Link>
    );
}