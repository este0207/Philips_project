

export default function InfoCard({ titre, desc, icon }: { titre: string, desc: string, icon: React.ReactNode }) {
    return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-sm mx-auto">
        {icon}
        <h2 className="text-2xl font-bold mb-4 text-white">{titre}</h2>
        <p className="text-white text-base">
            {desc}
        </p>
    </div>
    )
};
