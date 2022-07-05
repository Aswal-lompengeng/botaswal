const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/TEBAK JUDUL LAGU/i.test(m.quoted.text)) return !0
    this.tebaklagu = this.tebaklagu ? this.tebaklagu : {}
    if (!(id in this.tebaklagu)) return m.reply('Soal ny telah berakhir kak')
    if (m.quoted.id == this.tebaklagu[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebaklagu[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.judul.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebaklagu[id][2]
            global.db.data.users[m.sender].tiketcoin += 1
            m.reply(`𝐖𝐚𝐡 𝐁𝐞𝐧𝐚𝐫👏✅\n+${this.tebaklagu[id][2]} XP\n+1 Tiketcoin`)
            clearTimeout(this.tebaklagu[id][3])
            delete this.tebaklagu[id]
        } else if (similarity(m.text.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`𝐁𝐮𝐤𝐚𝐧 𝐢𝐭𝐮 𝐣𝐮𝐝𝐮𝐥 𝐧𝐲 𝐤𝐚𝐤🚫`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
