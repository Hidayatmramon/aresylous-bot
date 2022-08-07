const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ping",
  description: "Menunjukkan Ping",
  alias: [],
  usage: "/ping",
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`**Respond:** ${Date.now() - message.createdTimestamp} ms\n**Websocket:** ${client.ws.ping} ms`)
    
    message.channel.send(embed)
  }
}