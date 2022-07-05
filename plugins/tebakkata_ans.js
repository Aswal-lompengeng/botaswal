const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teka/i.test(m.quoted.text)) return !0
    this.tebakkata = this.tebakkata ? this.tebakkata : {}
    if (!(id in this.tebakkata)) return m.reply('Soal itu telah di jawab Dek☹️')
    if (m.quoted.id == this.tebakkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkata[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakkata[id][2]
            global.db.data.users[m.sender].tiketcoin += 1
            m.reply(`𝐆𝐆 𝐁𝐄𝐍𝐀𝐑👏\n+${this.tebakkata[id][2]} XP\n+1 Tiketcoin`)
            clearTimeout(this.tebakkata[id][3])
            delete this.tebakkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`𝐉𝐚𝐰𝐚𝐛𝐚𝐧𝐲𝐚 𝐦𝐞𝐧𝐝𝐞𝐤𝐚𝐭𝐢`)
        else m.reply(`𝐒𝐚𝐥𝐚𝐡 𝐤𝐚𝐤🚫`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
