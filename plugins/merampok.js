
// let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 100000))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag member yg mau dijadikan target pencurian hati,eh mksudnya uang!'
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  let __timers = (new Date - global.db.data.users[m.sender].lastrob)
  let _timers = (3600000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastrob > 3600000){
  if (10000 > users[who].money) throw 'Target lagi Gaada Uang:(, mari doakan dia agar rezeki ny bisa melimpah😁'
  users[who].money -= dapat * 1
  users[m.sender].money += dapat * 1
  global.db.data.users[m.sender].lastrob = new Date * 1
  conn.reply(m.chat, `Berhasil Merampok hati Target,eh mksudnya Uangnya Sebesar ${dapat}`, m)

}else conn.reply(m.chat, `Hadeh,kan kamu Sudah merampok sebelumnya😑tunggu hingga suasana jadi kondusif,agar polisi tdk dlm posisi terbaik ny,silahkan mnunggu selama ${timers} untuk merampok lagi👌`, m)
}
handler.help = ['merampok *@tag*']
handler.tags = ['rpg']
handler.command = /^merampok$/
handler.limit = true
handler.group = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
