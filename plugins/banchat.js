let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Done!')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['𝘿𝙤𝙣𝙚✓ 𝘉𝘰𝘵 𝘛𝘥𝘬 𝘈𝘬𝘢𝘯 𝘔𝘦𝘳𝘦𝘴𝘱𝘰𝘯!']
handler.tags = ['owner']
handler.command = /^banchat|bnc$/i
handler.owner = true

module.exports = handler
