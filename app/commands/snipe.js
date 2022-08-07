const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "snipe",
  description: "Mengambil pesan yang baru saja terhapus",
  alias: [],
  usage: "/snipe",
  run: async (bot, message, args) => {
    let channel = bot.channels.cache.get(args[0]) || message.mentions.channels.first()
    
    if(!channel) channel = message.channel
    
    let sniped = bot.snipe.get(channel.id)
    if(!sniped) return message.channel.send({embed: {
      description: `There's nothing to be sniped in ${channel.name}`
    }});
    let content;
    content = sniped.content
    if(sniped.content.length == 0) content = `Image Embed/Rich Embed only`
    
    const snipedembed = new MessageEmbed()
    .setAuthor(sniped.author.tag, sniped.author.displayAvatarURL({dynamic: true}))
    .setDescription(content)
    
    if(sniped.attachments.size > 0) {
      snipedembed.setImage(sniped.attachments.first().proxyURL)
    }
    message.channel.send(snipedembed)
    if(sniped.embeds.length > 0) {
      message.channel.send(sniped.embeds[0])
    }
  }
}