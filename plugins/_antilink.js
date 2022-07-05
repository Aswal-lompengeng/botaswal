let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINK 」*\n\n𝐓𝐄𝐑𝐃𝐄𝐓𝐄𝐊𝐒𝐈⚠️ *${await conn.getName(m.sender)}* Mengirim Link Grup💢Aduh kak😣share link ada tempat khususnya,knp hrus disini yg jelas dilarang😑!\n\nMaaf ya,Aturan hrus dijlankan jdi kamu akn di kick!`)
    if (isAdmin) return m.reply('*Astaghfirullah,maaf ya min😢 kirain kamu member hehe..*')
    if (!isBotAdmin) return m.reply('*Fitur ini dpt digunakan setelah Bot menjadi Admin 🤗*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*「 ANTI LINK 」*\n\nBeliau ini kocak gaming guys,hampir aj kena kick.\nJikalau Linknya Bukan dri grup ini👀')
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler


