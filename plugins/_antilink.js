let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*γπ«πΌπππ ππππββ°γ*\n\nπππππππππππ« *${await conn.getName(m.sender)}* Mengirim Link Grupπ’Aduh kakπ£share link ada tempat khususnya,knp hrus disini yg jelas dilarangπ!\n\nMaaf ya,Aturan hrus dijlankan jdi kamu akn di kick!`)
    if (isAdmin) return m.reply('*Astaghfirullah,maaf ya minπ’ kirain kamu member hehe..*')
    if (!isBotAdmin) return m.reply('*Fitur ini dpt digunakan setelah Bot menjadi Admin π€*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*γ πΌπππ ππππβ γ*\n\nAh..Beliau ini kocak gaming guys,hampir aj kena kick.\nJikalau Linknya Bukan dri grup iniπ')
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler


