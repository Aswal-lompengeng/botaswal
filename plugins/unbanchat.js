let handler = async (m, { conn }) => {
  global.db.data.chats[m.chat].isBanned = false
  m.reply('𝐁𝐎𝐓 𝐀𝐊𝐀𝐍 𝐊𝐄𝐌𝐁𝐀𝐋𝐈 𝐌𝐄𝐑𝐄𝐒𝐏𝐎𝐍✅')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat|bannd$/i
handler.owner,handler.mods = true

module.exports = handler
