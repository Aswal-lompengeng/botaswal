const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*hint/i.test(m.quoted.text)) return !0
  this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
  if (!(id in this.tebakgambar)) return m.reply('Soal itu telah dijawab Nak๐โโ๏ธ')
  if (m.quoted.id == this.tebakgambar[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakgambar[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tebakgambar[id][2]
      global.db.data.users[m.sender].tiketcoin += 1
      m.reply(`๐๐ข๐๐,๐๐๐ฐ๐๐๐๐ง๐ฆ๐ฎ ๐๐๐ง๐๐ซ๐๐ผ\n+${this.tebakgambar[id][2]} XP\n+1 Tiketcoin`)
      clearTimeout(this.tebakgambar[id][3])
      delete this.tebakgambar[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`๐๐ฒ๐จ ๐๐ข๐ค๐ข๐ญ ๐๐๐ ๐ข๐`)
    else m.reply(`๐๐๐ฅ๐๐ก ๐๐๐ฐ๐๐งโน๏ธ`)
  }
  return !0
}
handler.exp = 0

module.exports = handler
