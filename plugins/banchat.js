let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('ππππβ ππ¨π­ πππ€ ππ€ππ§ πππ«ππ¬π©π¨π§π«')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['πΏπ€π£πβ ππ°π΅ ππ₯π¬ ππ¬π’π― ππ¦π³π¦π΄π±π°π―!']
handler.tags = ['owner']
handler.command = /^banchat|bnc$/i
handler.owner = true

module.exports = handler
