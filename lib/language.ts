
export type Language =  'fr' | 'en';

export const translations = {
    // Navigation
    nav: {
        home: { fr: 'Accueil', en: 'Home' },
        products: { fr: 'Produits', en: 'Products' },
        contact: { fr: 'Contact', en: 'Contact' },
        about: { fr: 'Bio', en: 'About' },
        login: { fr: 'Connexion', en: 'Login' },
        signup: { fr: "S'inscrire", en: 'Sign Up' },
        logout: { fr: 'Déconnexion', en: 'Logout' },
    },
    
    // Hero Section
    hero: {
        title: { 
            fr: 'Bienvenue chez Philips', 
            en: 'Welcome to Philips' 
        },
        subtitle: { 
            fr: 'Votre guichet unique pour tout ce qui concerne l\'électronique', 
            en: 'Your one-stop shop for all things electronics' 
        },
        shopNow: { fr: 'Acheter maintenant', en: 'Shop Now' },
    },

    Pins1: {
        title: { fr: 'Votre avantage à domiciles', en: 'Your Home Advantage' },
        desc: { fr:'Des expériences à la maison moins exigeantes et plus gratifiantes', en:'Making home experiences less demanding and more rewarding' },
    },

    Pins2: {
        title: { fr: 'Apporter des innovations qui comptent', en: 'Bringing Innovations That Matter' },
        desc: { fr:'Nos produits vous aident à bien vivre, à rester en bonne santé et à profiter de la vie à la maison.', en:'Our products help you live well, stay healthy, and enjoy life at home.' },
    },

    Pins3: {
        title: { fr: '130 ans d\'excellence', en: '130 Years of Excellence' },
        desc: { fr:'Nous sommes une marque que vous reconnaissez et en laquelle vous avez confiance avec plus d\'un siècle d\'histoire.', en:'We are a brand you recognize and trust with over a century of history.' },
    },

    Pins4: {
        title: { fr: 'Durable et circulaire', en: 'Durable and Circular' },
        desc: { fr:'Notre responsabilité est toujours envers les personnes et la planète.', en:'Our responsibility is always towards people and the planet.' },
    },

    Pins5: {
        title: { fr: 'Livraison gratuite', en: 'Free Delivery' },
        desc: { fr:'Livraison gratuite - sans minimum d\'achat', en:'Free delivery - no minimum purchase required' },
    },

    Pins6: {
        title: { fr: 'Pour ceux qui font d\'une maison un chez soi', en: 'For Those Who Make a House a Home' },
        desc: { fr:'Conception d\'appareils électroménagers pour votre maison', en:'Designing home appliances for your home' },
    },

    Pins7: {
        title: { fr: 'Émissions compensées', en: 'Carbon Neutral' },
        desc: { fr:'Nous compensons toutes les émissions CO2 des livraisons de notre boutique Philips.', en:'We compensate for all CO2 emissions from deliveries of our Philips store.' },
    },

    Pins8: {
        title: { fr: 'Payez plus tard', en: 'Pay Later' },
        desc: { fr:'Payez jusqu\'à 30 jours plus tard avec Klarna', en:'Pay up to 30 days later with Klarna' },
    },

    // Categories
    categories: {
        title: { fr: 'Catégories de produits', en: 'Product Categories' },
        meat: { fr: 'Viande & produits carnés', en: 'Meat & Meat Products' },
        dairy: { fr: 'Produits laitiers', en: 'Dairy Products' },
        agriculture: { fr: 'Produits agricoles', en: 'Agricultural Products' },
        crafts: { fr: 'Artisanat mongol', en: 'Mongolian Crafts' },
    },

    // Auth
    auth: {
        email: { fr: 'Email', en: 'Email' },
        password: { fr: 'Mot de passe', en: 'Password' },
        confirmPassword: { fr: 'Confirmer le mot de passe', en: 'Confirm Password' },
        firstName: { fr: 'Prénom', en: 'First Name' },
        lastName: { fr: 'Nom', en: 'Last Name' },
        phone: { fr: 'Téléphone', en: 'Phone' },
        loginTitle: { fr: 'Connexion', en: 'Login' },
        signupTitle: { fr: "Créer un compte", en: 'Create Account' },
        noAccount: { fr: "Pas de compte ?", en: "Don't have an account?" },
        hasAccount: { fr: 'Déjà un compte ?', en: 'Already have an account?' },
    },


    // Products
    products: {
        addToCart: { fr: 'Ajouter au panier', en: 'Add to Cart' },
        viewDetails: { fr: 'Voir les détails', en: 'View Details' },
    },

    // Common
    common: {
        loading: { fr: 'Chargement...', en: 'Loading...' },
        error: { fr: 'Erreur', en: 'Error' },
        success: { fr: 'Succès', en: 'Success' },
        save: { fr: 'Enregistrer', en: 'Save' },
        cancel: { fr: 'Annuler', en: 'Cancel' },
        submit: { fr: 'Soumettre', en: 'Submit' },
        back: { fr: 'Retour', en: 'Back' },
        next: { fr: 'Suivant', en: 'Next' },
    },

    // Footer
    footer: {
        privacy: { 
            fr: 'Politique de confidentialité', 
            en: 'Privacy Policy' 
        },
        copyright: { fr: '© 2024 Philips. Tous droits réservés.', en: '© 2024 Philips. All rights reserved.' },
        terms: { fr: 'Conditions d\'utilisation', en: 'Terms of Service' },
        contact: { fr: 'Contactez-nous', en: 'Contact Us' },
    },
} as const;

export function t(key: string, lang: Language): string {
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
        result = result?.[k];
        if (!result) return key;
    }
    
    return result[lang] || result.en || key;
}
