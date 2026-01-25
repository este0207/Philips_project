export default function Pins( { icon }: { icon: React.ReactNode } ) {
    return (
        <button className="bg-black text-white px-4 py-4 rounded-full hover:bg-gray-800 hover:cursor-pointer transition">
            {icon}
        </button>
    );
}