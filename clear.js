const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = '!';

bot.on('ready', () => {
    console.log("ClearChat.js as ready !");
})

bot.on('message', message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);



    // CLEAR
    if (msg.startsWith(prefix + 'CLEAR')) {
        async function purge() {
            message.delete();

          
            if (!message.member.roles.find("name", "Moderateur")) {
                message.channel.send('Vous devez avoir le grade \`Moderateur\` pour utiliser cette commande');
                return;
            }

            if (isNaN(args[0])) {
                message.channel.send('Vous devez entrer un nombre. \n Utilisation: ' + prefix + 'clear <nombre>');
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages found, deleting...');
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`));

        }

        purge();

    }
});




bot.login('')
