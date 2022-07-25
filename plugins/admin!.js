let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw '𝘍𝘐𝘛𝘜𝘙 𝘐𝘕𝘐 𝘈𝘒𝘈𝘕 𝘉𝘌𝘒𝘌𝘙𝘑𝘈 𝘑𝘐𝘒𝘈 𝘒𝘈𝘔𝘜 𝘔𝘌𝘕𝘎𝘐𝘡𝘐𝘕𝘒𝘈𝘕 𝘉𝘖𝘛 𝘐𝘕𝘐 𝘔𝘕𝘑𝘈𝘋𝘐 𝘈𝘋𝘔𝘐𝘕❗'
  if (isAdmin) throw 'Padahal udah jadi admin'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
}
handler.command = /^admin!$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
