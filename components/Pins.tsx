export default function Pins( { icon, text }: { icon: React.ReactNode; text: string } ) {
    return (
        <button className="bg-black/10 text-white flex justify-center text-xl items-center gap-2 p-3 rounded-full hover:bg-black/50 hover:cursor-pointer transition">
            {icon}
            {text}
        </button>
    );
}