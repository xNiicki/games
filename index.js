const TicTacToe = require('discord-tictactoe');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();


const intents = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
];

const client = new Client({ intents });

const ticTacToe = new TicTacToe({ language: 'en', command: "tictactoe" });

client.on('ready', () => {
    console.log('TicTacToe bot is ready to be used.');
});

client.login(process.env.TOKEN);

// Attach TicTacToe to the Discord.js client
ticTacToe.attach(client);
