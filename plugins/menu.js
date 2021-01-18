let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://youtube.com/channel/UCTJeVQCq5Rbh9sL92smoJeg')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'ru-ru'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
🤖 [БОТ 3.0] 🤖
Создатель: @HELPMAN

Привет, ${name} 👋
Опыт(карма): ${exp}

Начисление:
+1 Exp/pesan biasa
+10 Exp/command

📟 Waktu: ${time}
📆 Сегодня: ${week}, ${date}

${more.repeat(1000)}
╠═════✪〘 МЕНЮ 〙✪═══
║
╠═〘 Xp 〙 ═
╠➥ ${_p}leaderboard [СПИСОК ЛИДЕРОВ]
║
╠═〘 КОМАНДЫ 〙 ═
╠➥ ${_p}меню(список команд)
╠➥ ${_p}помощь
╠➥ ${_p}?
║
╠═〘 Tutor BoT 〙 ═
╠➥ ${_p}tutorial
║
╠═〘 Quotes 〙 ═
╠➥ ${_p}bucin
╠➥ ${_p}pantun
╠➥ ${_p}murothal
╠➥ ${_p}quran
║
╠═〘 Kerang 〙 ═
╠➥ ${_p}apakah
╠➥ ${_p}kapankah
╠➥ ${_p}kapan
║
╠═〘 Others 〙 ═
╠➥ ${_p}qr <teks>
╠➥ ${_p}стикер (caption)
╠➥ ${_p}stiker <url>
╠➥ ${_p}toimg (reply)
╠➥ ${_p}ssweb <url>
╠➥ ${_p}sswebf <url>
╠➥ ${_p}google <pencarian>
╠➥ ${_p}googlef <pencarian>
╠➥ ${_p}readmore <teks>|<sembunyi>
╠➥ ${_p}quran
╠➥ ${_p}modApk
║
╠═〘 Group 〙 ═
╠➥ ${_p}add [62xxxxxxxxx]
╠➥ ${_p}promote [@tagmember]
╠➥ ${_p}demote [@tagadmin]
╠➥ ${_p}linkgrup
╠➥ ${_p}pengumuman [text]
╠➥ ${_p}hidetag [text]
╠➥ ${_p}listonline
╠➥ ${_p}kick @Member
╠➥ ${_p}grouplist
║
╠═〘 EXPERIMENTAL 〙 ═
╠➥ ${_p}jadibot [kode login jika ada / kosongin]
╠➥ ${_p}berhenti
╠➥ ${_p}getcode
║
╠═〘 OWNER 〙 ═
╠➥ ${_p}bcgc <teks>
╠➥ ${_p}setmenu <teks>
╠➥ ${_p}deletechat (chat grup)
╠➥ ${_p}deletechat group
╠➥ ${_p}mutechat (chat grup)
╠➥ ${_p}mutechat group
║
╠═〘 IKLAN 〙 ═
╠➥ Instagram: @arpunchs
╠➥ Github: https://github.com/Arya274/Arya-Bot
║
╠═〘 Info Bot 〙 ═
╠➥ Name : NFQ BOT
╠➥ Coded using *Nano* on Android \\w Termux
╠➥ Request? Wa.me/6288235435804
╠═════
║ Advanced:
║  > return m
║
╠═〘 NfQ BOT 〙═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(меню|помощь|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
