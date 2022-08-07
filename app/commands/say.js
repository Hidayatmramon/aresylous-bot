const {MessageEmbed} = require("discord.js")

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    description: "Send message via bot",
    category: "mods",
    usage: "[embed] <text>",
    cooldown: 5,
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) { 
            return message.channel.send("You Dont Have Perm to use this command").then(m => m.delete({ timeout: 3000}));
         }
        if(args.length < 0) return message.channel.send("Nothing To Say?").then(m => m.delete({ timeout: 3000 }));
        const roleColor = message.guild.me.highestRole;
        if(args[0].toLowerCase() == "embed") { 
            const e = new MessageEmbed()
            .setTitle(`${message.author.username} Want To Say Something`)
            .setDescription(args.slice(1).join(" "))
            .setTimestamp()
            message.channel.send(e)
        } else {
            message.channel.send(args.join(" "))
        }
    }
}

