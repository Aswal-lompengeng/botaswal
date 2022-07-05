let fs = require ('fs')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
await m.reply('*「✰𝐓𝐔𝐍𝐆𝐆𝐔✰」𝙎𝙚𝙙𝙖𝙣𝙜 𝘿𝙞 𝙋𝙧𝙤𝙨𝙚𝙨...⏳*')
    if (!m.quoted) throw `balas stiker dengan caption *${usedPrefix + command}*`
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw `balas stiker dengan caption *${usedPrefix + command}*`
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2png(media)
    }
    await conn.sendFile(m.chat, out, 'out.png', '*Dah Jadi Nih😉*', m, false)
}
handler.help = ['toimg (reply)']
handler.tags = ['maker']
handler.command = /^toimg$/i
handler.limit = true

module.exports = handler
