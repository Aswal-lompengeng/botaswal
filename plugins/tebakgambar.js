let fetch = require('node-fetch')

let timeout = 60000
let poin = 50000
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  let id = m.chat
  if (id in conn.tebakgambar) {
    conn.reply(m.chat, 'Maaf kak๐hehe,soal sebelumnya masih belum terjawab๐', conn.tebakgambar[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
  ${json.deskripsi}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint untuk hint
Bonus: ${poin} XP
Tiketcoin: 1 Tiketcoin
    `.trim()
  conn.tebakgambar[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakgambar.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakgambar[id]) conn.reply(m.chat, `๐๐๐ค๐ญ๐ฎ ๐๐๐๐ข๐ฌโ!\n๐๐๐ฐ๐๐๐๐ง ๐ฒ๐  ๐๐๐ง๐๐ซ ๐๐๐๐ฅ๐๐กโก๏ธ*${json.jawaban}*`, conn.tebakgambar[id][0])
      delete conn.tebakgambar[id]
    }, timeout)
  ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i
handler.limit = true
handler.group = true

module.exports = handler
