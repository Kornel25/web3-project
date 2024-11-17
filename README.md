BUT FONCTIONNEL DE L'APPLICATION

L'objectif de notre application Discord bot est d'offrir diverses commandes utilitaires 

# Discord Bot multifonction

## Description

Ce projet est un bot Discord qui permet de gérer des événements et d'envoyer des rappels pour ces événements. Le bot utilise l'API Discord pour recevoir des commandes slash et envoyer des notifications dans les canaux Discord. Les événements peuvent être ajoutés, supprimés et listés via des commandes slash. Le bot envoie des rappels pour les événements le jour même et la veille.

## Fonctionnalités

- Ajouter des événements avec une date, une heure et une description.
- Supprimer des événements existants.
- Lister tous les événements programmés.
- Envoyer des rappels pour les événements le jour même et la veille.
- converser avec le modèle chatGPT3.5 turbo.
- Création d'un sondage
- récuperer les updates d'une chaîne youtube à partir de youtube api

## Architecture

L'application utilise une architecture MPA (Multi-Page Application) avec du Server Side Rendering (SSR). Le serveur Express.js gère les requêtes HTTP et les interactions avec l'API Discord. Le rendu des pages et la gestion des événements se font côté serveur.

## Technologies utilisées

- Node.js
- Express.js
- Discord.js
- discord-interactions
- node-cron
- moment-timezone
- Google APIs

## Installation

1. Clonez le dépôt :
    git clone https://github.com/robin-salle-vinci/web3-project
    cd web3-project
2. Installez les dépendances :
    npm install
3. Créez un fichier .env et ajoutez vos variables d'environnement :
    DISCORD_TOKEN=your_discord_token
    PUBLIC_KEY=your_public_key
    PORT=3000
4. Démarrez l'application :
    npm run dev
    (+ngrok ?)

## Utilisation

### Ajouter un événement

Utilisez la commande slash `/addevent` avec les options suivantes :

- `date` : La date de l'événement (format YYYY-MM-DD).
- `heure` : L'heure de l'événement (format HH:mm).
- `description` : La description de l'événement.

### Supprimer un événement

Utilisez la commande slash `/deleteevent` avec les options suivantes :

- `date` : La date de l'événement (format YYYY-MM-DD).
- `heure` : L'heure de l'événement (format HH:mm).

### Lister les événements

Utilisez la commande slash `/listevent` pour lister tous les événements programmés.

### Créer un sondage

Utilisez la commande slash `/poll` pour créer un sondage

- `titre` : le sujet du sondage
- `option1` : première option
- `option2` : deuxième option
- `option3` : troisième option
- `option4` : quadrième option
- `option5` : cinquième option

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Réutilisation de code

| Chemin du fichier où se trouve le code réutilisé | Auteur du code source réutilisé | URL où le code réutilisé est disponible                           | Raison de la réutilisation du code                                  |
|--------------------------------|---------------------------------|---------------------------------------------------------------|-------------------------------------------------------------------|
| / | Discord.dev                    | https://discord.com/developers/docs/quick-start/getting-started | Tutoriel pour se lancer dans le développement des Discord bots   |
| /ai_bot/requests/aiml.js | AI/ML API documentation        | https://docs.aimlapi.com/quickstart/setting-up                | Mise en place de l'appel d'API pour interagir avec des modèles AI |
