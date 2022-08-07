const randomPuppy = require("random-puppy");
const Discord = require("discord.js");

module.exports = {
  name: "meme",
  description: "Memberikan anda sebuah meme",
  usage: "/meme",
  alias: [],
  run: async (client, message, args) => {
    const subredditmeme = ["meme", "indonesia","memes"]
    const random = subredditmeme[Math.floor(Math.random() *
                   subredditmeme.length)]
    
    const img = await randomPuppy(random);
    
    
    message.channel.send(
      {
        embed: {
          title: `From r/${random}`,
          image: {
            url: img
          }
        }
      }
    )
    
  } 
}