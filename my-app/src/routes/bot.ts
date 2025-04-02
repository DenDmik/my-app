import TelegramBot from "node-telegram-bot-api";

const BOT_TOKEN = '7606495048:AAFp3L265Du6UNOpKx9tAbGDI5bwI8kkIKQ'
export const bot = new TelegramBot(`${BOT_TOKEN}`);
console.log("bot", BOT_TOKEN);

export const history: any[] = [];
bot.on("message", async (msg) => {
    try {
        await bot.sendMessage(msg.chat.id, msg.text + ", and?");
        history.push({ when: new Date(), msg });
    } catch (e) {
        console.error(e);
    }
});