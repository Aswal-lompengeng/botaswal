/*const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tekbe/i.test(m.quoted.text)) return !0
  this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
  if (!(id in this.tebakbendera)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == this.tebakbendera[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tebakbendera[id][2]
      m.reply(`𝐆𝐆 𝐁𝐄𝐍𝐀𝐑✅\n+${this.tebakbendera[id][2]} XP`)
      clearTimeout(this.tebakbendera[id][3])
      delete this.tebakbendera[id]
    } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`𝐃𝐢𝐤𝐢𝐭 𝐥𝐚𝐠𝐢 𝐚𝐲𝐨🙈`)
    else m.reply(`𝐒𝐞𝐥𝐚𝐦𝐚𝐭,𝐣𝐚𝐰𝐚𝐛𝐚𝐧𝐦𝐮 𝐒𝐀𝐋𝐀𝐇❌`)
  }
  return !0
}
handler.exp = 0

module.exports = handler*/



const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tekbe/i.test(m.quoted.text)) return !0
    this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
    if (!(id in this.tebakbendera)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.tebakbendera[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakbendera[id][2]
            global.db.data.users[m.sender].tiketcoin += 1
            m.reply(`*Benar!*\n+${this.tebakbendera[id][2]} XP\n+1 Tiketcoin`)
            clearTimeout(this.tebakbendera[id][3])
            delete this.tebakbendera[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
