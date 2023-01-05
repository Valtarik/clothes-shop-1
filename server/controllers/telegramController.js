import {Telegraf} from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
    ctx.replyWithHTML("<b>Hello it's started</b>")
})

bot.on('text', async (ctx) => {
    ctx.replyWithHTML("<b> Sorry  your request cannot be process </b>")
})


bot.launch({webhook: {domain: process.env.API_URL}})

export default bot