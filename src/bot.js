import { Client, GatewayIntentBits, Partials } from 'discord.js'
const { GuildMembers, Guilds, MessageContent } = GatewayIntentBits;
const { User, GuildMember } = Partials;

import 'dotenv/config.js';

const config = {
    'Token': process.env.TOKEN
}

const client = new Client({
    intents:[GuildMembers,Guilds,MessageContent],
    partials:[User, GuildMember],
});
client.login(config.Token).then(()=>{
    console.log('bot is up');
    
}).catch((error)=>{console.log(error)});
