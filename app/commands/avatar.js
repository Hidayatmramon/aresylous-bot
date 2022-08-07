const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "avatar",
  description: "Avatar Command",
  alias: ["ava"],
  usage: "!avatar [mention]",
  run: async (bot, message, args) => {
    let user = message.mentions.users.first()
    
    if(!user) user = message.author
    
    const avatarembed = new MessageEmbed()
    .setTitle(`${user.tag} avatar`)
    .setImage(user.displayAvatarURL({format: 'png', size: 2048, dynamic: true}))
    
    message.channel.send(avatarembed)
  }
}

