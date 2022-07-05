let fetch = require('node-fetch')

let timeout = 60000
let poin = 1000
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
  let id = m.chat
  if (id in conn.tebakgame) {
    conn.reply(m.chat, 'Maaf kak :)Masih ada soal yg belum terjawab', conn.tebakgame[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tega untuk clue
Bonus: ${poin} XP
TiketCoin: ${tiketcoin}
    `.trim()
  conn.tebakgame[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakgame.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakgame[id]) conn.reply(m.chat, `𝐘𝐚𝐚𝐡..𝐰𝐚𝐤𝐭𝐮𝐧𝐲𝐚 𝐡𝐚𝐛𝐢𝐬☹️\n𝐘𝐠 𝐛𝐞𝐧𝐚𝐫 𝐀𝐝𝐚𝐥𝐚𝐡 ➡️ *${json.jawaban}*`, conn.tebakgame[id][0])
      delete conn.tebakgame[id]
    }, timeout)
  ]
}
handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgame/i
handler.limit = true
handler.group = true

module.exports = handler
