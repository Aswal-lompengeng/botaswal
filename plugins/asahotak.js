let fetch = require('node-fetch')

let timeout = 60000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'Maaf kak๐jawab dulu soal sebelumnya ya,jgn lompat ke soal berikutnyaโ', conn.asahotak[id][0])
        throw false
    }
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}ao untuk bantuan
Bonus: ${poin} XP
Tiketcoin: ${tiketcoin} TiketCoin
`.trim()
    conn.asahotak[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.asahotak[id]) conn.reply(m.chat, `๐๐๐ ๐ฉ๐ช ๐ฃ๐ฎ๐ ๐๐๐๐๐จโ\n๐๐๐ฌ๐๐๐๐ฃ ๐ฎ๐ ๐๐๐ฃ๐๐ง ๐ผ๐๐๐ก๐๐ โก๏ธ *${json.jawaban}*`, conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i
handler.limit = true
handler.group = true

module.exports = handler
