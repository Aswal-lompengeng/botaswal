let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} 𝐊𝐚𝐦𝐮 𝐒𝐞𝐝𝐚𝐧𝐠 𝐀𝐅𝐊 𝐃𝐞𝐧𝐠𝐚𝐧 𝐀𝐥𝐚𝐬𝐚𝐧  ${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.limit = true

module.exports = handler
