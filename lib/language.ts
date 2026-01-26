export type Language =  'fr' | 'en';

export const translations = {
    // Navigation
    nav: {
        home: { fr: 'Accueil', en: 'Home' },
        products: { fr: 'Produits', en: 'Products' },
        contact: { fr: 'Contact', en: 'Contact' },
        about: { fr: 'À propos', en: 'About' },
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
        price: { fr: 'Prix', en: 'Price' },
        available: { fr: 'Disponible', en: 'Available' },
        outOfStock: { fr: 'Rupture de stock', en: 'Out of Stock' },
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
        slogan: { 
            fr: 'Ékh Oron - Réseau du peuple mongol', 
            en: 'Ékh Oron - Network of the Mongolian people' 
        },
        copyright: { fr: '© 2024 Ékh Oron. Tous droits réservés.', en: '© 2024 Ékh Oron. All rights reserved.' },
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
