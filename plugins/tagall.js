
let handler = async(m, { conn, text, participants }) => {
  let teks = `${text ? text : ' '}\n\n`
		      	for (let mem of participants) {
		            teks += `@${mem.id.split('@')[0]}\n`
				}
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['•[𝗧𝗔𝗚 𝗔𝗟𝗟]•𝐏𝐞𝐬𝐚𝐧: <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler


