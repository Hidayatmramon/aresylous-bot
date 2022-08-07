const Discord = require("discord.js"); // We use Discord.JS
const bot = new Discord.Client();
const express = require("express");
const app = express();
const fs = require("fs");
//untuk bot ny hidup lama
app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT);

const prefix = "/"; // Prefix untuk Bot

bot.snipe = new Map();

bot.aliases = new Discord.Collection();
bot.commands = new Discord.Collection();

const commandFile = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));
commandFile.forEach(file => {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
  if (command.alias) {
    command.alias.forEach(alias => {
      bot.aliases.set(alias, command);
    });
  }
  console.log(
    `Loaded command ${command.name} with alias(es) => ${command.alias}`
  );
});

//bot.on("ready", () => {
//console.log("bot sudah on");
//});
bot.on("ready", async () => {
  const status = ["Aresylous-bot"];
  setInterval(() => {
    const statusnum = Math.floor(Math.random() * status.length);

    bot.user.setActivity(status[statusnum], {
      type: "STREAMING",
      url: "https://twitch.com/twitch"
    });
  }, 60000);
  console.log(`${bot.user.tag} sudah online!`);
});

bot.on("messageDelete", message => {
  bot.snipe.set(message.channel.id, message);
});

bot.on("message", function(message) {
  // Deklarasi :v
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();

  if (message.content === "hi") {
    return message.reply("Hi");
  }
  if (message.content.toLowerCase() == "whose server?") {
    return message.reply(`have <@${message.guild.ownerID}>`);
  }
  if (cmd === "info-link") {
    let embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.displayAvatarURL())
      .setTitle("Informasi Link")
      .setDescription("Let's go visit the link below!")
      .setTimestamp()
      //	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png')
      .addFields(
        {
          name: "Twitter Kami",
          value: "[Click Here](https://twitter.com/aresylous)",
          inline: true
        },
        {
          name: "Facebook page",
          value: "[Click Here](https://www.facebook.com/teamaresylous/)",
          inlne: true
        }
      );

    message.channel.send(embed);
  }
  // Tempat Pembatalan Process :v
  if (message.author.bot) return; // Bot tidak akan respon jika yang menggunakannya adalah sesama Bot

  if (cmd === "twitter") {
    let embed = new Discord.MessageEmbed()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/756114199427547216/776278938115899412/T125rauK_400x400.png"
      )
      .setTitle("Team Aresylous (@aresylous)")
      .setURL("https://twitter.com/aresylous")
      .setDescription("Indonesia Minecraft Build Team")
      .setTimestamp()
      .setFooter(
        "Twitter",
        "https://cdn.discordapp.com/attachments/756114199427547216/776281547136696340/logo.png"
      )
      .setColor("BLUE")
      .addFields(
        {
          name: "Tweets",
          value: "25",
          inlne: true
        },
        {
          name: "Followers",
          value: "43",
          inlne: true
        }
      );
    message.delete({ timeout: 3000 });

    message.channel.send(embed);
  }
  if (cmd === "planet-minecraft") {
    let embed = new Discord.MessageEmbed()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/756114199427547216/776435895535665192/received_792635014634569.webp"
      )
      .setTitle("Team Aresylous - Planet Minecraft")
      .setURL("https://www.planetminecraft.com/member/team_aresylous")
      .setDescription("Check out our planet minecraft here")
      .setTimestamp()
      .setFooter(
        "Planet Minecraft",
        "https://cdn.discordapp.com/attachments/756114199427547216/776459910035669057/planet-1.jpg"
      )
      .setColor("BLUE")
      .addFields({
        name: "subscribe",
        value: "54",
        inlne: true
      });
    message.delete({ timeout: 3000 });
    message.channel.send(embed);
  }
  if (cmd === "facebook") {
    let embed = new Discord.MessageEmbed()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/756114199427547216/776435895535665192/received_792635014634569.webp "
      )
      .setDescription(" gak tau text des nya mending tidur");
    message.channel.send(embed)
  }
  // Tempat Pembatalan Process :v
  if (message.author.bot) return; // Bot tidak akan respon jika yang menggunakannya adalah sesama Bot
  if (!message.content.startsWith(prefix)) return; // Bot tidak akan respon jika tidak dijalankan menggunakan Prefix
  if (!message.guild) return; // Bot tidak akan respon jika dijalankan melalui DM

  // Command Handler
  try {
    const file = bot.commands.get(cmd) || bot.aliases.get(cmd);
    if (!file) return;

    file.run(bot, message, args);
  } catch (e) {
    // Ini akan nge-catch segala error, kecuali perintah tidak tersedia
    console.log(e.stack);
  }
});
//buat on in bot ny

bot.login(process.env.BOT_TOKEN);
