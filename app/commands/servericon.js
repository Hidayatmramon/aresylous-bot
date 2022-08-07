const { MessageEmbed } = require('discord.js')

module.exports = {
name: "servericon",
  description: "Show icon server",
  run: async (client, message, args) => {
    
    const embed = new MessageEmbed()
    .setTitle("**Server Icon**")
    .setColor('#7289da')//colornya bebas kalian bisa Ganti apa aja
  .setImage(message.guild.iconURL({dynamic : true, size: 4096}))
    
    message.channel.send(embed)
    }
}