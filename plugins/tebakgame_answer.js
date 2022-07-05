const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tega/i.test(m.quoted.text)) return !0
  this.tebakgame = this.tebakgame ? this.tebakgame : {}
  if (!(id in this.tebakgame)) return m.reply('Soal itu telah dijawab kak,tetap semangat y🤙')
  if (m.quoted.id == this.tebakgame[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakgame[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tebakgame[id][2]
      global.db.data.users[m.sender].tiketcoin += 1
      m.reply(`𝐀𝐧𝐣𝐚𝐲 𝐆𝐚𝐦𝐞𝐫𝐬 𝐒𝐞𝐣𝐚𝐭𝐢,𝐬𝐞𝐥𝐚𝐦𝐚𝐭 𝐣𝐚𝐰𝐚𝐛𝐚𝐧𝐦𝐮 𝐁𝐞𝐧𝐚𝐫✅\n+${this.tebakgame[id][2]} XP\n+1 Tiketcoin`)
      clearTimeout(this.tebakgame[id][3])
      delete this.tebakgame[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`𝐣𝐚𝐰𝐚𝐛𝐚𝐧𝐧𝐲𝐚 𝐦𝐧𝐝𝐞𝐤𝐚𝐭𝐢`)
    else m.reply(`𝐒𝐚𝐥𝐚𝐡 𝐍𝐚𝐤❌`)
  }
  return !0
}
handler.exp = 0

module.exports = handler
