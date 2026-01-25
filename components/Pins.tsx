export default function Pins( { icon }: { icon: React.ReactNode } ) {
    return (
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 hover:cursor-pointertransition">
            {icon}
        </button>
    );
}