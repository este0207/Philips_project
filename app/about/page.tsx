import InfoCard from "../../components/ui/InfoCard";
import { FaLightbulb, FaHandsHelping, FaLeaf } from "react-icons/fa";

export default function About() {
    return (
        <main className="flex flex-col items-center min-h-screen bg-transparent py-16 pt-30 px-4">
            <section className="max-w-3xl text-center mb-12">
                <h1 className="text-5xl font-bold text-white mb-4">À propos de Philips</h1>
                <p className="text-lg text-gray-800 mb-6">
                    Depuis plus d'un siècle, Philips est synonyme d'innovation, de confiance et de bien-être. Notre mission : améliorer la vie de chacun grâce à des technologies de pointe, accessibles et responsables.
                </p>
                <p className="text-base text-gray-700">
                    Nous croyons en un avenir où la santé, le confort et la durabilité sont à la portée de tous. Chaque produit Philips est conçu pour inspirer la confiance, simplifier le quotidien et contribuer à un monde meilleur.
                </p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
                <InfoCard
                    titre="Innovation continue"
                    desc="Philips repousse sans cesse les limites de la technologie pour offrir des solutions intelligentes, intuitives et fiables."
                    icon={<FaLightbulb className="text-yellow-400 text-4xl" />}
                />
                <InfoCard
                    titre="Confiance & Engagement"
                    desc="La satisfaction et la sécurité de nos clients sont au cœur de nos priorités. Nous nous engageons à offrir des produits de qualité supérieure."
                    icon={<FaHandsHelping className="text-blue-600 text-4xl" />}
                />
                <InfoCard
                    titre="Durabilité"
                    desc="Nous innovons pour un avenir plus vert, en intégrant l’éco-responsabilité dans chaque étape de la conception de nos produits."
                    icon={<FaLeaf className="text-green-500 text-4xl" />}
                />
            </section>
            <section className="max-w-2xl text-center">
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">Philips, une marque de confiance</h2>
                <p className="text-gray-700">
                    Rejoignez des millions de foyers et de professionnels qui font confiance à Philips pour améliorer leur quotidien. Ensemble, construisons un avenir plus sain, plus simple et plus durable.
                </p>
            </section>
        </main>
    );
}