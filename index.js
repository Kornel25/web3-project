require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Créer une instance du client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Le token du bot
const token = process.env.DISCORD_TOKEN; // Remplacez VOTRE_TOKEN_ICI par le token du bot

// L'événement de connexion
client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
});

// L'événement pour écouter les messages
client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

// Connexion du bot à Discord
client.login(token);