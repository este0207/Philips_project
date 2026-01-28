
export default function InfoCard({ titre, desc, icon }: { titre: string, desc: string, icon: React.ReactNode }) {
    return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-sm mx-auto text-white justify-center items-center flex flex-col gap-4">
        {icon}
        <h2 className="text-2xl font-bold mb-4">{titre}</h2>
        <p className="text-base">
            {desc}
        </p>
    </div>
    )
};
