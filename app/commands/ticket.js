let Discord = require('discord.js')

module.exports = {
  name: "ticket",
  descirption: "ticket order",
  alias: [],
  run : async (bot, message, args) => {
  let user = message.author;
  let userid = user.id;
  let name = "ticket-" + userid;

if(message.guild.channels.cache.find(x => x.name === name)){
  if(message.member.hasPermission("MANAGE_CHANNELS")) {
    const mention = message.mentions.users.first()
    
    if(!mention){
      message.channel.send({embed: {title: "Are you sure you want to end your ticket?", description: "You can always create a ticket again. Type `sure` if you want to end your ticket and type `cancel` if you still wanted to continue your ticket.", footer: {text: "This prompt ends in 30 seconds"}}}).then(
        mes => {
    const collector = mes.channel.createMessageCollector(filter => filter.author.id == userid, { time: 30000 })
    collector.on("collect", collected => {
      if(collected.content == "sure") {
            message.guild.channels.cache.find(x => x.name === name).delete("The user ended his ticket")
            mes.delete()
            collector.stop()
        
            mes.channel.send({embed: {color: "GREEN", description: "Ticket ended! Thank you for using our ticket system."}})
          } else if (collected.content == "cancel") {
            mes.delete()
            collector.stop()
            mes.channel.send("Prompt canceled")
          } else {
            mes.delete()
            collector.stop()
            mes.channel.send("Invalid response. Canceling prompt....")
          }
        })
        collector.on('end', () => {
          mes.edit({embed: {title: "Prompt Canceled", color: "RED", description: "No response retrieved in 30 seconds"}})
        })
      }
      )
    } else {
      const filterch = message.guild.channels.cache.find(x => x.name == `ticket-${mention.id}`)
      
      if(!filterch) {
        message.channel.send({embed: {color: "RED", description: "Can't find the ticket of the user you mentioned"}})
      } else {
        message.channel.send({embed: {title: `Are you sure you want to end ${mention.username} ticket?`, description: "The user can always create their ticket again. Type `sure` if you want to end the user's ticket and type `cancel` if you still want to continue their ticket.", footer: {text: "This prompt ends in 30 seconds"}}}).then(
          mes => {
            const collector = mes.channel.createMessageCollector(filter => filter.author.id == userid, { time: 30000 })
            collector.on("collect", collected => {
              if(collected.content == "sure") {
                message.guild.channels.cache.find(x => x.name === filterch.name).delete(`${message.author.username} ended ticket`)
                mes.delete()
                collector.stop()
                
                mes.channel.send({embed: {color: "GREEN", description: "Ticket ended!"}})
                mention.send({embed: {color: "GREEN", description: `Your ticket ended by ${message.author.username}. Thank you for using our ticket system.`}})
          } else if (collected.content == "cancel") {
            mes.delete()
            collector.stop()
            mes.channel.send("Prompt canceled")
          } else {
            mes.delete()
            collector.stop()
            mes.channel.send("Invalid response. Canceling prompt....")
          }
            })
            collector.on('end', () => {
      mes.edit({embed: {title: "Prompt Canceled", color: "RED", description: "No response retrieved in 30 seconds"}})
    })
          }
        )
      }
    }
  } else {
  let embed = new Discord.MessageEmbed()
  .setTitle("Are you sure you want to end your ticket?")
  .setDescription("You can always create a ticket again. Type `sure` if you want to end your ticket and type `cancel` if you still wanted to continue your ticket.")
  .setFooter("This prompt ends in 30 seconds")
  
  message.channel.send(embed).then(mes => {
    const collector = mes.channel.createMessageCollector(filter => filter.author.id == userid, { time: 30000 })
    collector.on("collect", collected => {
      if(collected.content == "sure") {
        message.guild.channels.cache.find(x => x.name === name).delete("The user ended his ticket")
        mes.delete()
        collector.stop()
        
        mes.channel.send({embed: {color: "GREEN", description: "Ticket ended! Thank you for using our ticket system."}})
      } else if (collected.content == "cancel") {
        mes.delete()
        collector.stop()
        mes.channel.send("Prompt canceled")
      } else {
        mes.delete()
        collector.stop()
        mes.channel.send("Invalid response. Canceling prompt....")
      }
    })
    collector.on('end', () => {
      mes.edit({embed: {title: "Prompt Canceled", color: "RED", description: "No response retrieved in 30 seconds"}})
    })
  });
  }
  
} else {
  message.guild.channels.create(name).then(chan => {
    chan.setParent("1003623864712040570");
    chan.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"),{
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false
    })
    chan.updateOverwrite(user, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
    })
    
  })
  async (m) => await m.send("test")
    //.then(async(m)await m.send("test")
     }
  }
}

    // .setTimeout(funcation() await{
             //  message.channel.send("ticket");
            //   let embed = new Discord.MessageEmbed()
                //   .setTitle("ticket")
              //     .setDescription("ngetes")
             //  chan.send(embed);
          
     