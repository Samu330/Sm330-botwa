const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const sharp = require('sharp')
const math = require('mathjs')
const search = require("simple-play-store-search")
const google = require('google-it')
const isPorn = require('is-porn')
const { Aki } = require('aki-api')
const imgsearch = require('node-reverse-image-search')
const imgbbUploader = require('imgbb-uploader')
const moment = require('moment-timezone')
moment.tz.setDefault('America/Cancun').locale('mx_QR')
const get = require('got')
const sinesp = require('sinesp-api')
const { coins } = require('./lib/coins')
const { stdout } = require('process')
const request = require('request')
const color = require('./lib/color')
const { spawn, exec, execFile } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const { randomNimek, sleep, wall, tulis, ss } = require('./lib/functions')
const { owner, donate, down, help, admins, adult, readme, lang } = require('./lib/help')
const { doing } = require('./lib/translate.js')
const { meme, msgFilter, translate, kill } = require('./lib')
const { uploadImages } = require('./lib/fether')
const feature = require('./lib/poll')
const { sobre } = require('./lib/sobre')
const { belle } = require('./lib/belle')
const { termux } = require('./lib/termux')
const bent = require('bent')
const atbk = JSON.parse(fs.readFileSync('./lib/anti.json'))
const BrainlySearch = require('./lib/brainly')
const { removeBackgroundFromImageBase64 } = require('remove.bg')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const fetch = require('node-fetch');
const nsfw_ = JSON.parse(fs.readFileSync('./lib/NSFW.json'))
const slce = JSON.parse(fs.readFileSync('./lib/silence.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
const exsv = JSON.parse(fs.readFileSync('./lib/exclusive.json'))
const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'


module.exports = kconfig = async (kill, message) => {
    try {
	const { type, id, from, t, sender, author, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
	const techapi = 'INSIRA UMA API DO SITE OPEN API I-TECH' // MUDE ISSO PARA UMA API DO SITE QUE TA ALI
        const double = Math.floor(Math.random() * 2) + 1
        const four = Math.floor(Math.random() * 4) + 1
        const triple = Math.floor(Math.random() * 3) + 1
        const cinco = Math.floor(Math.random() * 5) + 1
        const six = Math.floor(Math.random() * 6) + 1
        const seven = Math.floor(Math.random() * 7) + 1
        const octo = Math.floor(Math.random() * 8) + 1
	const lvpc = Math.floor(Math.random() * 101) + 1
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
	const processTime = (timestamp, now) => { return moment.duration(now - moment(timestamp * 1000)).asSeconds() }
        const botNumber = await kill.getHostNumber()
        const blockNumber = await kill.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await kill.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : true
	const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const ownerNumber = '52998****@c.us' // MUDE ISSO PARA O SEU NUMERO
        const isOwner = sender.id === ownerNumber
        global.pollfile = 'poll_Config_'+chat.id+'.json'
        global.voterslistfile = 'poll_voters_Config_'+chat.id+'.json'
	global.client = kill
        const isBlocked = blockNumber.includes(sender.id)
		const isLeg = exsv.includes(chatId)
		const mute = slce.includes(chatId)
		const pvmte = slce.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
	


        // Bot Prefix
        const prefix = '/'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption || type === 'video' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const arg = body.trim().substring(body.indexOf(' ') + 1)
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const url = args.length !== 0 ? args[0] : ''
        const uaOverride = process.env.UserAgent
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
	const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
		
		
        const mess = {
            wait: '✅¿Puedes esperar un rato? Realizar este tipo de comando lleva algún tiempo🏳.',
            error: {
                St: '¡Lo usaste mal jaja! \nPara usar esto, envía o etiqueta una foto con este mensaje.',
                Ki: 'Para eliminar administradores, primero debe eliminar su ADM.',
                Ad: '¡Errores! No pude agregarlo, podría deberse a la limitación de agregar o mis errores.',
                Go: 'Por qué, solo el propietario de un grupo puede usar este tipo de comando.',
		Kl: '¡Ups! Ese es solo mi creador, no puedes acceder.',
		Ga: 'Solo los administradores pueden usarlo, así que chaoo jaja!',
		Gp: 'Lo siento, pero este es un comando para grupos.🕳💦.',
		Ac: 'Solo los grupos que permiten contenido +18 pueden usar comandos como este, si usted es el propietario y desea esto, use /nsfw enable o use en PRIV.',
		Ba: 'Estimado administrador, si desea que use estos comandos, debe permitirme ser admin😙!',
                Iv: '¿Este enlace es correcto? Me parece mal...'
            }
        }
	
	
		// ANTI GRUPOS && ANTI PORNO
        if (isGroupMsg && isLeg && !isGroupAdmins){
            if (chats.match(/(https?:\/\/chat.whatsapp.com)/gi)) {
				console.log('Comprobando el enlace de grupo recibido.')
                const check = await kill.inviteInfo(chats)
                if (check.status == 200) {
                    kill.removeParticipant(groupId, sender.id)
					console.log('Era un enlace real, así que lo elimine ' + sender.id)
                } else {
                    console.log('¡Enlace de grupo recibido! Pero es falso, no supone amenazas.')
                }
			} else if (chats.match(/\bhttps?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi)) {
				const chatpn = chats.match(/\bhttps?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi)
				const flnrl = new URL(chatpn)
				console.log('Comprobación de pornografía en el enlace recibido...\n' + flnrl)
				isPorn(flnrl.hostname, function(error, status) {
					if (status == true) {
						kill.removeParticipant(groupId, sender.id)
						console.log('Había pornografía, así que lo elimine ' + sender.id)
					}
				})
			}
		} else {
            if (chats.match(/(https?:\/\/chat.whatsapp.com)/gi)) {
				console.log('Se recibió un enlace de grupo, pero era de alguien en la Lista Blanca o en el PV.')
			}
		}
	            
        // ANTI FLOOD PRIVADO
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) {
        await kill.reply(from, '¡Ei! Espere 10 segundos antes de usar otros comandos!', id)
		return console.log(color('FLOOD AS', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'de', color(pushname))
		}
		
		
		// ANTI FLOOD GRUPOS
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) {
		await kill.reply(from, 'Ei! Espere 10 segundos antes de usar otros comandos!', id)
		return console.log(color('FLOOD AS', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'de', color(pushname), 'em', color(name || formattedTitle))
		}
		
		
        // MENSAGENS
        if (!isCmd && !isGroupMsg) { return console.log('> MENSAGEM AS', color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'de', color(pushname)) }
        if (!isCmd && isGroupMsg) { return console.log('> MENSAGEM AS', color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'de', color(pushname), 'em', color(name || formattedTitle)) }
		
		// COMANDOS
        if (isCmd && !isGroupMsg) { console.log(color(`> COMANDO "/${command} [${args.length}]" AS`), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'de', color(pushname)) }
        if (isCmd && isGroupMsg) { console.log(color(`> COMANDO "/${command} [${args.length}]" AS`), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'de', color(pushname), 'em', color(name || formattedTitle)) }
		

        // Impede SPAM
        msgFilter.addFilter(from)
	

        switch(command) {

           
        case 'sticker':
        case 'stiker':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
				sharp(mediaData)
				.resize(512, 512, {
					fit: sharp.fit.contain
				})
				.toBuffer()
				.then(async (resizedImageBuffer) => {
					let resizedImageData = resizedImageBuffer.toString('base64');
					let resizedBase64 = `data:${mimetype};base64,${resizedImageData}`;
					await kill.sendImageAsSticker(from, resizedBase64)
				})
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
				sharp(mediaData)
				.resize(512, 512, {
					fit: sharp.fit.contain
				})
				.toBuffer()
				.then(async (resizedImageBuffer) => {
					let resizedImageData = resizedImageBuffer.toString('base64');
					let resizedBase64 = `data:${quotedMsg.mimetype};base64,${resizedImageData}`;
					await kill.sendImageAsSticker(from, resizedBase64)
				})
            } else if (args.length == 1) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await kill.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Erro: ', err))
                } else {
                    kill.reply(from, mess.error.Iv, id)
                }
            } else {
                    kill.reply(from, mess.error.St, id)
            }
            break
			
			
			case 'stiker': 
				case 'sticker':
				case 'gif':
				case 's':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`A Fallado ;(, intenta de nuevo ^_^`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Enviar fotos con subtítulos ${prefix}sticker reply/tag imagen`)
					}
					break
			
			

		case 'ttp':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (args.length == 0) return kill.reply(from, '¿Dónde está la frase?', id)
			axios.get(`https://st4rz.herokuapp.com/api/ttp?kata=${body.slice(5)}`)
			.then(res => {
				kill.sendImageAsSticker(from, res.data.result)
			})
			break
			

			
		case 'sporn':
			if (mute) return console.log('Ignorando comando [Silence]')
            try {
		    
				if (isGroupMsg) {
					if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
					if (args.length == 0) return kill.reply(from, 'Ingrese un término de búsqueda!', id)
					const xvide = await axios.get(`https://mnazria.herokuapp.com/api/porn?search=${body.slice(7)}`)
					const rexvi = xvide.data.result[0]
					await kill.sendFileFromUrl(from, `${rexvi.image}`, '', `Titulo: ${rexvi.title}\n\nAutor: ${rexvi.actors}\n\nDuracion: ${rexvi.duration}\n\nLink: ${rexvi.url}`, id)
				} else {
					if (args.length == 0) return kill.reply(from, 'Ingrese un término de búsqueda!', id)
					const xvide = await axios.get(`https://mnazria.herokuapp.com/api/porn?search=${body.slice(7)}`)
					const rexvi = xvide.data.result[0]
					await kill.sendFileFromUrl(from, `${rexvi.image}`, '', `Titulo: ${rexvi.title}\n\nAutor: ${rexvi.actors}\n\nDuracion: ${rexvi.duration}\n\nLink: ${rexvi.url}`, id)
				}
			} catch (error) {
				kill.reply(from, 'No pude encontrar porno xd!', id)
			}
            break
			
			
		case 'xvideos':
			if (mute) return console.log('Ignorando comando [Silence]')
            try {
				if (isGroupMsg) {
					if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
					if (args.length == 0) return kill.reply(from, 'Olvidaste insertar un enlace de xvideos?', id)
					const xv = await axios.get(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${body.slice(9)}`)
					const xvidw = xv.data.mp4
					await kill.sendFileFromUrl(from, xvidw, 'video.mp4', 'Hmmm travieso', id)
				} else {
					if (args.length == 0) return kill.reply(from, 'Olvidaste insertar un enlace de xvideos?', id)
					const xv = await axios.get(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${body.slice(9)}`)
					const xvidw = xv.data.mp4
					await kill.sendFileFromUrl(from, xvidw, 'video.mp4', 'Hmmm travieso', id)
				}
			} catch (error) {
				kill.reply(from, 'No se pudo descargar porno!', id)
			}
            break
			
			
		case 'anonymod':
			if (mute) return console.log('Ignorando comando [Silence]')
    await kill.reply(from, 'Algunos videos del canal de mi bro DEIVID\n\nWhatsApp ANONYMOUS V.06 oFc 100% inmune\n\nhttps://youtu.be/tOE_ywldS_Q\n\nComo modificar un WA prt-1\n\nhttps://youtu.be/WdWsvY3xGPc\n\nWhAtsApp BusSines Golden/13\n\nhttps://youtu.be/JqSHAWlGhDY\n\nNumero virtual +48 método efectivo\n\nhttps://youtu.be/7GOss7AaJ88\n\nNumero virtual +1 EE.Uu (ANONYMOUS DEIVID)\n\nhttps://youtu.be/D1G6hI1mLs4\n\nCreando con pixelLab (ANONYMOUS DEIVID)\n\nhttps://youtu.be/so1y1g-MPZ4\n\nSu video mas reciente:\n\nhttps://youtu.be/hy4od9BT-tA\n\nEspero y lo apoyes🤗', id)
    break
	
	    case 'samu330':
			if (mute) return console.log('Ignorando comando [Silence]')
    await kill.reply(from, '｡☆✼★━━━━━━━━━━━━★✼☆｡\n\nHola!😀\n\nTe gustaria apoyarme?\n\nSolo unete a mi grupo de WhatsApp: https://chat.whatsapp.com/ELeHAmX3P6j1xy1qNRjEXR\n\n* ◄ ◊ ► ◄ ◊ ► ◄ ◊ ► ◄ ◊ ► ◄ ◊ ►*\n\nO puedes suscribirte a mi canal para saber como instalar un Bot: https://www.youtube.com/channel/UCqPXxG2ZdDe_ugOqMHDRMqg\n\n✩｡:*•.─────  ❁ ❁  ─────.•*:｡✩\n\nO seamos amigos en facebook: https://facebook.com/tupapi.samu330', id)
    break	
			
		case 'about':
			if (mute) return console.log('Ignorando comando [Silence]')
			await kill.sendFile(from, './lib/media/img/iris.png', 'iris.png', sobre, id)
			break
			
		case 'belle':
			if (mute) return console.log('Ignorando comando [Silence]')
			await kill.sendFile(from, './lib/media/img/belle.png', 'belle.png', belle, id)
			break

		case 'termux':
			if (mute) return console.log('Ignorando comando [Silence]')
			await kill.sendFile(from, './lib/media/img/termux.png', 'termux.png', termux, id)
			break
			
				
        
        case 'stickergif':
        case 'stikergif':
        case 'gif':
			if (mute) return console.log('Ignorando comando [Silence]')
if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 15 || mimetype === 'image/gif' && message.duration < 15) {
                    var mediaData = await decryptMedia(message, uaOverride)
                    kill.reply(from, mess.wait, id)
                    var filename = `./lib/media/stickergif.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./lib/media/stickergf.gif --fps=60 --scale=256:256`, async function (error, stdout, stderr) {
                        var gif = await fs.readFileSync('./lib/media/stickergf.gif', { encoding: "base64" })
                        await kill.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                        .catch(() => {
                            kill.reply(from, 'Aff! la conversion tuvo errores, puede ser el peso de video/gif.', id)
                        })
                    })
                } else {
                    kill.reply(from, `Encaso de que reciba esto considere 2 opciones.\n\n1 - Esto no es un gif o video.\n\n2 - el gif o video supera los 15 segundos.`, id)
                }
            } else if (quotedMsg) {
                if (quotedMsg.mimetype == 'video/mp4' && quotedMsg.duration < 15 || quotedMsg.mimetype == 'image/gif' && quotedMsg.duration < 15) {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                    kill.reply(from, mess.wait, id)
                    var filename = `./lib/media/stickergif.${quotedMsg.mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./lib/media/stickergf.gif --fps=60 --scale=256:256`, async function (error, stdout, stderr) {
                        var gif = await fs.readFileSync('./lib/media/stickergf.gif', { encoding: "base64" })
                        await kill.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                        .catch(() => {
                            kill.reply(from, 'Aff! la conversion tuvo errores, puede ser el peso de video/gif.', id)
                        })
                    })
                } else {
                    kill.reply(from, `Encaso de que reciba esto considere 2 opciones.\n\n1 - Esto no es un gif o video.\n\n2 - el gif o video supera los 15 segudnos.`, id)
                }
			} else {
                kill.reply(from, mess.error.St, id)
            }
            break
			
	case 'upimg':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                var uplimg = './lib/media/img/imageupl.jpg'
                await fs.writeFile(uplimg, mediaData)
				const sdimg = await imgbbUploader("API DO SITE IMGBB", uplimg) // Bote uma api do imgbb pras suas fotos n irem pra minha conta
				console.log(sdimg.url_viewer)
				await kill.reply(from, `*OBS!* _Este enlace tiene una duración de 7 días, después de los cuales la imagen se eliminará automáticamente del servidor.._\n\n${sdimg.url_viewer}`, id)
			} else {
				await kill.reply(from, 'Amigo, esto solo funciona con imágenes.', id)
			}
			break
			
			
        case 'makesticker':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, 'Faltaba algo para usar como referencia!', id)
            const stkm = await fetch(`http://api.fdci.se/rep.php?gambar=${body.slice(7)}`)
			const stimg = await stkm.json()
            let stkfm = stimg[Math.floor(Math.random() * stimg.length) + 1]
			console.log(stkfm)
            await kill.sendStickerfromUrl(from, stkfm)
			.catch(() => {
                kill.reply(from, 'No se ha recibido ninguna imagen o el servidor está desconectado, inténtalo más tarde.', id)
            })
            break
			
			
		case 'morte':
		case 'death':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, 'Ponga un nombre, solo uno, sin apellido ni nombres completos, especialmente por su seguridad!', id)
			const predea = await axios.get(`https://api.agify.io/?name=${args[0]}`)
			await kill.reply(from, `Personas con este nombre "${predea.data.name}" tienden a morir en ${predea.data.age} años de edad.`, id)
			break			
			
			
	    
			
			
		case 'gender':
		case 'genero':
            if (args.length == 0) return kill.reply(from, 'Ponga un nombre, solo uno, sin apellido ni nombres completos, especialmente por su seguridad!', id)
			const seanl = await axios.get(`https://api.genderize.io/?name=${args[0]}`)
			const gender = seanl.data.gender.replace('Femenino', 'Mujeres').replace('Mazculino', 'hombres')
			await kill.reply(from, `O nombre "${seanl.data.name}" mas usado por ${gender}.`, id)
			break
			
		
			
			
		case 'math':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, 'No especificaste una cuenta de matemáticas.', id)
            const mtk = body.slice(6)
            if (typeof math.evaluate(mtk) !== "number") {
            kill.reply(from, `¿Incluso abriste una cuenta? No parece eh!.`, id)
			} else {
				kill.reply(from, `_La ecuacion:_\n\n*${mtk}*\n\n_Su resultado es:_\n\n*${math.evaluate(mtk)}*`, id)
			}
			break
			
			
		case 'inverter':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, 'No especificó una frase para invertir.', id)
			const inver = body.slice(10).split('').reverse().join('')
			await kill.reply(from, inver, id)
			break
			
			
		case 'contar':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, 'Esto tiene 0 letras, después de todo, no hay texto.', id)
			const count = body.slice(8).length
			await kill.reply(from, `El texto tiene ${count} letras.`, id)
			break
			
			
        case 'giphy':
			if (mute) return console.log('Ignorando comando [Silence]')
			gark = body.trim().split(/ +/).slice(1)
			const link = gark.length !== 0 ? gark[0] : ''
            if (gark.length !== 1) return kill.reply(from, `Ownn, olvidó insertar el enlace?`, id)
            const isGiphy = link.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'))
            const isMediaGiphy = link.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'))
            if (isGiphy) {
                const getGiphyCode = link.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'))
                if (!getGiphyCode) { return kill.reply(from, '¡Que pena! Su código de descarga está demasiado lejos, pero tal vez si lo intentas de nuevo * solo 1 vez más...*', id) }
                const giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '')
                const smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif'
                kill.sendGiphyAsSticker(from, smallGifUrl)
                .catch((err) => kill.reply(from, `Un pajarito me dijo que este error está relacionado con el envío del sticker...`, id))
            } else if (isMediaGiphy) {
                const gifUrl = link.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'))
                if (!gifUrl) { return kill.reply(from, '¡Que pena! Su código de descarga está demasiado lejos, pero tal vez si lo intentas de nuevo * solo 1 vez más...*', id) }
                const smallGifUrl = link.replace(gifUrl[0], 'giphy-downsized.gif')
                kill.sendGiphyAsSticker(from, smallGifUrl)
                .catch(() => {
                    kill.reply(from, `Un pajarito me dijo que este error está relacionado con el envío del sticker...`, id)
                })
            } else {
                await kill.reply(from, 'Lo siento, pero solo puedo aceptar enlaces de giphy.', id)
            }
            break


		case 'msg':
            if (args.length == 0) return kill.reply(from, 'Olvidaste ingresar un mensaje... e.e', id)
			await kill.sendText(from, `${body.slice(5)}`)
			break
			
			
		case 'id':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
			kill.reply(from, `El ID del grupo es ${groupId}`, id)
			break
			
			
		case 'onlyadms':
			if (mute) return console.log('Ignorando comando [Silence]')
			onar = body.trim().split(/ +/).slice(1)
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
			if (onar.length !== 1) return kill.reply(from, `Olvidaste encenderlo (ON) o apagarlo [Off].`, id)
            if (onar[0] == 'on') {
				kill.setGroupToAdminsOnly(groupId, true).then(() => kill.sendText(from, 'Se cierra el grupo!\nSE ABRIRA EN UNOS MOMENTOS :)'))
			} else if (onar[0] == 'off') {
				kill.setGroupToAdminsOnly(groupId, false).then(() => kill.sendText(from, 'Ya pueden escribir gente!! NOMAS NO LLENEN EL CHAT!!🥶'))
			} else {
				kill.reply(from, `Olvidaste encenderlo (ON) o apagarlo [Off].`, id)
			}
			break
			
			
		case 'legiao':
			if (isGroupMsg) return kill.reply(from, 'Puede ser que este grupo no permita enlaces, así que use ese comando en el PV, ¿de acuerdo?', id)
			kill.sendLinkWithAutoPreview(from, 'https://wa.me/+529984907794', 'Genial que te hayas interesado en contactar a samu!\nAqui esta su whats!', id)
			break
			
			
		case 'revoke':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
			await kill.revokeGroupInviteLink(groupId).then(() => kill.reply(from, 'Allí se cumplió tu orden! e.e', id))
			break
		
			
			
	case 'setimage':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
			if (isMedia && type == 'image' || isQuotedImage) {
				const dataMedia = isQuotedImage ? quotedMsg : message
				const _mimetype = dataMedia.mimetype
				const mediaData = await decryptMedia(dataMedia, uaOverride)
				const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
				const picgp = await kill.getProfilePicFromServer(chat.id)
				if (picgp == undefined) {
					var backup = errorurl
				} else {
					var backup = picgp
				}
				await kill.sendFileFromUrl(from, backup, 'group.png', 'En caso de que cambies de opinión...', id)
				await kill.setGroupIcon(groupId, imageBase64)
			} else if (args.length == 1) {
				if (!isUrl(url)) { await kill.reply(from, '¿Estás seguro de que este es un enlace solo a la foto??', id) }
				const picgpo = await kill.getProfilePicFromServer(chat.id)
				if (picgpo == undefined) {
					var back = errorurl
				} else {
					var back = picgpo
				}
				await kill.sendFileFromUrl(from, back, 'group.png', 'En caso de que cambies de opinión...', id)
				kill.setGroupIconByUrl(groupId, url).then((r) => (!r && r !== undefined)
				? kill.reply(from, 'Eso es lo que pensé, no hay fotos en este enlace o el enlace contiene demasiadas fotos.', id)
				: kill.reply(from, '¡Eso! Ahora el grupo tiene una nueva cara jaja!', id))
			} else {
				kill.reply(from, `Acho que você esta usando errado em!`)
			}
			break			

			
		case 'img':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                kill.reply(from, `Podrias esperar porfavor? esto lleva un poco de tiempo👑`, id)
                const stickerImage = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await kill.sendFile(from, stickerImage, '', 'Disfruta, aquí tienes tu foto! :D', id)
			} else if (!quotedMsg) return kill.reply(from, `Lo siento, esto es solo para stickers...`, id)
			break	


        case 'randomanime':
			if (mute) return console.log('Ignorando comando [Silence]')
            const matn = Math.floor(Math.random() * 3) + 1
            if (matn == 1) {
            const nime = await axios.get(`http://api.i-tech.id/anim/anime?key=${techapi}`)
			console.log(nime.data)
			await kill.sendFileFromUrl(from, nime.data.result, ``, `Veo que eres un hombre / mujer de cultura.`, id)
            } else if (matn == 2) {
            const nime2 = await randomNimek('anime')
			console.log(nime2.data)
            await kill.sendFileFromUrl(from, nime2, ``, 'Ui Ui...', id)
            } else if (matn == 3) {
            const nime3 = await axios.get(`http://api.i-tech.id/anim/anime2?key=${techapi}`)
			console.log(nime3.data)
            await kill.sendFileFromUrl(from, nime3.data.result, ``, `Hermoso anime...`, id)
			}
            break


        case 'frase':
            const quote = Math.floor(Math.random() * 3) + 1
            if (quote == 1) {
            const quote1 = await axios.get(`http://api.i-tech.id/anim/quotes?key=${techapi}`)
			console.log(quote1.data)
			const quota = quote1.data.quotes
			kill.reply(from, mess.wait, id)
			await sleep(5000)
            translate(quota, 'es')
                .then((quoted) => kill.reply(from, `➸ *Frase* : ${quoted}\n➸ *Personaje* : ${quote1.data.character}\n➸ *Anime* : ${quote1.data.anime}`, id))
            } else if (quote == 2) {
            const skya = await get.get('http://mhankbarbars.herokuapp.com/api/quotesnime/random').json() 
            skya_ = skya.data
			const quot = skya.data.quote
			kill.reply(from, mess.wait, id)
			await sleep(5000)
            translate(quot, 'es')
                .then((quote) => kill.reply(from, `➸ *Frase* : ${quote}\n➸ *Personaje* : ${skya_.chara}\n➸ *Anime* : ${skya_.anime}`, id))
			} else if (quote == 3) {
			const aiquote = await axios.get("http://inspirobot.me/api?generate=true")
            await kill.sendFileFromUrl(from, aiquote.data, 'quote.jpg', '~No entendí nada, pero sigamos el juego...~\n\n❤️' , id )
			}
            break


        case 'make':
            if (args.length == 0) return kill.reply(from, `Debes ingresar una frase después del comando.`, id)
            const nulisq = body.slice(6)
            const nulisp = await tulis(nulisq)
            await kill.sendImage(from, `${nulisp}`, '', 'Hermoso diario amigo...', id)
            .catch(() => {
                kill.reply(from, 'Qué pena, la imagen no quiso enviarse o el servidor denegó el acceso...', id)
            })
            break


        case 'neko':
            const nekol = Math.floor(Math.random() * 7) + 1
            if (nekol == 1) {
				const neko1 = await axios.get(`http://api.i-tech.id/anim/neko?key=${techapi}`)
				await kill.sendFileFromUrl(from, neko1.data.result, ``, `Uma neko as vezes vai bem...`, id)
            } else if (nekol == 2) {
				const neko2 = await axios.get(`http://api.i-tech.id/anim/neko2?key=${techapi}`)
				await kill.sendFileFromUrl(from, neko2.data.result, ``, `Vejo que você é um homem/mulher de cultura.`, id)
            } else if (nekol == 3) {
				const neko3 = await get.get('http://mhankbarbars.herokuapp.com/api/nekonime').json()
				await kill.sendFileFromUrl(from, neko3.result, ``, `Que fofa...`, id)
            } else if (nekol == 4) {
				const neko4 = await axios.get(`https://nekos.life/api/v2/img/neko`)
				await kill.sendFileFromUrl(from, neko4.data.url, ``, `Nekooo`, id)
            } else if (nekol == 5) {
				const neko5 = await axios.get(`https://nekos.life/api/v2/img/ngif`)
				await kill.sendFileFromUrl(from, neko5.data.url, ``, `Nekooo`, id)
            } else if (nekol == 6) {
				const neko6 = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
				await kill.sendFileFromUrl(from, neko6.data.url, ``, `Nekooo`, id)
            } else if (nekol == 7) {
				const neko7 = await axios.get(`https://nekos.life/api/v2/img/kemonomimi`)
				await kill.sendFileFromUrl(from, neko7.data.url, ``, `Nekoooo chann`, id)
			}
            break


        case 'char':
            const char = await axios.get(`http://api.i-tech.id/anim/wibu?key=${techapi}`)
			var chara = char.data.deskripsi
			console.log(chara)
			kill.reply(from, mess.wait, id)
			await sleep(5000)
			translate(chara, 'es')
                .then((reschar) => kill.sendFileFromUrl(from, `${char.data.foto}`, ``, `Nome: ${char.data.nama}\n\nDescrição: ${reschar}\n\nFonte: ${char.data.sumber}`, id))
            break


        case 'image':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, 'Falta un nombre!', id)
            const linp = await fetch(`http://api.fdci.se/rep.php?gambar=${body.slice(7)}`)
			const pint = await linp.json()
            let erest = pint[Math.floor(Math.random() * pint.length) + 1]
			console.log(erest)
            await kill.sendFileFromUrl(from, erest, '', 'Fueron muchos pero espero que les guste la imagen que elegí ^^!', id)
			.catch(() => {
                kill.reply(from, 'No se ha recibido ninguna imagen o el servidor está desconectado, inténtalo más tarde.', id)
            })
            break
			
			
        case 'yaoi':
            const yam = await fetch(`http://api.fdci.se/rep.php?gambar=yaoi`)
			const yaoi = await yam.json()
            let flyaoi = yaoi[Math.floor(Math.random() * yaoi.length) + 1]
            await kill.sendFileFromUrl(from, flyaoi, '', 'Tururu...', id)
			.catch(() => {
                kill.reply(from, 'No se ha recibido ninguna imagen o el servidor está desconectado, inténtalo más tarde.', id)
            })
            break


        case 'life': 
            const dia = await axios.get(`https://docs-jojo.herokuapp.com/api/fml`)
			var acon = dia.data.result.fml
            await sleep(5000)
            translate(acon, 'es')
                .then((lfts) => kill.reply(from, lfts, id))
			break


        case 'name':
            if (args.length == 0) return kill.reply(from, 'Falto un nombre!', id)
            const names = await axios.get(`https://api.i-tech.id/tools/arti?key=${techapi}&nama=${body.slice(6)}`)
			var sign = names.data.arti
			kill.reply(from, mess.wait, id)
			await sleep(5000)
            translate(sign, 'es')
                .then((cado) => kill.reply(from, cado, id))
			break


        case 'fox':
            const fox = await axios.get(`http://api.i-tech.id/tools/foxes?key=${techapi}`)
			await kill.sendFileFromUrl(from, fox.data.result, ``, 'Que lindo zorro <3', id)
			break


        case 'goat':
            const goat = await axios.get(`https://api.i-tech.id/tools/goat?key=${techapi}`)
			await kill.sendFileFromUrl(from, goat.data.result, ``, 'Nada mejor que una cabra ... cierto?', id)
			break


        case 'wiki':
            if (args.length == 0) return kill.reply(from, 'Por favor escriba correctamente.', id)
            const wiki = await axios.get(`https://docs-jojo.herokuapp.com/api/wiki?q=${body.slice(6)}`)
			var wikit = wiki.data.result
			console.log(wikit)
			kill.reply(from, mess.wait, id)
			await sleep(5000)
            translate(wikit, 'es')
                .then((resulta) => kill.reply(from, resulta, id))
            break


        case 'chord':
            if (args.length == 0) return kill.reply(from, 'Olvidé el nombre de la canción?', id)
            const ch = await axios.get(`https://api.i-tech.id/tools/chord?key=${techapi}&query=${body.slice(7)}`)
            await kill.reply(from, ch.data.result, id)
            break
			
			
        case 'nasa':
            const nasa = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
			console.log(nasa.data)
			await kill.sendFileFromUrl(from, `${nasa.data.url}`, '', `Titulo: ${nasa.data.title}\n\nData: ${nasa.data.date}\n\nAutor: ${nasa.data.copyright}\n\nMateria: ${nasa.data.explanation}`, id)
			.catch(() => {
						kill.reply(from, `Titulo: ${nasa.data.title}\n\nData: ${nasa.data.date}\n\nAutor: ${nasa.data.copyright}\n\nMateria: ${nasa.data.explanation}\n\nURL: ${nasa.data.url}`, id)
					})
			break
			
		

	case 'twit':
            if (args.length == 0) return kill.reply(from, 'Enlace caido?', id)
            const twi = await axios.get(`http://arugaz.my.id/api/media/twvid?url=${body.slice(4)}`)
			await kill.sendFileFromUrl(from, twi.data.result.videos, ``, 'É um otimo video haha!\n~Mas o que diabos foi isso...~', id)
			.catch(() => {
						kill.reply(from, 'Ess no, impidieron my acceso!\nLo siento!', id)
					})
            break

       case 'ig':
            if (args.length == 0) return kill.reply(from, 'El enlace no es valido?', id)
            const iga = await axios.get(`https://arugaz.my.id/api/media/ig?url=${body.slice(4)}`)
			await kill.sendFileFromUrl(from, iga.data.result, ``, 'Es un gran video jaja!\n~Pero que diablos fue eso...~', id)
			.catch(() => {
						kill.reply(from, '¡Esa no! Impidieron mi acceso!!', id)
					})
            break
			
		case 'fb':
			if (mute || pvmte) return console.log('Ignorando comando [Silence]')
			if (args.length == 0) return kill.reply(from, 'Nececitas el lik de facebook?', id)
            const fb = await axios.get(`https://mnazria.herokuapp.com/api/fbdownloadervideo?url=${body.slice(4)}`)
			const fbdw = fb.data.resultSD
            await kill.sendFileFromUrl(from, fbdw, 'video.mp4', 'Excelente video!\n~Pero que diablos fue eso:v?...~', id)
			.catch((error) => {
				kill.reply(from, 'Auuuuu, no pude terminar el proceso:(!', id)
			})
            break

			

         case 'mp3':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, 'Lo usaste incorretamente.', id)
            axios.get(`http://st4rz.herokuapp.com/api/yta2?url=${body.slice(5)}`)
            .then(async(rest) => {
					var m3pa = rest.data.result
					var m3ti = rest.data.title
					var m3tu = rest.data.thumb
					var m3fo = rest.data.ext
					await kill.sendFileFromUrl(from, m3tu, '', `Titulo: ${m3ti}\nFormato:${m3fo}\n\nEspero averlo echo bien, ahora solo espera a que el audio se envie!`, id)
					await kill.sendFileFromUrl(from, m3pa, '', '', id)
                			})
				break


        case 'mp4':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, 'Lo usaste incorretamente.', id)
            axios.get(`http://st4rz.herokuapp.com/api/ytv2?url=${body.slice(5)}`)
            .then(async(rest) => {
					var mp4 = rest.data.result
					var tmp4 = rest.data.title
					var m4tu = rest.data.thumb
					var m4fo = rest.data.ext
					await kill.sendFileFromUrl(from, m4tu, '', `Titulo: ${tmp4}\nFormato:${m4fo}\n\nEspero averlo echo bien, ahora solo espera que se envie el video!`, id)
					await kill.sendFileFromUrl(from, mp4, `video.mp4`, tmp4, id)
                			})
				break
			
        
			case 'play':
			if (mute || pvmte) return console.log('Comando ignorado.')
            if (args.length == 0) return kill.reply(from, 'Lo usaste incorrectamente.', id)
            axios.get(`https://docs-jojo.herokuapp.com/api/yt-search?q=${body.slice(6)}`)
            .then(async (res) => {
				const pyre = res.data.result.result[0].publishedTime
				if (pyre == '' || pyre == 'null' || pyre == null || pyre == undefined || pyre == 'undefined') {
					var playre = 'Indefinido'
				} else if (pyre.endsWith('years ago')) {
                    var playre = pyre.replace('years ago', 'Anos atrás')
				} else if (pyre.endsWith('hours ago')) {
                    var playre = pyre.replace('hours ago', 'Horas atrás')
				} else if (pyre.endsWith('minutes ago')) {
                    var playre = pyre.replace('minutes ago', 'Minutos atrás')
				} else if (pyre.endsWith('day ago')) {
                    var playre = pyre.replace('day ago', 'Dia atrás')
				} else if (pyre.endsWith('months ago')) {
                    var playre = pyre.replace('months ago', 'Meses atrás')
				} else if (pyre.endsWith('seconds ago')) {
                    var playre = pyre.replace('seconds ago', 'Segundos atrás')
				}
				const asize = await axios.get(`http://st4rz.herokuapp.com/api/yta?url=http://youtu.be/${res.data.result.result[0].id}`)
				const afsize = asize.data.filesize.replace(' MB', '')
				console.log(afsize)
				if (afsize >= 16.0 || asize.data.filesize.endsWith('GB')) {
					kill.reply(from, `Lo sentimos, para evitar prohibiciones de WhatsApp, el límite de envío de audio es de 16 MB, y esto tiene ${asize.data.filesize}.`, id)
				} else {
					await kill.sendFileFromUrl(from, `${res.data.result.result[0].thumbnails[0].url}`, ``, `Titulo: ${res.data.result.result[0].title}\n\nLink: https://youtu.be/${res.data.result.result[0].id}\n\nDuracion: ${res.data.result.result[0].duration} minutos\n\nCreado hace: ${playre}\n\nVisualizaciones: ${res.data.result.result[0].viewCount.text}\n\nEspero haberlo hecho bien y ... ahora solo espera, ¡no lo uses de nuevo hasta que termine este!`, id)
					axios.get(`http://st4rz.herokuapp.com/api/yta2?url=http://youtu.be/${res.data.result.result[0].id}`)
					.then(async(rest) => {
						var m3pa = rest.data.result
						var m3ti = rest.data.title
						await kill.sendFileFromUrl(from, m3pa, '', '', id)
					})
				}
			})
            break
			
			
        case 'video':
			if (mute || pvmte) return console.log('Comando ignorado.')
            if (args.length == 0) return kill.reply(from, 'Lo usaste incorrectamente.', id)
            axios.get(`https://docs-jojo.herokuapp.com/api/yt-search?q=${body.slice(6)}`)
            .then(async (res) => {
				const vyre = res.data.result.result[0].publishedTime
				if (vyre == '' || vyre == 'null' || vyre == null || vyre == undefined || vyre == 'undefined') {
					var videore = 'Indefinido'
				} else if (vyre.endsWith('years ago')) {
                    var videore = vyre.replace('years ago', 'Anos atrás')
				} else if (vyre.endsWith('hours ago')) {
                    var videore = vyre.replace('hours ago', 'Horas atrás')
				} else if (vyre.endsWith('minutes ago')) {
                    var videore = vyre.replace('minutes ago', 'Minutos atrás')
				} else if (vyre.endsWith('day ago')) {
                    var videore = vyre.replace('day ago', 'Dia atrás')
				} else if (vyre.endsWith('months ago')) {
                    var videore = vyre.replace('months ago', 'Meses atrás')
				} else if (vyre.endsWith('seconds ago')) {
                    var videore = vyre.replace('seconds ago', 'Segundos atrás')
				}
				const size = await axios.get(`http://st4rz.herokuapp.com/api/ytv?url=http://youtu.be/${res.data.result.result[0].id}}`)
				const fsize = size.data.filesize.replace(' MB', '').replace('Download  ', 'Impossivel calcular')
				console.log(fsize)
				const impo = size.data.filesize.replace('Download  ', 'un peso mucho mayor que no puedo calcular')
				if (fsize >= 16.0 || size.data.filesize.endsWith('Download  ') || size.data.filesize.endsWith('GB')) {
					kill.reply(from, `Lo sentimos, para evitar prohibiciones de WhatsApp, el límite de envío de audio es de 16 MB, y esto tiene ${impo.replace('    ', ' ')}.`, id)
				} else {
					await kill.sendFileFromUrl(from, `${res.data.result.result[0].thumbnails[0].url}`, ``, `Titulo: ${res.data.result.result[0].title}\n\nLink: https://youtu.be/${res.data.result.result[0].id}\n\nDuracion: ${res.data.result.result[0].duration} minutos\n\nCreado hace: ${videore}\n\nVisualizações: ${res.data.result.result[0].viewCount.text}\n\nEspero haberlo hecho bien y ... ahora solo espera, ¡no lo uses de nuevo hasta que termine este!`, id)
					axios.get(`http://st4rz.herokuapp.com/api/ytv2?url=https://youtu.be/${res.data.result.result[0].id}`)
					.then(async(rest) => {
						await kill.sendFileFromUrl(from, `${rest.data.result}`, ``, ``, id)
					})
				}
			})
            break
			

		case 'qr':
			if (mute) return console.log('Ignorando comando [Silence]')
			const qrco = body.slice(4)
			await kill.sendFileFromUrl(from, `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrco}`, '', 'Su mensaje fue insertado en este QRCode, disfrute.\n\nBy SAMU330 - Íris.', id)
			break


		case 'send':
			if (args.length == 0) return kill.reply(from, 'Olvidaste poner un enlace de imagen jaja!', id)
			const file = body.slice(6)
			if (file.endsWith('.jpg')) {
				await kill.sendFileFromUrl(from, file, '', '', id)
				.catch(() => {
					kill.reply(from, '¡Ah! Esto no parece ser una imagen o puede ser más grande de lo esperado...', id)
				})
			} else if (file.endsWith('.png')) {
				await kill.sendFileFromUrl(from, file, '', '', id)
				.catch(() => {
					kill.reply(from, '¡Ah! Esto no parece ser una imagen o puede ser más grande de lo esperado...', id)
				})
            } else {
                kill.reply(from, 'Lo sentimos, solo se permiten fotos, exclusivamente .jpg e .png ^^', id)
            }
			break
			
			
        case 'quote':
		    arks = body.trim().split(/ +/).slice(1)
            ark = body.trim().substring(body.indexOf(' ') + 1)
            if (arks.length >= 1) {
                const quotes = ark.split('|')[0]
                const qauth = ark.split('|')[1]
                kill.reply(from, '¡Entendido! Espere a que se complete el comando!', id)
                const quoteimg = await kill.quote(quotes, qauth)
				console.log(quoteimg)
                await kill.sendFileFromUrl(from, quoteimg, '', 'Completo.', id)
                .catch(() => {
					kill.reply(from, '¡Guauu! Parece que me negaron subir la foto....', id)
				})
            } else {
                kill.reply(from, `Realmente lo estás usando correctamente?`)
            }
            break		


       case 'translate':
            if (args.length != 1) return kill.reply(from, `Esto es demasiado pequeño para traducirlo...`, id)
            if (!quotedMsg) return kill.reply(from, `Olvidaste marcar el mensaje para traducir.`, id)
            const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
			kill.reply(from, mess.wait, id)
			await sleep(5000)
            translate(quoteText, args[0])
                .then((result) => kill.reply(from, result, id))
                .catch(() => kill.reply(from, 'Bloqueo de IP de Google o error de traducción...'))
            break
			
        case 'tts':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, `Texto a voz */tts* (idioma) (texto), para ver los diomas usa */idiomas*`)
            const ttsGB = require('node-gtts')(args[0])
            const dataText = body.slice(8)
                if (dataText === '') return kill.reply(from, 'Y el texto..?', id)
                try {
                    ttsGB.save('./media/tts.mp3', dataText, function () {
                    kill.sendPtt(from, './media/tts.mp3', id)
                    })
                } catch (err) {
                    kill.reply(from, err, id)
                }
            break

        case 'idiomas':
			if (mute) return console.log('Ignorando comando [Silence]')
            kill.sendText(from, lang, id)
            break
			
			
		case 'resposta':
			if (args.length == 0) return kill.reply(from, 'Falta una frase para agregar.', id)
			fs.appendFile('./lib/reply.txt', `\n${body.slice(10)}`)
			await kill.reply(from, 'Frase agregada a Iris.', id)
			break


        case 'speak':
			const sppt = require('node-gtts')('pt-br')
			try {
				const spiris = await axios.get(`http://simsumi.herokuapp.com/api?text=${body.slice(7)}&lang=pt`)
				const a = spiris.data.success
				if (a == '') {
					console.log('Request falhou, fallo usando respuestas locales...')
					let rfua = fs.readFileSync('./lib/reply.txt').toString().split('\n')
					let repy = rfua[Math.floor(Math.random() * rfua.length)]
					let resfl = repy.replace('%name$', '${name}').replace('%battery%', '${lvpc}')
					console.log(resfl)
					sppt.save('./lib/media/tts/resPtm.mp3', resfl, function () {
					kill.sendPtt(from, './lib/media/tts/resPtm.mp3', id)
					})		
				} else {
					sppt.save('./lib/media/tts/resPtm.mp3', a, function () {
						kill.sendPtt(from, './lib/media/tts/resPtm.mp3', id)
					})
				}
			} catch (error) {
					console.log('Request falhou, usando respostas locais...')
					let rfua = fs.readFileSync('./lib/reply.txt').toString().split('\n')
					let repy = rfua[Math.floor(Math.random() * rfua.length)]
					let resfl = repy.replace('%name$', '${name}').replace('%battery%', '${lvpc}')
					console.log(resfl)
					sppt.save('./lib/media/tts/resPtm.mp3', resfl, function () {
					kill.sendPtt(from, './lib/media/tts/resPtm.mp3', id)
					})
			}
			break
			
			
	case 'clima':
			if (mute) return console.log('Ignorando comando [Silence]')
       		if (args.length == 0) return kill.reply(from, 'Ingrese el nombre de su ciudad.', id)
            try {
				const clima = await axios.get(`https://pt.wttr.in/${body.slice(7)}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)
				await kill.sendFileFromUrl(from, `https://wttr.in/${body.slice(7)}.png`, '', `La foto de arriba contiene un pronóstico de 2 días, el mensaje de abajo es el clima ahora.\n\n${clima.data}`, id)
            } catch {
                kill.reply(from, 'extrañoho...\nAsegúrate de no usar acentos ok?', id)
            }
            break
			

	case 'aki':
			if (mute) return console.log('Ignorando comando [Silence]')
			const region = 'es';
			if (args[0] == '-r') {
				let akinm = args[1].match(/^[0-9]+$/)
				if (!akinm) return kill.reply(from, 'Responda solo con 0 o 1!\n0 = Si\n1 = No', id)
				const aki = new Aki(region);
				await aki.start();
				const myAnswer = `${args[1]}`
				await aki.step(myAnswer);
				await kill.reply(from, `Pregunta: ${aki.question}\n\nProgresso: ${aki.progress}\n\nResponde con /aki -r [0 o 1], 0 = si, 1 = No.`, id)
			} else {
				const aki = new Aki(region);
				await aki.start()
				await kill.reply(from, `Pregunta: ${aki.question}\n\nResponda con /aki -r [0 o 1], 0 = si, 1 = no.`, id)
			}
			break
			
        case 'iris':
			if (mute) return console.log('Ignorando comando [Silence]')
			try {
				const iris = await axios.get(`http://simsumi.herokuapp.com/api?text=${body.slice(6)}&lang=pt`)
				if (iris.data.success == '') {
					console.log('Request falhou, usando respostas locais...')
					let rndrl = fs.readFileSync('./lib/reply.txt').toString().split('\n')
					let repl = rndrl[Math.floor(Math.random() * rndrl.length)]
					let resmf = repl.replace('%name$', `${name}`).replace('%battery%', `${lvpc}`)
					console.log(resmf)
					kill.reply(from, resmf, id)
				} else {
					await kill.reply(from, iris.data.success, id)
				}
			} catch (error) {
					console.log('Request falhou, usando respostas locais...')
					let rndrl = fs.readFileSync('./lib/reply.txt').toString().split('\n')
					let repl = rndrl[Math.floor(Math.random() * rndrl.length)]
					let resmf = repl.replace('%name$', `${name}`).replace('%battery%', `${lvpc}`)
					console.log(resmf)
					kill.reply(from, resmf, id)
			}
			break

			
	case 'ptt':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (quotedMsgObj) {
                let encryptMedia
                let replyOnReply = await kill.getMessageById(quotedMsgObj.id)
                let obj = replyOnReply.quotedMsgObj
                if (/ptt|audio/.test(quotedMsgObj.type)) {
                    encryptMedia = quotedMsgObj
                    if (encryptMedia.animated) encryptMedia.mimetype = ''
                } else if (obj && /ptt|audio/.test(obj.type)) {
                    encryptMedia = obj
                } else return
                const _mimetype = encryptMedia.mimetype
                const mediaData = await decryptMedia(encryptMedia)
                await kill.sendPtt(from, `data:${_mimetype};base64,${mediaData.toString('base64')}`, '', id)
            } else kill.reply(from, 'Usa esto en audios!', id)
            break
			

	case 'get':
            if (quotedMsgObj) {
                let encryptMedia
                let replyOnReply = await kill.getMessageById(quotedMsgObj.id)
                let obj = replyOnReply.quotedMsgObj
                if (/ptt|audio|video|image|document|sticker/.test(quotedMsgObj.type)) {
                    encryptMedia = quotedMsgObj
                    if (encryptMedia.animated) encryptMedia.mimetype = ''
                } else if (obj && /ptt|audio|video|image/.test(obj.type)) {
                    encryptMedia = obj
                } else return
                const _mimetype = encryptMedia.mimetype
                const mediaData = await decryptMedia(encryptMedia)
                await kill.sendFile(from, `data:${_mimetype};base64,${mediaData.toString('base64')}`, '', 'S2', encryptMedia.id)
            } else kill.reply(from, '¿De verdad tienes un archivo sobre eso??', id)
            break
			
			
        case 'wallpaper':
            if (args.length == 0) return kill.reply(from, 'Necesitas decirme que quieres de fondo de pantalla!', id)
            const quere = body.slice(6)
            const wallp = await wall(quere)
            console.log(wallp)
            await kill.sendFileFromUrl(from, wallp, 'wallp.jpg', '', id)
            break


        case 'ping':
			if (mute) return console.log('Ignorando comando [Silence]')
            kill.sendText(from, `Pong! xd\n_Mi velocidad de respuesta es de ${processTime(t, moment())} segundos._`)
            break


        case 'criador':
            kill.sendContact(from, '529984907794')
			kill.reply(from, 'Si no responde, es por que no le importas:v _OK NO_, puede estar ocupado, tu tranqui..', id)
            break


        case 'donate':
		case 'doar':
            kill.sendText(from, donate, id)
            kill.sendContact(from, 'wa.me/+529984907794')
            break
			
	case 'valor':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (args.length == 0) return kill.reply(from, 'Para usar digite el comando, segido del valor y tipo.\n\nEjemplo: /valor 1USD (Junto.)\n\nDigite /coins para ver la lista de monedas que pueden ser usadas [Es una lista enooooooormeeeeee].', id)
			const money = await axios.get(`https://brl.rate.sx/${args[0]}`)
			await kill.reply(from, `*${args[0]}* _vale en México_ *${money.data}* _Pesos._`, id)
			break


        case 'roll':
            const dice = Math.floor(Math.random() * 6) + 1
            await kill.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png')
            break


        case 'flip':
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
               kill.sendStickerfromUrl(from, 'https://i.ibb.co/LJjkVK5/heads.png')
            } else {
               kill.sendStickerfromUrl(from, 'https://i.ibb.co/wNnZ4QD/tails.png')
            }
            break


       case 'poll':
            feature.getpoll(kill, message, pollfile, voterslistfile)
            break    


       case 'vote' :
            feature.voteadapter(kill, message, pollfile, voterslistfile)
            break


       case 'newpoll':
            feature.adminpollreset(kill, message, message.body.slice(9), pollfile, voterslistfile)
            break


       case 'ins': 
            feature.addcandidate(kill, message, message.body.slice(5), pollfile, voterslistfile)
            break


        case 'nsfw':
			if (mute) return console.log('Ignorando comando [Silence]')
       	    const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (args.length !== 1) return kill.reply(from, 'Establecer habilitar o deshabilitar', id)
			if (isGroupMsg) {
				if (args[0].toLowerCase() == 'enable') {
					nsfw_.push(chat.id)
					fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
					kill.reply(from, 'Comandos NSFW activados en este grupo!', id)
				} else if (args[0].toLowerCase() == 'disable') {
					nsfw_.splice(chat.id, 1)
					fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
					kill.reply(from, 'Comandos nsfw desactivamos para este grupo.', id)
				} else {
					kill.reply(from, 'Establecer habilitar o deshabilitar', id)
				}
			} else if (isGroupMsg) {
				if (args[0].toLowerCase() == 'enable') {
					nsfw_.push(chat.id)
					fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
					kill.reply(from, 'Comandos NSFW activados en este grupo!', id)
				} else if (args[0].toLowerCase() == 'disable') {
					nsfw_.splice(chat.id, 1)
					fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
					kill.reply(from, 'Comandos nsfw desactivamos para este grupo.', id)
				} else {
					kill.reply(from, 'Establecer habilitar o deshabilitar', id)
				}
			} else if (isGroupMsg) {
				await kill.reply(from, 'Lo sentimos, solo los administradores pueden usar este comando...', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break
			
	

        case 'welcome':
			
		if (mute) return console.log('Ignorando comando [Silence]')
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (args.length !== 1) return kill.reply(from, 'Olvidaste ponerlo (ON) o quitarlo [off].', id)
			if (args[0] == 'on') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
				kill.simulateTyping(from, true, id)
                kill.reply(from, '¡Hecho! Se han activado las funciones Bienvenida y Adiós.', id)
				kill.simulateTyping(from, false, id)
			} else if (args[0] == 'off') {
				let welcom = welcome.indexOf(chatId)
                welkom.splice(welcom, 1)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
				kill.simulateTyping(from, true, id)
                kill.reply(from, 'Entendido! Desactive las opciones de Bienvenida y Adiós.', id)
				kill.simulateTyping(from, true, id)
            } else {
                kill.reply(from, 'Olvidaste ponerlo (ON) o quitarlo [off].', id)
            }
            break
			
			
		case 'macaco':
			var item = ["macaco", "gorila", "chimpanzé", "orangotango", "babuino"]
    	    var esco = item[Math.floor(Math.random() * item.length)]
			console.log(esco)
			var maca = "https://api.fdci.se/rep.php?gambar=" + esco
			axios.get(maca)
			    .then((result) => {
				var mon = JSON.parse(JSON.stringify(result.data))
				var nkey = mon[Math.floor(Math.random() * mon.length)]
              	kill.sendFileFromUrl(from, nkey, "", "Saludos soy el dios mono y vine a bendecir:v", id)
			})
			break
			
			
		case 'ball':
			const ball = await axios.get('https://nekos.life/api/v2/img/8ball')
			await kill.sendFileFromUrl(from, ball.data.url, '', '', id)
			break
			
			
		case 'cafune':
			if (double == 1) {
				const cfne = await axios.get('https://nekos.life/api/v2/img/pat')
				await kill.sendFileFromUrl(from, cfne.data.url, '', '', id)
			} else if (double == 2) {
				const cfne = await axios.get('https://nekos.life/api/v2/img/cuddle')
				await kill.sendFileFromUrl(from, cfne.data.url, '', '', id)
			}
			break			
			
			
		case 'quack':
			const patu = await axios.get('https://nekos.life/api/v2/img/goose')
			await kill.sendFileFromUrl(from, patu.data.url, '', '', id)
			break
			

		case 'poke':
			const teco = await axios.get('https://nekos.life/api/v2/img/poke')
			await kill.sendFileFromUrl(from, teco.data.url, '', '', id)
			break
			

		case 'cocegas':
			const cocegas = await axios.get('https://nekos.life/api/v2/img/tickle')
			await kill.sendFileFromUrl(from, cocegas.data.url, '', '', id)
			break
			
			
		case 'feed':
			const feed = await axios.get('https://nekos.life/api/v2/img/tickle')
			await kill.sendFileFromUrl(from, feed.data.url, '', '', id)
			break
			
			
		case 'baka':
			const baka = await axios.get('https://nekos.life/api/v2/img/baka')
			await kill.sendFileFromUrl(from, baka.data.url, '', '', id)
			break
			
			
		case 'lizard':
		case 'lagarto':
			const lizard = await axios.get('https://nekos.life/api/v2/img/lizard')
			await kill.sendFileFromUrl(from, lizard.data.url, '', '', id)
			break
			

        case 'google':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, `Digite algo para buscar.`, id)
		    const googleQuery = body.slice(8)
            google({ 'query': googleQuery }).then(results => {
            let vars = `_*Resultados de búsqueda de Google para: ${googleQuery}*_\n`
            for (let i = 0; i < results.length; i++) {
                vars +=  `\n––––•(-••-)•––––\n*Titulo >* ${results[i].title}\n\n*Descripcion >* ${results[i].snippet}\n\n*Link >* ${results[i].link}`
            }
                kill.reply(from, vars, id)
            }).catch(e => {
                kill.reply(from, 'Error al buscar en google.', id)
            })
            break
			
			
        case 'boy':
    	    var hite = ["eboy", "garoto", "homem", "men", "garoto oriental", "japanese men", "pretty guy", "homem bonito"];
    	    var hesc = hite[Math.floor(Math.random() * hite.length)];
			var men = "https://api.fdci.se/rep.php?gambar=" + hesc;
			axios.get(men)
            	.then((result) => {
				var h = JSON.parse(JSON.stringify(result.data));
				var cewek =  h[Math.floor(Math.random() * h.length)];
              	kill.sendFileFromUrl(from, cewek, "result.jpg", "Homens...", id)
			})
			break
			

        case 'girl':
			if (mute) return console.log('Ignorando comando [Silence]')
    	    var items = ["garota adolescente", "saycay", "alina nikitina", "belle delphine", "teen girl", "teen cute", "japanese girl", "garota bonita oriental", "oriental girl", "korean girl", "chinese girl", "e-girl", "teen egirl", "brazilian teen girl", "pretty teen girl", "korean teen girl", "garota adolescente bonita", "menina adolescente bonita", "egirl", "cute girl"];
    	    var cewe = items[Math.floor(Math.random() * items.length)];
			console.log(cewe)
			var girl = "https://api.fdci.se/rep.php?gambar=" + cewe;
			axios.get(girl)
            	.then((result) => {
				var b = JSON.parse(JSON.stringify(result.data));
				var cewek =  b[Math.floor(Math.random() * b.length)];
              	kill.sendFileFromUrl(from, cewek, "result.jpg", "UUUU pero que linda no?", id)
			})
			break


	case 'mod':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, 'Ingrese un nombre para buscar!', id)
            try {
                const moddroid = await axios.get('https://tobz-api.herokuapp.com/api/moddroid?q=' + body.slice(10)  + '&apikey=BotWeA')
                if (moddroid.data.error) return kill.reply(from, moddroid.data.error, id)
                const modo = moddroid.data.result[0]
                const resmod = `• *Titulo* : ${modo.title}\n\n• *Quien lo creo* : ${modo.publisher}\n\n• *Peso* : ${modo.size}\n\n• *MOD* : ${modo.mod_info}\n\n• *Version* : ${modo.latest_version}\n\n• *Genero* : ${modo.genre}\n\n• *Link* : ${modo.link}\n\n• *Download* : ${modo.download}`
                kill.sendFileFromUrl(from, modo.image, 'MODDROID.jpg', resmod, id)
            } catch (err) {
                console.log(err)
            }
            break
			
	case 'happymod':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, 'Ingrese un nombre para buscar!', id)
            try {
                const happymod = await axios.get('https://tobz-api.herokuapp.com/api/happymod?q=' + body.slice(10)  + '&apikey=BotWeA')
                if (happymod.data.error) return kill.reply(from, happymod.data.error, id)
                const modo = happymod.data.result[0]
                const resmod = `• *Titulo* : ${modo.title}\n\n• *Compra* : ${modo.purchase}\n\n• *Peso* : ${modo.size}\n\n• *Root* : ${modo.root}\n\n• *Version* : ${modo.version}\n\n• *Precio* : ${modo.price}\n\n• *Link* : ${modo.link}\n\n• *Download* : ${modo.download}`
                kill.sendFileFromUrl(from, modo.image, 'HAPPYMOD.jpg', resmod, id)
            } catch (err) {
                console.log(err)
            }
            break
			
        case 'anime':
			if (mute) return console.log('Ignorando comando [Silence]')
		    if (args.length == 0) return kill.reply(from, 'Especifica un nombre de anime!', id)
            const keyword = message.body.replace('/anime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await kill.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Es una pena, no encontré ningún resultado...', id)
              console.log("Sent!")
              return null
              }
            const { title, episodes, url, synopsis, rated, score, image_url } = parsed.results[0]
            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
			kill.reply(from, mess.wait, id)
			await sleep(5000)
            translate(synopsis, 'es')
                .then(async (syno) => {
				    const content = `*Anime encontrado!*\n\n✨️ *Titulo:* ${title}\n\n🎆️ *Episodios:* ${episodes}\n\n💌️ *Classificacion:* ${rated}\n\n❤️ *Nota:* ${score}\n\n💚️ *Sinopsis:* ${syno}\n\n🌐️ *Link*: ${url}`
					await kill.sendImage(from, base64, title, content, id)
				})
           } catch (err) {
             console.error(err.message)
             await kill.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Es una pena, no encontré ningún resultado...')
           }
          break


        case 'nh':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (args.length == 1) {
					const nuklir = body.split(' ')[1]
					kill.reply(from, mess.wait, id)
					const cek = await nhentai.exists(nuklir)
					if (cek === true)  {
						try {
							const api = new API()
							const pic = await api.getBook(nuklir).then(book => {
								return api.getImageURL(book.cover)
							})
							const dojin = await nhentai.getDoujin(nuklir)
							const { title, details, link } = dojin
							const { parodies, tags, artists, groups, languages, categories } = await details
							var teks = `*Titulo* : ${title}\n\n*Parodia de* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artistas* : ${artists.join(', ')}\n\n*Grupos* : ${groups.join(', ')}\n\n*Lenguajes* : ${languages.join(', ')}\n\n*Categoria* : ${categories}\n\n*Link* : ${link}`
							kill.sendFileFromUrl(from, pic, 'hentod.jpg', teks, id)
						} catch (err) {
                        kill.reply(from, '[❗] ¡Ups! Error de entrega!', id)
						}
					} else {
						kill.reply(from, '[❗] no se encontraron resultados...')
					}
				} else {
					kill.reply(from, 'Lo usó mal, intente verificar si el comando es correcto.')
				}
			} else {
				if (args.length == 1) {
					const nuklir = body.split(' ')[1]
					kill.reply(from, mess.wait, id)
					const cek = await nhentai.exists(nuklir)
					if (cek === true)  {
						try {
							const api = new API()
							const pic = await api.getBook(nuklir).then(book => {
								return api.getImageURL(book.cover)
							})
							const dojin = await nhentai.getDoujin(nuklir)
							const { title, details, link } = dojin
							const { parodies, tags, artists, groups, languages, categories } = await details
							var teks = `*Titulo* : ${title}\n\n*Parodia de* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artistas* : ${artists.join(', ')}\n\n*Grupos* : ${groups.join(', ')}\n\n*Lenguajes* : ${languages.join(', ')}\n\n*Categoria* : ${categories}\n\n*Link* : ${link}`
							kill.sendFileFromUrl(from, pic, 'hentod.jpg', teks, id)
						} catch (err) {
                        kill.reply(from, '[❗] ¡Ups! ¡Hubo errores de envío!', id)
						}
					} else {
						kill.reply(from, '[❗] Dice que no encontró resultados...')
					}
				} else {
					kill.reply(from, 'Lo usó mal, intente verificar si el comando es correcto.')
				}
			}
			break


        case 'profile':
            if (isGroupMsg) {
				if (!quotedMsg) {
					var pic = await kill.getProfilePicFromServer(author)
					var namae = pushname
					var sts = await kill.getStatus(author)
					var adm = isGroupAdmins
					const { status } = sts
					if (pic == undefined) {
						var pfp = errorurl 
					} else {
						var pfp = pic
					} 
					await kill.sendFileFromUrl(from, pfp, 'pfp.jpg', `*Datos de perfil..* ✨️ \n\n 🔖️ *¿Cuál es tu etiqueta de usuario?? ${namae}*\n\n💌️ *Estado?*\n${status}\n\n 👑️ *Eres un administrador? ${adm}*`)
			    } else if (quotedMsg) {
					var qmid = quotedMsgObj.sender.id
					var pic = await kill.getProfilePicFromServer(qmid)
					var sts = await kill.getStatus(qmid)
					const { status } = sts
					if (pic == undefined) {
						var pfp = errorurl 
					} else {
						var pfp = pic
					}
					await kill.sendFileFromUrl(from, pfp, 'pfo.jpg', `${status}`)
				}
			}
            break


        case 'brainly':
            if (args.length >= 2){
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return kill.reply(from, 'Maximo de 10 palabras.', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            kill.reply(from, `➸ *Questão* : ${x.pertanyaan}\n\n➸ *Resposta* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            kill.reply(from, `➸ *Pregunta* : ${x.pertanyaan}\n\n➸ *Respuesta* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link de la imagem* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                kill.reply(from, '¡Ups! Lo escribiste bien?', id)
            }
            break


		case 'store':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (args.length == 0) return kill.reply(from, 'Especifique el nombre de la aplicación que desea buscar.', id)
			kill.reply(from, mess.wait, id)
			await sleep(5000)
			const stsp = await search(`${body.slice(7)}`)
            translate(stsp.description, 'pt')
                .then((playst) => kill.sendFileFromUrl(from, stsp.icon, '', `*Nombre >* ${stsp.name}\n\n*Link >* ${stsp.url}\n\n*Precio >* ${stsp.price}\n\n*Descripcion >* ${playst}\n\n*Nota >* ${stsp.rating}/5\n\n*Descripcion >* ${stsp.developer.name}\n\n*Otros>* ${stsp.developer.url}`, id))
			break


        case 'search':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                kill.reply(from, 'buscando....\n\nEvite usar esto con fan-mades, dibujos de pinterest u otros, use solo con impresiones de episodios de anime, ok?', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		kill.reply(from, 'Es como pudo suceder, no hay respuesta al respecto.', id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*Puede ser ~ó es~ incorrecto...* :\n\n'
                    }
                    teks += `➸ *Titulo en Japonês* : ${title}\n➸ *Titulo en Chinesse* : ${title_chinese}\n➸ *Titulo em Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Episodio* : ${episode.toString()}\n`
                    teks += `➸ *Similitud de los trazos* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    kill.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        kill.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    kill.reply(from, 'Bueno, tengo un error.', id)
                })
            } else {
                kill.sendFile(from, './lib/media/img/tutod.jpg', 'Tutor.jpg', 'Evite usar esto con fan-mades, dibujos de pinterest u otros, use solo con impresiones de episodios de anime, ok?', id)
            }
            break

        case 'link':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
            if (isGroupMsg) {
                const inviteLink = await kill.getGroupInviteLink(groupId);
                kill.sendLinkWithAutoPreview(from, inviteLink, `\nAqui está el link del grupo🤩 ${name}!`)
            } else {
            	kill.reply(from, 'Vaya, este es solo un comando de grupo.', id)
            }
            break
			
	case 'maps':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, `Pon un nombre de lugar ahí`, id)
            const mapz = body.slice(6)
            try {
				const mapz2 = await axios.get('https://mnazria.herokuapp.com/api/maps?search=' + mapz)
				const { gambar } = mapz2.data
				const pictk = await bent("buffer")(gambar)
				const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
				kill.sendImage(from, base64, 'maps.jpg', `*Foto do mapa de ${mapz}*`)
            } catch (err) {
				console.error(err.message)
				await kill.reply(from, 'Algo salió mal aquí, lo siento.', id)
			}
			break


        case 'broad':
            if (!isOwner) return kill.reply(from, 'Solo mi creador tiene acceso a este comando.', id)
            let msg = body.slice(6)
            const chatz = await kill.getAllChatIds()
            for (let ids of chatz) {
                var cvk = await kill.getChatById(ids)
                if (!cvk.isReadOnly) await kill.sendText(ids, `[Transmissão do dono da Íris]\n\n${msg}`)
            }
            kill.reply(from, 'Difusión exitosa!', id)
            break


        case 'adms':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await kill.sendTextWithMentions(from, mimin)
            break


        case 'groupinfo' :
			if (mute) return console.log('Ignorando comando [Silence]')
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            let admgp = ''
            for (let admon of groupAdmins) {
                admgp += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
			var gpOwner = chat.groupMetadata.owner.replace(/@c.us/g, '')
            var welgrp = welkom.includes(chat.id)
            var ngrp = nsfw_.includes(chat.id)
            var lzex = exsv.includes(chat.id)
            var grouppic = await kill.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await kill.sendFileFromUrl(from, pfp, 'group.png', ``, id)
			await kill.sendTextWithMentions(from, `*${groupname}*\n\n*🌐️ Miembros > ${totalMem}*\n\n*💌️ Welcome|Goodby > ${welgrp}*\n\n*🌙 Regalas(Anti-Links, Anti-Porno, no sacar al bot:(...) >  ${lzex}*\n\n*⚜️ Contenido para adultos > ${ngrp}*\n\n*📃️ Descripcion >V*\n ${desc}\n\n*🌙 Propietario >* @${gpOwner}\n\n*☀️ Administradores >V*\n${admgp}`, id)
			break
			
			
        case 'ownergroup':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (!isGroupMsg) return kill.reply(from, 'Solo grupos', id)
            const Owner_ = chat.groupMetadata.owner
            await kill.sendTextWithMentions(from, `El wey que creó el grupo fue @${Owner_}`)
            break
			
			
		case 'sip':
			if (args.length == 1) {
				const ip = await axios.get(`http://ipwhois.app/json/${body.slice(5)}`)
				await kill.sendLinkWithAutoPreview(from, `http://www.google.com/maps/place/${ip.data.latitude},${ip.data.longitude}`, `\n✪ IP: ${ip.data.ip}\n\n✪ Tipo: ${ip.data.type}\n\n✪ Region: ${ip.data.region}\n\n✪ Ciudad: ${ip.data.city}\n\n✪ Latitud: ${ip.data.latitude}\n\n✪ Longitud: ${ip.data.longitude}\n\n✪ Provedor: ${ip.data.isp}\n\n✪ Continente: ${ip.data.continent}\n\n✪ Sigla del continente: ${ip.data.continent_code}\n\n✪ País: ${ip.data.country}\n\n✪ Sigla del País: ${ip.data.country_code}\n\n✪ Capital do País: ${ip.data.country_capital}\n\n✪ DDI: ${ip.data.country_phone}\n\n✪ Países Vesinos: ${ip.data.country_neighbours}\n\n✪ Horário: ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n\n✪ Moneda: ${ip.data.currency}\n\n✪ Sigla de Moneda: ${ip.data.currency_code}\n\nBusca de IP realizada por Íris - Samu330!`, id)
            } else {
				await kill.reply(from, 'Especifique una IP de tipo IPV4.', id)
            }
			break
			
			
		case 'scep':
			if (args.length == 1) {
				const cep = await axios.get(`https://viacep.com.br/ws/${body.slice(6)}/json/`)
				await kill.reply(from, `✪ CEP: ${cep.data.cep}\n\n✪ Lugar públicoro: ${cep.data.logradouro}\n\n✪ Complemento: ${cep.data.complemento}\n\n✪ Barrio: ${cep.data.bairro}\n\n✪ Estado: ${cep.data.localidade}\n\n✪ DDD: ${cep.data.ddd}\n\n✪ Sigla del Estado: ${cep.data.uf}\n\n✪ Código IBGE: ${cep.data.ibge}\n\n✪ Código GIA: ${cep.data.gia}\n\n✪ Código Siafi: ${cep.data.siafi}\n\nBusca de CEP echa por Íris - Samu330.`, id)
            } else {
				await kill.reply(from, 'Especifique un CEP.', id)
            }
			break


        case 'everyone':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (isGroupMsg && isGroupAdmins) {
				const groupMem = await kill.getGroupMembers(groupId)
				let hehe = `🛑╔══✪〘 HOLA TODOS MARCADOS 〙✪══\n⚠╠✪〘 Asunto: ${body.slice(10)} 〙✪═\n`
				for (let i = 0; i < groupMem.length; i++) {
					hehe += '🔥╠➥ '
					hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
				}
				hehe += '\n✔╚═✪〘 Gracias, te amo ❤ 〙✪═'
				await sleep(2000)
				await kill.sendTextWithMentions(from, hehe, id)
			} else if (isGroupMsg && isOwner) {
				const groupMem = await kill.getGroupMembers(groupId)
				let hehe = `🛑╔══✪〘 HOLA TODOS MARCADOS 〙✪══\n⚠╠✪〘 Assunto: ${body.slice(10)} 〙✪═\n`
				for (let i = 0; i < groupMem.length; i++) {
					hehe += '🔥╠➥ '
					hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
				}
				hehe += '✔╚═✪〘 Gracias, te amo ❤ 〙✪═'
				await sleep(2000)
				await kill.sendTextWithMentions(from, hehe, id)
			} else if (isGroupMsg) {
				await kill.reply(from, 'Lo sentimos, solo los administradores pueden usar este comando...', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break


        case 'random':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            const memran = await kill.getGroupMembers(groupId)
            const randme = memran[Math.floor(Math.random() * memran.length)]
			console.log(randme.id)
            await kill.sendTextWithMentions(from, `═✪〘 Te han seleccionado! 〙✪═ \n\n @${randme.id.replace(/@c.us/g, '')}\n\n═✪〘 Para: ${body.slice(8)} 〙✪═`)
            await sleep(2000)
            break


        case 'kickall':
			if (mute) return console.log('Ignorando comando [Silence]')
            const isdonogroup = sender.id === chat.groupMetadata.owner
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isdonogroup) return kill.reply(from, 'Solo el propietario del grupo puede usar esto.', id)
            if (!isBotGroupAdmins) return kill.reply(from, 'Necesito ser una ademira', id)
            const allMem = await kill.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {
                    console.log('Me salté un ADM.')
                } else {
                    await kill.removeParticipant(groupId, allMem[i].id)
                }
            }
            kill.reply(from, 'Todo prohibido', id)
            break


        case 'leaveall':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (!isOwner) return kill.reply(from, 'Solo mi creador tiene acceso a este comando.', id)
            const allChats = await kill.getAllChatIds()
            const allGroups = await kill.getAllGroups()
            for (let gclist of allGroups) {
                await kill.sendText(gclist.contact.id, `Voltamos em breve, ou não haha : ${allChats.length}`)
                await kill.leaveGroup(gclist.contact.id)
            }
            kill.reply(from, 'Listo, deja todos los grupos.', id)
            break


        case 'clearall':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (!isGroupAdmins && !isOwner && !isBotGroupAdmins) return kill.reply(from, 'Solo mi creador tiene acceso a este comando.', id)
            const allChatz = await kill.getAllChats()
            for (let dchat of allChatz) {
                await kill.deleteChat(dchat.id)
            }
            kill.reply(from, 'Borré todos los chats!', id)
            break


	case 'add':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (!isGroupMsg) return kill.reply(from, 'Esta función solo se puede utilizar en grupos', id)
            if (args.length === 0) return kill.reply(from, 'Para utilizar esta función, envíe el comando */Add* +52xxxxx', id)
            if (!isGroupAdmins) return kill.reply(from, 'Este comando solo puede ser utilizado por administradores de grupo', id)
            if (!isBotGroupAdmins) return kill.reply(from, 'Este comando solo se puede usar cuando el bot se convierte en administrador', id)
            try {
                await kill.addParticipant(from,`${args}@c.us`)
            } catch {
                kill.reply(from, mess.error.Ad, id)
            }
            break
			
			
	case '3d':
		if (args.length == 0) kill.reply(from, 'Pon un mensaje ahí!', id)
		kill.reply(from, mess.wait, id)
		await kill.sendFileFromUrl(from, `https://arugaz.my.id/api/textpro/text3d?text=${body.slice(4)}`, '', '', id)
		break 
		
		
	case 'gaming':
		if (args.length == 0) kill.reply(from, 'Pon un nombre ahí!', id)
		kill.reply(from, mess.wait, id)
		await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(8)}`, '', '', id)
		break
		

		
	case 'fogareu':
		if (args.length == 0) kill.reply(from, 'Pon un nombre ahí!', id)
		kill.reply(from, mess.wait, id)
		await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/epep?text=${body.slice(9)}`, '', '', id)
		break
		
		
	case 'logo':
		if (args.length == 0) kill.reply(from, 'Pon un nombre ahí!', id)
		kill.reply(from, mess.wait, id)
		await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/blackpink?text=${body.slice(6)}`, '', '', id)
		break
	
			
    case 'pornhub':
            arkp = body.trim().substring(body.indexOf(' ') + 1)
            if (args.length >= 2) {
                kill.reply(from, mess.wait, id)
                const fison = arkp.split('|')[0]
                const twoso = arkp.split('|')[1]
                if (fison > 10 || twoso > 10) return kill.reply(from, 'Disculpe, maximo de 10 letras.', id)
                await kill.sendFileFromUrl(from, `https://arugaz.my.id/api/textpro/pornhub?text1=${fison}&text2=${twoso}`, '', '', id)
            } else {
                await kill.reply(from, `Para usar esto, agregue dos oraciones, separándolas por el signo: |.`, id)
            }
            break
			

	case 'porn':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            const porn = await axios.get('https://meme-api.herokuapp.com/gimme/porn')
            kill.sendFileFromUrl(from, porn.data.url, '', porn.data.title, id)
            } else {
				const porn = await axios.get('https://meme-api.herokuapp.com/gimme/porn')
				kill.sendFileFromUrl(from, porn.data.url, '', porn.data.title, id)
			}
            break
			
	case 'lesbian':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            const lesb = await axios.get('https://meme-api.herokuapp.com/gimme/lesbians')
            kill.sendFileFromUrl(from, lesb.data.url, '', lesb.data.title, id)
			} else {
				const lesb = await axios.get('https://meme-api.herokuapp.com/gimme/lesbians')
				kill.sendFileFromUrl(from, lesb.data.url, '', lesb.data.title, id)
			}
            break

        case 'meme':
			if (mute) return console.log('Ignorando comando [Silence]')
            ark = body.trim().substring(body.indexOf(' ') + 1)
            if ((isMedia || isQuotedImage) && args.length >= 2) {
                const top = ark.split('|')[0]
                const bottom = ark.split('|')[1]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await meme.custom(getUrl, top, bottom)
                kill.sendFile(from, ImageBase64, 'image.png', '', null, true)
                    .then((serialized) => console.log(`Meme de id: ${serialized} feito em ${processTime(t, moment())}`))
                    .catch((err) => console.error(err))
            } else {
                await kill.reply(from, `Su uso es incorrecto ~ idiota ~ O.O\nUso correto = /meme frase-de-arriba | frase-de-abajo.\nLa oración inferior es opcional, si lo desea dejarla en blanco, pero use el | aun así.`, id)
            }
            break


        case 'kick':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (isGroupMsg && isGroupAdmins) {
				if (!isBotGroupAdmins) return kill.reply(from, 'Para eso necesito ser parte de los Administradores.', id)
				if (mentionedJidList.length === 0) return kill.reply(from, 'Escribiste el comando muy mal, arréglalo y envíalo bien.', id)
				await kill.sendTextWithMentions(from, `Prohibición de miembro común:\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
				for (let i = 0; i < mentionedJidList.length; i++) {
					if (groupAdmins.includes(mentionedJidList[i])) return kill.reply(from, mess.error.Ki, id)
					await kill.removeParticipant(groupId, mentionedJidList[i])
				}
			} else if (isGroupMsg && isOwner) {
				if (!isBotGroupAdmins) return kill.reply(from, 'Para eso necesito ser parte de los Administradores.', id)
				if (mentionedJidList.length === 0) return kill.reply(from, 'Escribiste el comando muy mal, arréglalo y envíalo bien.', id)
				await kill.sendTextWithMentions(from, `Banindo membro comum:\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
				for (let i = 0; i < mentionedJidList.length; i++) {
					if (groupAdmins.includes(mentionedJidList[i])) return kill.reply(from, mess.error.Ki, id)
					await kill.removeParticipant(groupId, mentionedJidList[i])
				}
			} else if (isGroupMsg) {
				await kill.reply(from, 'Lo sentimos, solo los administradores pueden usar este comando...', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break


        case 'leave':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (isGroupMsg && isGroupAdmins) {
				await kill.sendText(from,'Tendré que irme pero nos eremos pronto! <3').then(() => kill.leaveGroup(groupId))
			} else if (isGroupMsg && isOwner) {
				await kill.sendText(from,'Tendré que irme pero nos eremos pronto! <3').then(() => kill.leaveGroup(groupId))
			} else if (isGroupMsg) {
				await kill.reply(from, 'Lo siento, solo los administradores y mi propietario pueden usar este comando...', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break


        case 'promote':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (!isGroupMsg) return client.reply(from, 'Esta función solo se puede utilizar en grupos', id)
            if (!isGroupAdmins) return client.reply(from, 'Esta función solo puede ser utilizada por administradores de grupo', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Esta función solo se puede utilizar cuando el bot es un administrador', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Para utilizar esta función, envíe el comando */Promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return client.reply(from, 'Lo sentimos, este comando solo se puede aplicar a 1 usuario.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'Lo sentimos, el usuario ya es administrador.', id)
            await client.promoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Perfecto XD Ahora @${mentionedJidList[0]} Es Admin.`)
            break
        case 'demote':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (!isGroupMsg) return client.reply(from, 'Esta función solo se puede utilizar en grupos', id)
            if (!isGroupAdmins) return client.reply(from, 'Esta función solo puede ser utilizada por administradores de grupo', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Esta función solo se puede utilizar cuando el bot es un administrador', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Para utilizar esta función, envíe el comando *!demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return client.reply(from, 'Lo sentimos, este comando solo se puede aplicar a 1 persona.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'Lo sentimos, el usuario no es administrador.', id)
            await client.demoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Perfecto, se le quito Admin a @${mentionedJidList[0]}.`)
            break


        case 'botstat':
			if (mute) return console.log('Ignorando comando [Silence]')
            const loadedMsg = await kill.getAmountOfLoadedMessages()
            const chatIds = await kill.getAllChatIds()
            const groups = await kill.getAllGroups()
            kill.sendText(from, `Status :\n- *${loadedMsg}* Mensajes recibidos después de llamar\n- *${groups.length}* Conversaciones en grupo\n- *${chatIds.length - groups.length}* Conversaciones en PV\n- *${chatIds.length}* Total de conversaciones`)
            break


        case 'join':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (args.length == 0) return kill.reply(from, 'Ay algo mal en esto!', id)
            const gplk = body.slice(6)
            const tGr = await kill.getAllGroups()
            const minMem = 30
            const isLink = gplk.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await kill.inviteInfo(gplk)
            if (!isLink) return kill.reply(from, 'Link errado', id)
            if (tGr.length > 6) return kill.reply(from, 'uuuu jaja estoy al maximo de grupos, lo siento.', id)
            if (check.size < minMem) return kill.reply(from, 'Solo puede funcionar con grupos con +30 personas.', id)
            if (check.status === 200) {
                await kill.joinGroupViaLink(gplk).then(() => kill.reply(from, 'Entrando al grupo...'))
            } else {
                kill.reply(from, 'Link invalido', id)
            }
     break

        case 'delete':
        case 'del':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (!isGroupMsg) return client.reply(from, 'Esta función solo se puede utilizar en grupos', id)
            if (!isGroupAdmins) return client.reply(from, 'Esta función solo puede ser utilizada por administradores de grupo', id)
            if (!quotedMsg) return client.reply(from, '¡¡Incorrecto !!, enviar comando */del [tagmsgbot]*', id)
            if (!quotedMsgObj.fromMe) return client.reply(from, '¡¡Incorrecto !!, los Bots no pueden borrar los chats de otros usuarios!', id)
            client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break


        case 'tela':
           if (mute) return console.log('Ignorando comando [Silence]')
            const sesPic = await kill.getSnapshot()
            kill.sendFile(from, sesPic, 'session.png', 'Neh...', id)
            break
			

        case 'enviar':
            const arka = body.trim().substring(body.indexOf(' ') + 1)
            if (args.length == 0) return kill.reply(from, 'Necesitas definir entre [-gp, -pv ou -help] para usar!', id)
			const gid = groupId.replace('@g.us', '').replace('c.us', '')
			if (isGroupMsg) {
				if (args[0] == '-gp') {
					await kill.sendText(`${args[1]}` + '@g.us', `_Mensagem >_\n*"${arka.split('|')[1]} "*` + '\n\n_Quien envió =_ ' + '\n*"' + name + '"*' + '\n\n_Como responder:_')
					await kill.sendText(`${args[1]}` + '@g.us', `/enviar -gp ${gid} | Coloque sua resposta aqui`)
					await kill.sendText(from, 'Mensage enviado.')
				} else if (args[0] == '-pv') {
					await kill.sendText(`${args[1]}` + '@c.us', `${arka.split('|')[1]}` + '\n\n_Quien envió =_ ' + '*' + name + '*' + '\n\n_Como responder:_')
					await kill.sendText(`${args[1]}` + '@c.us', `/enviar -gp ${gid} | Coloque sua resposta aqui`)
					await kill.sendText(from, 'Mensage enviado.')
				} else if (args[0] == '-help' || args[0] == '-h') {
					await kill.reply(from, 'Para usar, escriba el comando y al frente escriba -pv para privado, o -gp para grupos, y frente a ellos use el ID, separando el mensaje por |. Ejemplo:\n/enviar -gp 529984****-174362736 | hola?\n\nPuede obtener las ID con el comando */id*, y recuerde usar sin el @c.us e @g.us.', id)
				} else {
					await kill.reply(from, 'Para usar, escriba el comando y al frente escriba -pv para privado, o -gp para grupos, y frente a ellos use el ID, separando el mensaje por |. Ejemplo:\n/enviar -gp 529984****-174362736 | hola?\n\nPuede obtener las ID con el comando */id*, y recuerde usar sin el @c.us e @g.us.', id)
				}
			} else {
				await kill.reply(from, mess.error.Gp + '\nSi desea unirse a un grupo [/legiao].', id)
			}
            break

			
	case 'date':
			if (mute) return console.log('Ignorando comando [Silence]')
			const timeda = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
			await kill.reply(from, 'Ahora son exactamente\n"' + timeda + '"', id)
			break
			

        case 'blocks':
			if (mute) return console.log('Ignorando comando [Silence]')
            
            let hih = `Lista de bloqueados\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            kill.sendTextWithMentions(from, hih, id)
            break
			
			
        case 'encerrar':
			if (mute) return console.log('Ignorando comando [Silence]')
			kill.reply(from, 'Solicitud recibida!\nMe apagaré en 5 segundos.', id)
		    await sleep(5000)
			await kill.kill()
            break


        /*case 'loli':
            const loli = await get.get('http://mhankbarbars.herokuapp.com/api/randomloli').json()
            kill.sendFileFromUrl(from, loli.result, 'loli.jpeg', 'Vejo que você é um homem/mulher de cultura.', id)
            break*/
			
			
        case 'loli':
			const onefive = Math.floor(Math.random() * 145) + 1
			kill.sendFileFromUrl(from, `https://media.publit.io/file/Twintails/${onefive}.jpg`, 'loli.jpg', 'Veo que eres un hombre / mujer de cultura.', id)
            break
			

	case 'tits':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
			if (octo == 1) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/tits')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 2) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BestTits')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 3) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/boobs')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 4) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 5) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/smallboobs')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 6) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/TinyTits')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 7) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			} else if (octo == 8) {
				const tits = await axios.get('https://meme-api.herokuapp.com/gimme/amazingtits')
				kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
			}
            } else {
				if (octo == 1) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/tits')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 2) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BestTits')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 3) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/boobs')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 4) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 5) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/smallboobs')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 6) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/TinyTits')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 7) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				} else if (octo == 8) {
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/amazingtits')
					kill.sendFileFromUrl(from, tits.data.url, '', tits.data.title, id)
				}
			}
            break
			
	case 'milf':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            	if (triple == 1) {
            		const milf1 = await axios.get('https://meme-api.herokuapp.com/gimme/milf');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, '', `${title}`, id)
            	}else if (triple == 2) {
            		const milf1 = await axios.get('https://meme-api.herokuapp.com/gimme/milf_pictures');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const tits1 = await axios.get('https://meme-api.herokuapp.com/gimme/best_nsfw_milf');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            } else {
            	if (triple == 1) {
            		const milf1 = await axios.get('https://meme-api.herokuapp.com/gimme/milf');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 2) {
            		const milf1 = await axios.get('https://meme-api.herokuapp.com/gimme/milf_pictures');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const milf1 = await axios.get('https://meme-api.herokuapp.com/gimme/best_nsfw_milf');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = milf1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            }
			break
			
	case 'bdsm':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            	if (triple == 1) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/BDSMPics');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, '', `${title}`, id)
            	}else if (triple == 2) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/bdsm');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/TeenBDSM');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            } else {
            	if (triple == 1) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/BDSMPics');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 2) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/bdsm');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/TeenBDSM');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bdsm1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            }
			break
			
	case 'ass':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            	if (triple == 1) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/LegalTeens');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, '', `${title}`, id)
            	}else if (triple == 2) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/ass');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/bigasses');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
             } else {
            	if (triple == 1) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/LegalTeens');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 2) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/ass');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/bigasses');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            }
            break
			
	case 'pussy':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            	if (triple == 1) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/pussy');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, '', `${title}`, id)
            	}else if (triple == 2) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/ass');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/LegalTeens');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
             } else {
            	if (triple == 1) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/pussy');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 2) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/ass');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}else if (triple == 3) {
            		const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/LegalTeens');
            		let { postlink, title, subreddit, url, nsfw, spoiler } = bows1.data
            		await kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            	}	
            }
            break
			
        case 'hug':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (double == 1) {
            const hug1 = await axios.get(`https://nekos.life/api/v2/img/hug`)
            await kill.sendFileFromUrl(from, hug1.data.url, ``, `Abraço fofinho...`, id)
            } else if (double == 2) {
            const hug = await randomNimek('hug')
            await kill.sendFileFromUrl(from, hug, ``, '<3', id)
			}
			break
			
			
        case 'exclusive':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (!isGroupMsg) return kill.reply(from, 'Solo grupos!', id)
			
            if (args.length !== 1) return kill.reply(from, 'Establecer entre encendido y apagado!', id)
			if (args[0] == 'on') {
                exsv.push(chatId)
                fs.writeFileSync('./lib/exclusive.json', JSON.stringify(exsv))
                kill.reply(from, 'Se han habilitado los comandos exclusivos de Legion (antilink,antiporno, no sacar al bot).', id)
			} else if (args[0] == 'off') {
				let exclu = exsv.indexOf(chatId)
                exsv.splice(exclu, 1)
                fs.writeFileSync('./lib/exclusive.json', JSON.stringify(exsv))
                kill.reply(from, 'Se han desactivado los comandos exclusivos de Legion (antilink,antiporno, no sacar al bot)', id)
            } else {
                kill.reply(from, 'Activar o desactivar!', id)
            }
            break


        case 'baguette':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (double == 1) {
            const bag = await axios.get(`http://api.i-tech.id/anim/baguette?key=${techapi}`)
			console.log(bag.data)
            await kill.sendFileFromUrl(from, bag.data.result, ``, ``, id)
            } else if (double == 2) {
            const baguette = await randomNimek('baguette')
            kill.sendFileFromUrl(from, baguette, ``, '', id)
			}
            break


        case 'dva':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (double == 1) {
            const dva = await axios.get(`http://api.i-tech.id/anim/dva?key=${techapi}`)
			console.log(dva.data)
            await kill.sendFileFromUrl(from, dva.data.result, ``, `DVA es muy hermoso, simplemente no sé qué es...`, id)
            } else if (double == 2) {
            const dva1 = await randomNimek('dva') 
            kill.sendFileFromUrl(from, dva1, ``, `Que ~caliente~ hermosa!`, id)
			}
            break


        case 'waifu':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (triple == 1) {
				const total = fs.readFileSync('./lib/waifu.json')
				const parsew = JSON.parse(total)
				const organi = Math.floor(Math.random() * parsew.length)
				const finale = parsew[organi]
				await kill.sendFileFromUrl(from, finale.image, 'waifu.jpg', finale.teks, id)
            } else if (triple == 2) {
				const waifu1 = await axios.get(`http://arugaz.herokuapp.com/api/waifu`)
				kill.sendFileFromUrl(from, waifu1.data.image, ``, `*Nombre:* ${waifu1.data.name}\n\n*Descripcion > *\n${waifu1.data.desc}`, id)
            } else if (triple == 3) {
				const waifu3 = await axios.get(`https://nekos.life/api/v2/img/waifu`)
				await kill.sendFileFromUrl(from, waifu3.data.url, '', 'No se nada de ella:)', id)
			}
            break


        case 'husb':
			if (mute) return console.log('Ignorando comando [Silence]')
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            kill.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            break
			
			
        case 'iecchi':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (triple == 1) {
					const ecchi = await axios.get('https://nekos.life/api/v2/img/erok')
					await kill.sendFileFromUrl(from, ecchi.data.url, id)
				} else if (triple == 2) {
					const ecchi1 = await axios.get('https://nekos.life/api/v2/img/erokemo')
					await kill.sendFileFromUrl(from, ecchi1.data.url, '', '', id)
				} else if (triple == 3) {
					const ecchi3 = await axios.get('https://nekos.life/api/v2/img/ero')
					await kill.sendFileFromUrl(from, ecchi3.data.url, '', '', id)
				}
			} else {
				if (triple == 1) {
					const ecchi = await axios.get('https://nekos.life/api/v2/img/erok')
					await kill.sendFileFromUrl(from, ecchi.data.url, '', '', id)
				} else if (triple == 2) {
					const ecchi1 = await axios.get('https://nekos.life/api/v2/img/erokemo')
					await kill.sendFileFromUrl(from, ecchi1.data.url, '', '', id)
				} else if (triple == 3) {
					const ecchi3 = await axios.get('https://nekos.life/api/v2/img/ero')
					await kill.sendFileFromUrl(from, ecchi3.data.url, '', '', id)
				}
			}
			break
			

        case 'blowjob':
        case 'boquete':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (double == 1) {
					const blowjob = await axios.get('https://nekos.life/api/v2/img/bj')
					await kill.sendFileFromUrl(from, blowjob.data.url, '', '', id)
				} else if (double == 2) {
					const blowjobs = await axios.get('https://nekos.life/api/v2/img/blowjob')
					await kill.sendFileFromUrl(from, blowjobs.data.url, '', '', id)
				}
			} else {
				const blowjob1 = await axios.get('https://nekos.life/api/v2/img/erok')
				await kill.sendFileFromUrl(from, blowjob1.data.url, '', '', id)
			}
			break

			
        case 'feet':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (double == 1) {
					const feet = await axios.get('https://nekos.life/api/v2/img/feetg')
					await kill.sendFileFromUrl(from, feet.data.url, '', '', id)
				} else if (double == 2) {
					const feets = await axios.get('https://nekos.life/api/v2/img/erofeet')
					await kill.sendFileFromUrl(from, feets.data.url, '', '', id)
				}
			} else {
				if (double == 1) {
					const feet = await axios.get('https://nekos.life/api/v2/img/feetg')
					await kill.sendFileFromUrl(from, feet.data.url, '', '', id)
				} else if (double == 2) {
					const feets = await axios.get('https://nekos.life/api/v2/img/erofeet')
					await kill.sendFileFromUrl(from, feets.data.url, '', '', id)
				}
			}
			break
			
			
        case 'hard':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				const hard = await axios.get('https://nekos.life/api/v2/img/spank')
				await kill.sendFileFromUrl(from, hard.data.url, '', '', id)
			} else {
				const hard = await axios.get('https://nekos.life/api/v2/img/spank')
				await kill.sendFileFromUrl(from, hard.data.url, '', '', id)
			}
			break
			
			
        case 'boobs':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (double == 1) {
					const bobis = await axios.get('https://nekos.life/api/v2/img/boobs')
					await kill.sendFileFromUrl(from, bobis.data.url, '', '', id)
				} else if (double == 2) {
					const tits = await axios.get('https://nekos.life/api/v2/img/tits')
					await kill.sendFileFromUrl(from, tits.data.url, '', '', id)
				}
			} else {
				if (double == 1) {
					const bobis = await axios.get('https://nekos.life/api/v2/img/boobs')
					await kill.sendFileFromUrl(from, bobis.data.url, '', '', id)
				} else if (double == 2) {
					const tits = await axios.get('https://nekos.life/api/v2/img/tits')
					await kill.sendFileFromUrl(from, tits.data.url, '', '', id)
				}
			}
			break
			

        case 'lick':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (double == 1) {
					const lick = await axios.get('https://nekos.life/api/v2/img/kuni')
					await kill.sendFileFromUrl(from, lick.data.url, '', '', id)
				} else if (double == 2) {
					const les = await axios.get('https://nekos.life/api/v2/img/les')
					await kill.sendFileFromUrl(from, les.data.url, '', '', id)
				}
			} else {
				if (double == 1) {
					const lick = await axios.get('https://nekos.life/api/v2/img/kuni')
					await kill.sendFileFromUrl(from, lick.data.url, '', '', id)
				} else if (double == 2) {
					const les = await axios.get('https://nekos.life/api/v2/img/les')
					await kill.sendFileFromUrl(from, les.data.url, '', '', id)
				}
			}
			break
			
			
        case 'femdom':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (triple == 1) {
					const femdom = await axios.get('https://nekos.life/api/v2/img/femdom')
					await kill.sendFileFromUrl(from, femdom.data.url, '', '', id)
				} else if (triple == 2) {
					const femdom1 = await axios.get('https://nekos.life/api/v2/img/yuri')
					await kill.sendFileFromUrl(from, femdom1.data.url, '', '', id)
				} else if (triple == 3) {
					const femdom2 = await axios.get('https://nekos.life/api/v2/img/eroyuri')
					await kill.sendFileFromUrl(from, femdom2.data.url, '', '', id)
				}
			} else {
				if (triple == 1) {
					const femdom = await axios.get('https://nekos.life/api/v2/img/femdom')
					await kill.sendFileFromUrl(from, femdom.data.url, '', '', id)
				} else if (triple == 2) {
					const femdom1 = await axios.get('https://nekos.life/api/v2/img/yuri')
					await kill.sendFileFromUrl(from, femdom1.data.url, '', '', id)
				} else if (triple == 3) {
					const femdom2 = await axios.get('https://nekos.life/api/v2/img/eroyuri')
					await kill.sendFileFromUrl(from, femdom2.data.url, '', '', id)
				}
			}
			break


        case 'futanari':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				const futanari = await axios.get('https://nekos.life/api/v2/img/futanari')
				await kill.sendFileFromUrl(from, futanari.data.url, '', '', id)
			} else {
				const futanari = await axios.get('https://nekos.life/api/v2/img/futanari')
				await kill.sendFileFromUrl(from, futanari.data.url, '', '', id)
			}
			break
			
			
        case 'masturb':
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (triple == 1) {
					const solog = await axios.get('https://nekos.life/api/v2/img/solog')
					await kill.sendFileFromUrl(from, solog.data.url, '', '', id)
				} else if (triple == 2) {
					const pwank = await axios.get('https://nekos.life/api/v2/img/solog')
					await kill.sendFileFromUrl(from, pwank.data.url, '', '', id)
				} else if (triple == 3) {
					const solour = await axios.get('https://nekos.life/api/v2/img/solo')
					await kill.sendFileFromUrl(from, solour.data.url, '', '', id)
				}
			} else {
				if (triple == 1) {
					const solog = await axios.get('https://nekos.life/api/v2/img/solog')
					await kill.sendFileFromUrl(from, solog.data.url, '', '', id)
				} else if (triple == 2) {
					const pwank = await axios.get('https://nekos.life/api/v2/img/solog')
					await kill.sendFileFromUrl(from, pwank.data.url, '', '', id)
				} else if (triple == 3) {
					const solour = await axios.get('https://nekos.life/api/v2/img/solo')
					await kill.sendFileFromUrl(from, solour.data.url, '', '', id)
				}
			}
			break
			
			
        case 'anal':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
				if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (double == 1) {
					const solog = await axios.get('https://nekos.life/api/v2/img/cum')
					await kill.sendFileFromUrl(from, solog.data.url, '', '', id)
				} else if (double == 2) {
					const anal = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
					await kill.sendFileFromUrl(from, anal.data.url, '', '', id)
				}
			} else {
				if (double == 1) {
					const solog = await axios.get('https://nekos.life/api/v2/img/cum')
					await kill.sendFileFromUrl(from, solog.data.url, '', '', id)
				} else if (double == 2) {
					const anal = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
					await kill.sendFileFromUrl(from, anal.data.url, '', '', id)
				}
			}
			break        
			
			
		case 'randomloli':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
				if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				const loliz = await axios.get('https://nekos.life/api/v2/img/keta')
				await kill.sendFileFromUrl(from, loliz.data.url, '', '', id)
			} else {
				const loliz = await axios.get('https://nekos.life/api/v2/img/keta')
				await kill.sendFileFromUrl(from, loliz.data.url, '', '', id)
			}
			break
			
			
        case 'nsfwicon':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
				if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				const icon = await axios.get('https://nekos.life/api/v2/img/nsfw_avatar')
				await kill.sendFileFromUrl(from, icon.data.url, '', '', id)
			} else {
				const icon = await axios.get('https://nekos.life/api/v2/img/nsfw_avatar')
				await kill.sendFileFromUrl(from, icon.data.url, '', '', id)
			}
			break
			
			
		case 'truth':
			if (mute) return console.log('Ignorando comando [Silence]')
			const memean = await axios.get('https://nekos.life/api/v2/img/gecg')
			await kill.sendFileFromUrl(from, memean.data.url, '', '', id)
			break
			

		case 'icon':
			if (mute) return console.log('Ignorando comando [Silence]')
			const avatarz = await axios.get('https://nekos.life/api/v2/img/avatar')
			await kill.sendFileFromUrl(from, avatarz.data.url, '', '', id)
			break
			
			
		case 'face':
			if (mute) return console.log('Ignorando comando [Silence]')
			const gasm = await axios.get('https://nekos.life/api/v2/img/gasm')
			await kill.sendFileFromUrl(from, gasm.data.url, '', '', id)
			break
			

		case 'pezinho':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				const pezin = await axios.get('https://nekos.life/api/v2/img/feet')
				await kill.sendFileFromUrl(from, pezin.data.url, '', '', id)
            } else {
				const pezin = await axios.get('https://nekos.life/api/v2/img/feet')
				await kill.sendFileFromUrl(from, pezin.data.url, '', '', id)
			}
			break


        case 'ihentai':
			if (mute) return console.log('Ignorando comando [Silence]')
		    const selnum = Math.floor(Math.random() * 7) + 1 
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (selnum == 1) {
					const hentai1 = await axios.get(`http://api.i-tech.id/anim/hentai?key=${techapi}`)
					await kill.sendFileFromUrl(from, hentai1.data.result, ``, `Safadenho e.e, bueno, espero que te guste el que elegí para ti...`, id)
				} else if (selnum == 2) {
					const hentai = await randomNimek('hentai')
					await kill.sendFileFromUrl(from, hentai, ``, 'Ui ui, hentai essa hora?', id)
				} else if (selnum == 3) {
					const hentai3 = await axios.get('https://nekos.life/api/v2/img/Random_hentai_gif')
					await kill.sendFileFromUrl(from, hentai3, ``, 'Espero que curta o hentai e.e', id)
				} else if (selnum == 4) {
					const hentai4 = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
					await kill.sendFileFromUrl(from, hentai4.data.url, ``, 'Espero que curta o hentai e.e', id)
				} else if (selnum == 5) {
					const hentai5 = await axios.get('https://nekos.life/api/v2/img/hentai')
					await kill.sendFileFromUrl(from, hentai5.data.url, ``, 'Hentaizinho bom...', id)
				} else if (selnum == 6) {
					const hentai6 = await axios.get('https://nekos.life/api/v2/img/pussy')
					await kill.sendFileFromUrl(from, hentai6.data.url, ``, 'Hentaizinho bom...', id)
				} else if (selnum == 7) {
					const clas = await axios.get('https://nekos.life/api/v2/img/classic')
					await kill.sendFileFromUrl(from, clas.data.url, ``, '', id)
				}
            } else {
			    if (selnum == 1) {
					const hentai1 = await axios.get('https://nekos.life/api/v2/img/Random_hentai_gif')
					await kill.sendFileFromUrl(from, hentai1, ``, 'Espero que curta o hentai e.e', id)
				} else if (selnum == 2) {
					const hentai2 = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
					await kill.sendFileFromUrl(from, hentai2.data.url, ``, 'Espero que curta o hentai e.e', id)
				} else if (selnum == 3) {
					const hentai3 = await axios.get(`http://api.i-tech.id/anim/hentai?key=${techapi}`)
					await kill.sendFileFromUrl(from, hentai3.data.result, ``, `Safadenho e.e, bueno, espero que te guste el que elegí para ti...`, id)
				} else if (selnum == 4) {
					const hentai4 = await axios.get('https://nekos.life/api/v2/img/hentai')
					await kill.sendFileFromUrl(from, hentai4.data.url, ``, 'Hentaizinho bom...', id)
				} else if (selnum == 5) {
					const hentai5 = await axios.get('https://nekos.life/api/v2/img/pussy')
					await kill.sendFileFromUrl(from, hentai5.data.url, ``, 'Hentaizinho bom...', id)
				} else if (selnum == 6) {
					const hentai6 = await randomNimek('hentai')
					await kill.sendFileFromUrl(from, hentai6, ``, 'Ui ui, hentai essa hora?', id)
				} else if (selnum == 7) {
					const clas = await axios.get('https://nekos.life/api/v2/img/classic')
					await kill.sendFileFromUrl(from, clas.data.url, ``, '', id)
				}
			}
            break


        case 'yuri':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (double == 1) {
            const yuri = await axios.get(`https://api.i-tech.id/anim/yuri?key=${techapi}`)
			console.log(yuri.data)
            await kill.sendFileFromUrl(from, yuri.data.result, ``, ``, id)
            } else if (double == 2) {
            const yuri1 = await randomNimek('yuri')
			console.log(yuri1)
            await kill.sendFileFromUrl(from, yuri1, ``, ``, id)
			}
            break 


        case 'randomneko':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
				if (octo == 1) {
					const nekoh = await axios.get(`https://api.i-tech.id/anim/nsfwneko?key=${techapi}`)
					await kill.sendFileFromUrl(from, nekoh.data.result, ``, ``, id)
				} else if (octo == 2) {
					const nsfwneko = await randomNimek('nsfw')
					await kill.sendFileFromUrl(from, nsfwneko, ``, '', id)
				} else if (octo == 3) {
					const hololwk = await axios.get('https://nekos.life/api/v2/img/hololewd')
					await kill.sendFileFromUrl(from, hololwk.data.url, ``, 'Neko gostosa...', id)
				} else if (octo == 4) {
					const lwkd = await axios.get('https://nekos.life/api/v2/img/lewdk')
					await kill.sendFileFromUrl(from, lwkd.data.url, ``, '', id)
				} else if (octo == 5) {
					const lwkdk = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
					await kill.sendFileFromUrl(from, lwkdk.data.url, ``, '', id)
				} else if (octo == 6) {
					const eron = await axios.get('https://nekos.life/api/v2/img/eron')
					await kill.sendFileFromUrl(from, eron.data.url, ``, '', id)
				} else if (octo == 7) {
					const holoero = await axios.get('https://nekos.life/api/v2/img/holoero')
					await kill.sendFileFromUrl(from, holoero.data.url, ``, '', id)
				} else if (octo == 8) {
					const nekons = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
					await kill.sendFileFromUrl(from, nekons.data.url, ``, '', id)
				}
            } else {
				if (octo == 1) {
					const nekoh = await axios.get(`https://api.i-tech.id/anim/nsfwneko?key=${techapi}`)
					await kill.sendFileFromUrl(from, nekoh.data.result, ``, ``, id)
				} else if (octo == 2) {
					const nsfwneko = await randomNimek('nsfw')
					await kill.sendFileFromUrl(from, nsfwneko, ``, '', id)
				} else if (octo == 3) {
					const hololwk = await axios.get('https://nekos.life/api/v2/img/hololewd')
					await kill.sendFileFromUrl(from, hololwk.data.url, ``, 'Neko gostosa...', id)
				} else if (octo == 4) {
					const lwkd = await axios.get('https://nekos.life/api/v2/img/lewdk')
					await kill.sendFileFromUrl(from, lwkd.data.url, ``, '', id)
				} else if (octo == 5) {
					const lwkdk = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
					await kill.sendFileFromUrl(from, lwkdk.data.url, ``, '', id)
				} else if (octo == 6) {
					const eron = await axios.get('https://nekos.life/api/v2/img/eron')
					await kill.sendFileFromUrl(from, eron.data.url, ``, '', id)
				} else if (octo == 7) {
					const holoero = await axios.get('https://nekos.life/api/v2/img/holoero')
					await kill.sendFileFromUrl(from, holoero.data.url, ``, '', id)
				} else if (octo == 8) {
					const nekons = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
					await kill.sendFileFromUrl(from, nekons.data.url, ``, '', id)
				}
			}
            break


        case 'trap':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (isGroupMsg) {
                if (!isNsfw) return kill.reply(from, mess.error.Ac, id)
            if (double == 1) {
				const trap1 = await axios.get(`https://api.i-tech.id/anim/trap?key=${techapi}`)
				await kill.sendFileFromUrl(from, trap1.data.result, ``, ``, id)
            } else if (double == 2) {
				const trap = await randomNimek('trap')
				kill.sendFileFromUrl(from, trap, ``, '', id)
            } else if (double == 2) {
				const tapr = await axios.get('https://nekos.life/api/v2/img/trap')
				await kill.sendFileFromUrl(from, tapr.data.url, '', '', id)
			}
            } else {
				const trap1 = await axios.get(`https://api.i-tech.id/anim/trap?key=${techapi}`)
				console.log(trap1.data)
				await kill.sendFileFromUrl(from, trap1.data.result, ``, ``, id)
            }
            break


        case 'randomwall' :
			if (mute) return console.log('Ignorando comando [Silence]')
            const walnime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
            await kill.sendFileFromUrl(from, walnime.data.url, '', '', id)
            break
			
			
        case 'dog': 
			if (mute) return console.log('Ignorando comando [Silence]')
		    if (double == 1) {
				const list = await axios.get('http://shibe.online/api/shibes')
				const doguin = list.data[0]
				await kill.sendFileFromUrl(from, doguin, '', 'doguinho', id)
			} else if (double == 2) {
				const doug = await axios.get('https://nekos.life/api/v2/img/woof')
				await kill.sendFileFromUrl(from, doug.data.url, '', 'doguinho', id)
			}
            break
			
			
        case 'look' :
			if (mute) return console.log('Ignorando comando [Silence]')
            const smug = await axios.get('https://nekos.life/api/v2/img/smug')
            await kill.sendFileFromUrl(from, smug.data.url, '', '', id)
            break
			
			
        case 'holo' :
			if (mute) return console.log('Ignorando comando [Silence]')
            const holo = await axios.get('https://nekos.life/api/v2/img/holo')
            await kill.sendFileFromUrl(from, holo.data.url, '', '', id)
            break


		case 'rolette':
			if (mute) return console.log('Ignorando comando [Silence]')
            if (double == 1) {
            await kill.reply(from, 'Bang, ella disparó y tú moriste, se acabó el juego.', id)
            } else if (double == 2) {
            await kill.reply(from, 'Te quedas vivo, pasa el turno.', id)
			}
			break
			
			
		case 'kisu':
			if (mute) return console.log('Ignorando comando [Silence]')
			const kisu = await axios.get('https://nekos.life/api/v2/img/kiss')
			await kill.sendFileFromUrl(from, kisu.data.url, '', '', id)
			break
			
			
		case 'tapa':
			if (mute) return console.log('Ignorando comando [Silence]')
			const tapi = await axios.get('https://nekos.life/api/v2/img/slap')
			await kill.sendFileFromUrl(from, tapi.data.url, '', '', id)
			break


        case 'gato':
        case 'cat':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (double == 1) {
				q2 = Math.floor(Math.random() * 900) + 300;
				q3 = Math.floor(Math.random() * 900) + 300;
				kill.sendFileFromUrl(from, 'https://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
			} else if (double == 2) {
				const catu = await axios.get('https://nekos.life/api/v2/img/meow')
				await kill.sendFileFromUrl(from, catu.data.url, id)
			}
            break


        case 'pokemon':
			if (mute) return console.log('Ignorando comando [Silence]')
            q7 = Math.floor(Math.random() * 890) + 1;
            await kill.sendFileFromUrl(from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + q7 + '.png', 'Pokemon.png', '', id)
            break		


        case 'screenshot':
			if (mute) return console.log('Ignorando comando [Silence]')
            const _query = body.slice(12)
            if (!_query.match(isUrl)) return kill.reply(from, mess.error.Iv, id)
            if (args.length == 0) return kill.reply(from, 'Huelo ortografía incorrecta:v!', id)
            await ss(_query)
            await sleep(4000)
			await kill.sendFile(from, './lib/media/img/screenshot.jpeg', 'ss.jpeg', 'Asegúrate de evitar usar esto con pornografía..', id)
            .catch(() => kill.reply(from, `Error de captura de pantalla del sitio ${_query}`, id))
            break
			
			
		case 'ship':
			if (mute) return console.log('Ignorando comando [Silence]')
            lvak = body.trim().split(' ')
			if (args.length == 2) {
				await kill.sendTextWithMentions(from, '❤️ ' + lvak[1] + ' tiene la oportunidad del ' + lvpc + '% de estar con ' + lvak[2] + '. 👩‍❤️‍👨❣️\n*CASAMIENTO...*\n---------------------------------\n\n*mmmm, suerte😎*\n---------------------------------')
            } else {
				await kill.reply(from, 'Falta la pareja de tortolitos!', id)
            }
			break	
			

        case 'gay':
            gaak = body.trim().split(' ')
    	    var lgbt = ["lésbica", "gay", "bissexual", "transgenero", "queer", "intersexual", "pedro-sexual", "negrosexual", "helicoptero sexual", "ageneros", "androgino", "assexual", "macaco-sexual", "dedo-sexual", "Sexo-Inexplicavel", "predio-sexual", "sexual-não-sexual", "pansexual", "kink", "incestuoso", "comedor-de-casadas", "unicornio-sexual", "maniaco-sexual"]
    	    var guei = lgbt[Math.floor(Math.random() * lgbt.length)]
			if (args.length == 1) {
				await kill.sendTextWithMentions(from, gaak[1] + ' é ' + lvpc + '% ' + guei + '.')
            } else {
				await kill.reply(from, `Você é ` + lvpc + '% ' + guei + '.', id)
            }
			break
			

		case 'chance':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (args.length == 0) return kill.reply(from, 'Defina algo para analisar.', id)
			await kill.reply(from, `_De acuerdo con mis cálculos súper avanzados de ~dios~ robot "cuie" la oportunidad de..._ \n\n*"${body.slice(8)}"*\n\n_...ser realidad es_ *${lvpc}%.*`, id)
			break


        case 'kiss':
			if (mute) return console.log('Ignorando comando [Silence]')
            arqa = body.trim().split(' ')
			if (args.length == 1) {
				const persona = author.replace('@c.us', '')
				kill.sendTextWithMentions(from, 'OMG😱! @' + persona + ' se beso con ' + arqa[1] + ' !')
				if (double == 1) {
				await kill.sendGiphyAsSticker(from, 'https://media.giphy.com/media/KIHVryx36BAkeb1lHw/giphy.gif')
				} else {
				await kill.sendGiphyAsSticker(from, 'https://media.giphy.com/media/JRJZf6WQZhuGHWmwhn/giphy.gif')
				}
			} else {
				await kill.reply(from, 'Marque ~solo una~ la persona a la que quiere besar hihihi', id)
            }
			break


        case 'slap':
			if (mute) return console.log('Ignorando comando [Silence]')
            arq = body.trim().split(' ')
            const person = author.replace('@c.us', '')
            await kill.sendGiphyAsSticker(from, 'https://media.giphy.com/media/hjcEjN4vfTv9aMHwWY/giphy.gif')
            kill.sendTextWithMentions(from, '@' + person + ' *abofeteado* ' + arq[1])
            break


        case 'getmeme':
			if (mute) return console.log('Ignorando comando [Silence]')
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/memesmexico');
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            break
			
		

        case 'menu':
        case '?':
			if (mute) return console.log('Ignorando comando [Silence]')
			const timed = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
			const allin = `Hola usuario "@${sender.id}"!\n\nMe lleve ${processTime(t, moment())} segundos para responder.\n\nAhora son exactamente "${timed}".\nAqui abajito estan todas mis funciones.\n`
            kill.sendTextWithMentions(from, allin + help, id)
            kill.reply(from, '💢De otros comandos tenemos...\n\n*/Admins* _❌es para administradores._\n\n*/Kill* _🖤🖤es solo para mi dueño._\n\n*/Adult* _🍆🍆es el menú de comandos para adultos😈._\n\n*/Down* _⚠es el menú de descarga de música y video._\n\n*/termux* _🚧Comandos para termux🚧_', id)
            break


        case 'admins':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
            await kill.sendText(from, admins, id)
            break


        case 'adult':
			if (mute) return console.log('Ignorando comando [Silence]')
            kill.sendText(from, adult, id)
            break
			

        case 'kill':
            if (mute) return console.log('Ignorando comando [Silence]')
            kill.sendText(from, owner, id)
            break


        case 'down':
			if (mute) return console.log('Ignorando comando [Silence]')
            kill.sendText(from, down, id)
            break


        case 'readme':
			if (mute) return console.log('Ignorando comando [Silence]')
            kill.reply(from, readme, id)
            break

		
		case 'bomb':
			if (mute) return console.log('Ignorando comando [Silence]')
		    const bleg = JSON.parse(fs.readFileSync('./lib/exclusive.json'))
			const biao = bleg.includes(chat.id)
			if (biao) {
				const alvo = `@${body.slice(6)}`
				await kill.sendTextWithMentions(from, '¡Belleza! Solicitud recibida e iniciada, el objetivo \"' + alvo + '\" será atacado en unos segundos!', id)
				if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
				const atk = execFile('./lib/bomb.exe', [`${body.slice(6)}`, '3', '1', '0'], function(err, data) {
				if(err) {
				console.log('El programa se ha cerrado, esto indica un error o cierre manual.')
				kill.reply(from, 'El ataque se canceló manualmente o tuvo errores de ejecución.', id)
				}
				})
			} else {
				console.log('erro')   
				kill.reply(from, 'El ataque no está permitido aquí!', id)
			}
			break
			
			
	case 'converter':
		case 'conv':
			if (mute) return console.log('Ignorando comando [Silence]')
			if (args == 0) return kill.reply(from, 'Ingrese el modo de conversión y luego la temperatura, para más detalles ingrese */conv -h*.', id)
			if (args[0] == '-help' || args[0] == '-h') return kill.reply(from, convh, id)
			try {
				if (args[0] == '-f') {
					let regmh = args[1].match(/^[0-9]+$/)
					if (!regmh) return kill.reply(from, 'Ingrese números solo después del acrónimo!', id)
					const cels = args[1] / 5 * 9 + 32
					await kill.reply(from, `*${args[1]}* grados C° - Celsius equivale a ${cels} grados F° - Fahrenheit.`, id)
				} else if (args[0] == '-c') {
					let regmh = args[1].match(/^[0-9]+$/)
					if (!regmh) return kill.reply(from, 'Ingrese números solo después del acrónimo!', id)
					const fahf = 5 * (args[1] - 32) / 9
					await kill.reply(from, `*${args[1]}* _grados F° - Fahrenheit equivale a_ *${fahf}* _grados C° - Celsius._`, id)
				} else if (args[0] == '-m') {
					let regmh = args[1].match(/^[0-9]+$/)
					if (!regmh) return kill.reply(from, 'Ingrese números solo después del acrónimo!', id)
					const ktom = args[1] * 0.62137
					await kill.reply(from, `*${args[1]}* _Kilometros equivalen a_ *${ktom}* _Millas._`, id)
				} else if (args[0] == '-q') {
					let regmh = args[1].match(/^[0-9]+$/)
					if (!regmh) return kill.reply(from, 'Ingrese números solo después del acrónimo!', id)
					const mtok = args[1] / 0.62137
					await kill.reply(from, `*${args[1]}* _Millas equivalen a_ *${mtok}* _Kilometros._`, id)
				} else {
					await kill.reply(from, convh, id)
				}
			} catch (error) {
				await kill.reply(from, convh + '\n\nAsegúrese de poner el valor de conversión.', id)
			}
			break

			
        case 'mute':
        case 'silence':
			if (isGroupMsg && isGroupAdmins) {
				if (args.length !== 1) return kill.reply(from, 'Olvidaste poner [on], o [off].', id)
				if (args[0] == 'on') {
					slce.push(chat.id)
					fs.writeFileSync('./lib/silence.json', JSON.stringify(slce))
					kill.reply(from, 'Este grupo ya no podrá usar los comandos.', id)
				} else if (args[0] == 'off') {
					let ince = slce.indexOf(chatId)
					slce.splice(ince, 1)
					fs.writeFileSync('./lib/silence.json', JSON.stringify(slce))
					kill.reply(from, 'Este grupo puede usar los comandos nuevamente.', id)
				}
			} else if (isGroupMsg && isOwner) {
				if (args.length !== 1) return kill.reply(from, 'Olvidaste poner [on], o [off].', id)
				if (args[0] == 'on') {
					slce.push(chat.id)
					fs.writeFileSync('./lib/silence.json', JSON.stringify(slce))
					kill.reply(from, 'Este grupo ya no podrá usar los comandos.', id)
				} else if (args[0] == 'off') {
					let ince = slce.indexOf(chatId)
					slce.splice(ince, 1)
					fs.writeFileSync('./lib/silence.json', JSON.stringify(slce))
					kill.reply(from, 'Este grupo puede usar los comandos nuevamente.', id)
				}
            } else {
                kill.reply(from, mess.error.Ga, id)
            }
            break
			
	case 'coins':
			await kill.reply(from, coins, id)
			break
			
			
		case 'mac':
			if (args.length == 0) return kill.reply(from, 'Lo siento, pero debe especificar qué MAC desea extraer.', id)
			await kill.reply(from, 'Espera, esta operación tarda unos 6 segundos debido a la limitación de tiempo..', id)
			await sleep(3000)
			const maclk = await axios.get(`https://api.macvendors.com/${body.slice(5)}`)
			console.log(`{body.slice(5)}`)
			const macre = maclk.data
			await kill.reply(from, `O telefone é da ${macre}.`, id)
			break
		

        }
    } catch (err) {
        console.log(color('[ERRO]', 'red'), err)
		kill.forceRefocus()
    }
}
