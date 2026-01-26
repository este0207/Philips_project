# Philips Domotique - Boutique en ligne

Bienvenue sur **Philips Domotique**, votre boutique en ligne dédiée aux objets connectés et solutions domotiques Philips !

## Présentation

Philips Domotique propose une large gamme de produits tech pour la maison connectée : ampoules intelligentes, capteurs, prises connectées, systèmes de sécurité, et bien plus encore. Notre objectif est de rendre la domotique accessible à tous, pour une maison plus confortable, économe et sécurisée.

## Fonctionnalités principales

- Catalogue de produits Philips connectés
- Fiches détaillées pour chaque produit
- Ajout au panier et gestion des achats
- Interface moderne et responsive
- Authentification sécurisée (à venir)
- Paiement en ligne (à venir)

## Technologies utilisées

- [Next.js](https://nextjs.org/) (React, App Router)
- TypeScript
- Supabase (backend & base de données)
- CSS Modules/PostCSS
- Framer / Framer-Motion

## Installation et lancement

1. **Cloner le projet**
	```bash
	git clone https://github.com/este0207/Philips_project.git
	cd philis_project
	```
2. **Installer les dépendances**
	```bash
	npm install
	# ou
	yarn install
	```
3. **Configurer les variables d'environnement**
	- Créez un fichier `.env.local` à la racine avec vos clés Supabase et autres secrets nécessaires.

4. **Lancer le serveur de développement**
	```bash
	npm run dev
	# ou
	yarn dev
	```
5. Ouvrez [http://localhost:3000](http://localhost:3000) pour voir la boutique.

## Structure du projet

- `app/` : Pages principales et routes Next.js
- `components/` : Composants réutilisables (Header, Navbar, ProductCard...)
- `lib/` : Fonctions utilitaires (API Supabase, gestion des produits)
- `public/` : Images et ressources statiques

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request pour proposer des améliorations ou signaler un bug.

## Licence

Projet open-source sous licence MIT.

---

*Philips Domotique n'est pas affilié officiellement à la marque Philips. Ce projet est réalisé à des fins d'apprentissage et de démonstration.*
