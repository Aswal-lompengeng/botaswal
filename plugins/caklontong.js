let fetch = require('node-fetch')

let timeout = 60000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab kak,maaf y', conn.caklontong[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}calo untuk bantuan
Bonus: ${poin} XP
Tiketcoin: ${tiketcoin} TiketCoin
`.trim()
    conn.caklontong[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.caklontong[id]) conn.reply(m.chat, `๐๐๐ค๐ญ๐ฎ ๐ก๐๐๐ข๐ฌโ\n๐๐๐ฐ๐๐๐๐ง ๐ฒ๐  ๐๐๐ง๐๐ซ ๐๐๐๐ฅ๐๐กโก๏ธ *${json.jawaban}*\n${json.deskripsi}`, conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i
handler.limit = true

module.exports = handler
