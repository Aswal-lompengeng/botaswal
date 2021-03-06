const fs = require('fs')
const fetch = require('node-fetch')

let timeout = 60000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.tebaklirik) {
        conn.reply(m.chat, 'Eits..๐โโ๏ธJawab dulu soal sebelumnyaโ', conn.tebaklirik[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teli untuk bantuan
Bonus: ${poin} XP
TiketCoin: 1 Tiketcoin
    `.trim()
    conn.tebaklirik[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklirik[id]) conn.reply(m.chat, `๐๐๐ค๐ญ๐ฎ ๐ก๐๐๐ข๐ฌ\n๐๐๐ฐ๐๐๐๐ง ๐ฒ๐  ๐๐๐ง๐๐ซ ๐๐๐๐ฅ๐๐กโก๏ธ *${json.jawaban}*`, conn.tebaklirik[id][0])
            delete conn.tebaklirik[id]
        }, timeout)
    ]
}
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i
handler.limit = true
handler.group = true

module.exports = handler
