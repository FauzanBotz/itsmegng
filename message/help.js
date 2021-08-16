exports.menu = (prefix, i) => {
    return `*INI WM GNG*
`
}

exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `${ucapan.data.result} ${pushname}

╔═════◓「 *ɪɴғᴏ ʙᴏᴛ* 」◓═══►  
║▹  
║▹   *Creator : ${ownerName}*
║▹   *Lib : Baileys V.3.5.1*
║▹   *Prefix : 「 ${prefix} 」*
║▹   *Total Fitur : 321+*
║▹   *Total Pengguna : ${pendaftar.length}*
║▹   *Tanggal : ${tanggal}*
║▹   *Runtime Bot*
║▹   *${runtime}*
╚═════════════════════►

╔═════◓「 *ɪɴғᴏ ᴅɪʀɪᴍᴜ* 」◓═══►  
║▹  
║▹  *Name* : *${pushname}*
║▹  *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
║▹  *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
║▹  *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
║▹  *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
╚═════════════════════►

╔═════◓「 *ʟɪsᴛ ᴍᴇɴᴜ* 」◓═══►  
║▹  
║▹   *${prefix}stickermenu*
║▹   *${prefix}creatormenu*
║▹   *${prefix}groupmenu*
║▹   *${prefix}sistemmenu*
║▹   *${prefix}gamemenu*
║▹   *${prefix}downloadmenu*
║▹   *${prefix}searchmenu*
║▹   *${prefix}stalkmenu*
║▹   *${prefix}randommenu*
║▹   *${prefix}animemenu*
║▹   *${prefix}nsfwmenu*
║▹   *${prefix}toolsmenu*
║▹   *${prefix}makermenu*
║▹   *${prefix}pornomenu*
║▹   *${prefix}jbmenu*
║▹   *${prefix}storagemenu*
║▹   *${prefix}othermenu*
╚═════════════════════►

╔═════◓「 *ᴄʀᴇᴅɪᴛ ᴛǫᴛᴏ* 」◓═══►  
║▹  
║▹  *Xinz-Team*
║▹  *Aqulzz*
║▹  *Nafizz*
║▹  *Y-DhyZx*
║▹  *Ramlan ID*
║▹  *X-MrG3P5*
║▹  *Nanda*
║▹  *Juwen*
║▹  *Adiwajshing/Baileys*
╚═════════════════════►`
}

exports.stickerMenu = (prefix, ownerName) => {
    return `╔═════◓「 *sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ* 」◓═══►
║▹
║▹ *${prefix}sticker*
║▹ *${prefix}stickergif*
║▹ *${prefix}swm*
║▹ *${prefix}take*
║▹ *${prefix}toimg*
║▹ *${prefix}tovideo*
║▹*${prefix}attp*
║▹
╚═════════════════════►`
}

exports.ownerMenu = (prefix, ownerName) => {
    return ` ╔═════◓「 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 」◓═══►
║▹
║▹ *${prefix}addprem*
║▹ *${prefix}delprem*
║▹ *${prefix}ban*
║▹ *${prefix}unban*
║▹ *${prefix}join*
║▹ *${prefix}addbaword*
║▹ *${prefix}delbaword*
║▹ *${prefix}addchangelog*
║▹ *${prefix}public*
║▹ *${prefix}self*
║▹ *${prefix}exif*
║▹ *${prefix}bc*
║▹ *${prefix}setprefix*
║▹ *${prefix}setthumb*
║▹ *${prefix}clearall*
║▹ *${prefix}>*
║▹ *${prefix}$*
║▹
╚═════════════════════►`
}

exports.groupMenu = (prefix, ownerName) => {
    return `╔═════◓「 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* 」◓═══►
║▹ 
║▹  *${prefix}afk*
║▹  *${prefix}infogrup*
║▹  *${prefix}add*
║▹  *${prefix}kick*
║▹  *${prefix}promote*
║▹  *${prefix}demote*
║▹  *${prefix}linkgc*
║▹  *${prefix}leave*
║▹  *${prefix}setdesc*
║▹  *${prefix}setgrupname*
║▹  *${prefix}setppgrup*
║▹  *${prefix}opengrup*
║▹  *${prefix}closegrup*
║▹  *${prefix}tagall*
║▹  *${prefix}tagme*
║▹  *${prefix}kontak*
║▹  *${prefix}hidetag*
║▹  *${prefix}getpp*
║▹  *${prefix}mute*
║▹  *${prefix}unmute*
╚═════════════════════►`
}

exports.sistemMenu = (prefix, ownerName) => {
    return `   ╔═════◓「 *ʟɪsᴛ sᴇᴡᴀ* 」◓═══►
   ║▹
   ║▹ *ᴘᴇʀʙᴜʟᴀɴ+ғɪᴛᴜʀ ᴘʀᴇᴍɪᴜᴍ*
   ║▹                                                            
   ║▹ *ʜᴀʀɢᴀ : 25kᴋ*
   ║▹                                                            
   ║▹ *ᴘᴇʀᴍᴀɴᴇɴ ɴᴏ ᴘʀᴇᴍɪᴜᴍ*                                   
   ║▹
   ║▹ *ʜᴀʀɢᴀ : 20ᴋ*                                          
   ╚═════════════════════►`
                                                               
}

exports.gabutMenu = (prefix, ownerName) => {
    return` ╔═════◓「 *ᴅᴏɴᴀsɪ ᴏᴍ* 」◓═══►
 ║▹ ɢᴏᴘᴀʏ = ᴘᴀᴋᴇ ǫʀɪs ᴏᴍ
 ║▹ ᴅᴀɴᴀ = ᴘᴀᴋᴇ ǫʀɪs ᴏᴍ
 ║▹ ᴏᴠᴏ = ᴘᴀᴋᴇ ǫʀɪs ᴏᴍ
 ║▹ ᴘᴜʟsᴀ = 𝟶𝟾𝟻𝟸𝟷𝟻𝟿𝟾𝟾𝟻𝟶𝟿
 ╚═════════════════════►`
}

exports.gameMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GAME MENU* 》 ═══
║▹ 
║▹  *${prefix}tictactoe*
║▹  *${prefix}delttt*
║▹  *${prefix}tebakgambar*
║▹  *${prefix}family100*
║▹  *${prefix}suit*
║▹  *${prefix}apakah*
║▹  *${prefix}bisakah*
║▹  *${prefix}kapankah*
║▹  *${prefix}hobby*
║▹  *${prefix}rate*
║▹  *${prefix}cekbapak*
║▹  *${prefix}seberapagay*
║▹  *${prefix}truth*
║▹  *${prefix}dare*
╚═════════════════════►`
}

exports.downloadMenu = (prefix, ownerName) => {
    return ` ╔═════◓「 *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ* 」◓═══►
║▹ 
║▹  *${prefix}ytmp3*
║▹  *${prefix}ytmp4*
║▹  *${prefix}play*
║▹  *${prefix}playmp4*
║▹  *${prefix}tiktok*
║▹  *${prefix}tiktokmp3*
║▹  *${prefix}instagram*
║▹ *${prefix}facebook*
║▹ 
╚═════════════════════►`
}

exports.searchMenu = (prefix, ownerName) => {
    return ` ╔═════◓「 *sᴇᴀʀᴄʜ ᴍᴇɴᴜ* 」◓═══►
║▹ 
║▹  *${prefix}yts*
║▹  *${prefix}pinterest*
║▹ 
╚═════════════════════►`
}

exports.stalkMenu = (prefix, ownerName) => {
    return `╔═════◓「 *sᴛᴀʟᴋ ᴍᴇɴᴜ* 」◓═══►
║▹ 
║▹  *${prefix}igstalk*
║▹  *${prefix}ghstalk*
║▹ 
╚═════════════════════►`
}

exports.randomMenu = (prefix, ownerName) => {
    return ` ╔═════◓「 *ʀᴀɴᴅᴋᴍ ᴍᴇɴᴜ* 」◓═══►
║▹ 
║▹  *${prefix}quotes*
║▹  *${prefix}darkjokes
║▹ *${prefix}pantun
║▹  *${prefix}bucin
║▹  *${prefix}cehor
║▹  *${prefix}fakta
║▹  *${prefix}katabijak
║▹  *${prefix}motivasi
║▹ 
╚═════════════════════►`
}

exports.animeMenu = (prefix, ownerName) => {
    return `╔═════◓「 *ᴀɴɪᴍᴇ ᴍᴇɴᴜ* 」◓═══►
║▹ 
║▹  *${prefix}waifu*
║▹  *${prefix}loli*
║▹  *${prefix}husbu*
║▹  *${prefix}shota*
║▹  *${prefix}nekonime*
║▹  *${prefix}megumin*
║▹  *${prefix}sagiri*
║▹  *${prefix}shinobu*
║▹ 
╚═════════════════════►`
}

exports.toolsMenu = (prefix, ownerName) => {
    return `╒═══ 《 *TOOLS MENU* 》 ═══
├────────────────────
├≽ *${prefix}nulis*
├≽ *${prefix}nuliskiri*
├≽ *${prefix}nuliskanan*
├≽ *${prefix}foliokiri*
├≽ *${prefix}foliokanan*
├≽ *${prefix}tinyurl*
├≽ *${prefix}translate*
├≽ *${prefix}ebase64*
├≽ *${prefix}debase64*
├≽ *${prefix}ehex*
├≽ *${prefix}dehex*
├≽ *${prefix}ebinary*
├≽ *${prefix}debinary*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.makerMenu = (prefix, ownerName) => {
    return `╔═════◓「 *ᴍᴀᴋᴇʀ ᴍᴇɴᴜ* 」◓═══►

║▹  *${prefix}hartatahta*
║▹  *${prefix}neon*
║▹  *${prefix}matrix*
║▹  *${prefix}blackpink*
║▹  *${prefix}halloween*
║▹  *${prefix}thundername*
║▹  *${prefix}devilwings*
║▹  *${prefix}cloudtext*
║▹  *${prefix}bloodtext*
║▹  *${prefix}bloodtext2*
║▹  *${prefix}steeltext*
║▹  *${prefix}lavatext*
║▹  *${prefix}toxiclogo*
║▹  *${prefix}dropwater*
║▹  *${prefix}metaldark*
║▹  *${prefix}sandwrite*
║▹  *${prefix}3dwater*
║▹  *${prefix}graffiti*
║▹  *${prefix}graffiti2*
║▹  *${prefix}phlogo*
║▹  *${prefix}glitch*
║▹  *${prefix}graffiti3*
║▹  *${prefix}layeredtext*
║▹  *${prefix}vintage*
║▹  *${prefix}3dspace*
║▹  *${prefix}stonetext*
║▹  *${prefix}avengers*
║▹  *${prefix}marvellogo*
║▹  *${prefix}3dmetal*
║▹  *${prefix}lionlogo*
║▹  *${prefix}wolflogo*
║▹  *${prefix}ninjalogo*
║▹  *${prefix}pubglogo*
║▹  *${prefix}shadowtext*
║▹  *${prefix}smoketext*
║▹  *${prefix}romancetext*
║▹  *${prefix}carvedwood*
║▹  *${prefix}harrypotter*
║▹  *${prefix}flamingtext*
║▹  *${prefix}falleaves*
║▹  *${prefix}underwater*
║▹  *${prefix}wolfmetal*
║▹  *${prefix}woodboard*
║▹  *${prefix}undergrass*
║▹  *${prefix}coffetext*
║▹  *${prefix}lovetext*
║▹  *${prefix}burnpaper*
║▹  *${prefix}lovemessage*
║▹ 
╚═════════════════════►`
}

exports.otherMenu = (prefix, ownerName) => {
    return `╔═════◓「 *ᴏᴛʜᴇʀ ᴍᴇɴᴜ* 」◓═══►

║▹  *cekprefix*
║▹  *${prefix}stats*
║▹  *${prefix}limit*
║▹  *${prefix}balance*
║▹ *${prefix}runtime*
║▹ *${prefix}speed*
║▹  *${prefix}owner*
║▹  *${prefix}donasi*
║▹  *${prefix}sourcecode*
║▹  *${prefix}cekprem*
║▹  *${prefix}listprem*
║▹  *${prefix}listban*
║▹  *${prefix}listbadword*
║▹  *${prefix}buylimit*
║▹  *${prefix}buyglimit*
║▹  *${prefix}topglobal*
║▹  *${prefix}toplocal*
║▹ *${prefix}readmore*
║▹ *${prefix}cekapikey*
║▹ 
╚═════════════════════►`
}

exports.hentaiMenu = (prefix, ownerName) => {
    return `╔═════◓「 *ʜᴇɴᴛᴀɪ ᴍᴇɴᴜ* 」◓═══►
║▹ 
║▹  *${prefix}randomhentong*
║▹  *${prefix}kemonomimi*
║▹  *${prefix}ero*
║▹  *${prefix}echi*
║▹  *${prefix}ahegao*
║▹  *${prefix}trap*
║▹  *${prefix}neko*
║▹  *${prefix}blowjob*
║▹  *${prefix}kitsune*
║▹  *${prefix}yuri*
║▹  *${prefix}boobs*
║▹  *${prefix}kuni*
║▹ 
╚═════════════════════►`
}

exports.storageMenu = (prefix, ownerName) => {
    return `╔═════◓「 *sᴛᴏʀᴀɢᴇ ᴍᴇɴᴜ* 」◓═══►
║▹ 
║▹  *${prefix}sound*
║▹ 
╚═════════════════════►`
}
