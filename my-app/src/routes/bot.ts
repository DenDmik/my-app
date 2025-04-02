import TelegramBot from "node-telegram-bot-api";

const BOT_TOKEN = '8047607057:AAEO1YAN1nBott985qtZnV32TjnE63QiMLM'
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