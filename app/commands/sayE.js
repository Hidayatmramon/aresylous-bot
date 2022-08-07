const Discord = require("discord.js");


module.exports = {
  name: "say-e",
  description: "Say message",
  usage: "say-e <text>",
  alias: ["sy"],
  deny: ['EVERYONE'],
  run: async (client, message, args, embed) => {
   
    if(message.guild === null)return;

  
    if (message.author.bot) return;
   // const sayMessage = args.join(" ");
   // message.delete({ timeout: 3000 });
    
    const sayEmbed = new Discord.MessageEmbed()
   .setDescription(sayEmbed)
    .setColor("BLUE")
    message.channel.send(sayEmbed);
    
  

  }
}  