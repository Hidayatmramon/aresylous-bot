const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')

module.exports = {
  name: "help",
  description: "Y",
  usage: "/help",
  alias: ["h"],
  run: async (client, message) => {
    
    
  let embed1 = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Selamat Datang!\n\nIni adalah beberapa command yang tersedia') //ini cuma contoh
  
  .addField('Core', '`ping` `avatar` `help`', true)
  
  let embed2 = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Selamat Datang!@[mention]\n\nIni adalah beberapa command yang tersedia') //ini cuma contoh
  .addField('Informasi', '`link-info` `twitter` `facebook` `planet-minecraft`', true)
  let embed3 = new MessageEmbed()
  .setTitle('Help Commnads')
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Selamat datang!@[mention]\n\nlni adalah beberapa command yang tersedia')
  .addField('Client', '`Ticket` `maintance` `maintance`', true)
  
  let embed4 = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Selamat Datang!@[mention]\n\nIni adalah beberapa command yang tersedia')
  .addField('Music', '`maintance` `maintance` `maintance`', true)
  
  new Menu(message.channel, message.author.id, [
            {
                name: "main",
                content:embed1,
                reactions: {
                    "⏹": "stop",
                    "▶": "next"
                }
            },
            {
                name: "otherPage",
                content: embed2,
                reactions: {
                    "⏹": "stop",
                    "◀": "previous",
                    "▶": "next"
                }
            },
            {
                name: "otherPageAgain",
                content: embed3,
                reactions: {
                    "⏹": "stop",
                    "◀": "previous",
                    "▶️": "next"
                }
            },
            {
                name: "otherPageAgain",
                content: embed4,
                reactions: {
                  "⏹": "stop",
                  "◀️": "previous"
                  
               }
           }
        ]);
  
   
 }
}