let fetch = require('node-fetch')

let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (id in conn.tebaklagu) {
        conn.reply(m.chat, 'Soal sebelumnya masih belum terjawab kak😑', conn.tebaklagu[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    
    let src = await (await fetch('https://raw.githubusercontent.com/Aiinne/scrape/main/tebaklagu.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    // if (!json.status) throw json
    let caption = `
𝐓𝐄𝐁𝐀𝐊 𝐉𝐔𝐃𝐔𝐋 𝐍𝐘𝐀 𝐘 𝐆𝐔𝐘𝐒❗
Artis : ${json.artis}
Judul : _____
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}cek* untuk bantuan
Bonus: ${poin} XP
Tiketcoin: 1 Tiketcoin
*Balas pesan ini untuk menjawab!*`.trim()
    conn.tebaklagu[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklagu[id]) conn.reply(m.chat, `𝐖𝐀𝐊𝐓𝐔𝐍𝐘𝐀 𝐇𝐀𝐁𝐈𝐒☹️\n𝐘𝐆 𝐁𝐄𝐍𝐀𝐑 𝐀𝐃𝐀𝐋𝐀𝐇➡️ *${json.judul}*`, conn.tebaklagu[id][0])
            delete conn.tebaklagu[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.lagu, 'audio.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu$/i
handler.limit = true
handler.group = true
module.exports = handler
