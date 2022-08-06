let handler = async (m, { command, text }) => {
let jawab = ['Ho'oh👍', 'Saya Rasa Tidak❌', 'Yap', ' tidak kawan😑', 'Tidak', 'Yo ndak tahu kok tanya saya😪']
let siapa = jawab[Math.floor(Math.random() * jawab.length)]
m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${siapa}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']

handler.command = /^apakah$/i
handler.limit = true

module.exports = handler

