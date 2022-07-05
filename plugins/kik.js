let handler = async (m, { conn, args }) => {
let fs = require('fs')
 let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  aki = m.quoted ? [m.quoted.sender] : m.mentionedJid
  let users = aki.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  wayy = '_𝗠𝗮𝗮𝗳 𝘆𝗮 𝗸𝗮𝗸😔,𝗔𝗸𝘂 𝗰𝘂𝗺𝗮𝗻 𝗺𝗲𝗺𝗮𝘁𝘂𝗵𝗶 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝗔𝗱𝗺𝗶𝗻 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝘂𝘀𝗶𝗿 𝗺𝘂🙏🏻'
  for (let i of users) {
  wayy += ` @${i.split('@')[0]}`
  }
  conn.reply(m.chat, wayy, m, { contextInfo: { mentionedJid: users }})
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupParticipantsUpdate(m.chat, [user], "remove")
}
handler.help = ['kick'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(kick|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler
