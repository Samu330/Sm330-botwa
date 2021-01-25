/*
* Recodado por Lucas R. e construido em homenagem ao Legião Z.
* Evite remover coisas como o Link do legião, obrigado!
*/
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const sharp = require('sharp')
const math = require('mathjs')
const search = require("simple-play-store-search")
const google = require('google-it')
const isPorn = require('is-porn')
const imgsearch = require('node-reverse-image-search')
const imgbbUploader = require('imgbb-uploader')
const moment = require('moment-timezone')
moment.tz.setDefault('America/Sao_Paulo').locale('pt_BR')
const get = require('got')
const request = require('request')
const color = require('./lib/color')
const { spawn, exec, execFile } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const { randomNimek, sleep, wall, tulis, ss } = require('./lib/functions')
const { owner, donate, down, help, admins, adult, readme, lang } = require('./lib/help')
const { stdout } = require('process')
const bent = require('bent')
const { doing } = require('./lib/translate.js')
const { meme, msgFilter, translate, kill } = require('./lib')
const { uploadImages } = require('./lib/fether')
const feature = require('./lib/poll')
const { sobre } = require('./lib/sobre')
const { belle } = require('./lib/belle')
const { termux } = require('./lib/termux')
const BrainlySearch = require('./lib/brainly')
const { removeBackgroundFromImageBase64 } = require('remove.bg')
const fetch = require('node-fetch');
const nsfw_ = JSON.parse(fs.readFileSync('./lib/NSFW.json'))
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
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
		const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const ownerNumber = '+529984907794' // MUDE ISSO PARA O SEU NUMERO
        const isOwner = sender.id === ownerNumber
        global.pollfile = 'poll_Config_'+chat.id+'.json'
        global.voterslistfile = 'poll_voters_Config_'+chat.id+'.json'
		global.client = kill
        const isBlocked = blockNumber.includes(sender.id)
		const isLeg = exsv.includes(chatId)
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

			

		case 'ttp':
			if (args.length == 0) return kill.reply(from, '¿Dónde está la frase?', id)
			axios.get(`https://st4rz.herokuapp.com/api/ttp?kata=${body.slice(5)}`)
			.then(res => {
				kill.sendImageAsSticker(from, res.data.result)
			})
			break
			
			
		case 'anonymod':
    await kill.reply(from, 'Algunos videos del canal de mi bro DEIVID\n\nWhatsApp ANONYMOUS V.06 oFc 100% inmune\n\nhttps://youtu.be/tOE_ywldS_Q\n\nComo modificar un WA prt-1\n\nhttps://youtu.be/WdWsvY3xGPc\n\nWhAtsApp BusSines Golden/13\n\nhttps://youtu.be/JqSHAWlGhDY\n\nNumero virtual +48 método efectivo\n\nhttps://youtu.be/7GOss7AaJ88\n\nNumero virtual +1 EE.Uu (ANONYMOUS DEIVID)\n\nhttps://youtu.be/D1G6hI1mLs4\n\nCreando con pixelLab (ANONYMOUS DEIVID)\n\nhttps://youtu.be/so1y1g-MPZ4\n\nSu video mas reciente:\n\nhttps://youtu.be/hy4od9BT-tA\n\nEspero y lo apoyes🤗', id)
    break
	
	    case 'samu330':
    await kill.reply(from, '｡☆✼★━━━━━━━━━━━━★✼☆｡\n\nHola!😀\n\nTe gustaria apoyarme?\n\nSolo unete a mi grupo de WhatsApp: https://chat.whatsapp.com/ELeHAmX3P6j1xy1qNRjEXR\n\n* ◄ ◊ ► ◄ ◊ ► ◄ ◊ ► ◄ ◊ ► ◄ ◊ ►*\n\nO puedes suscribirte a mi canal para saber como instalar un Bot: https://www.youtube.com/channel/UCqPXxG2ZdDe_ugOqMHDRMqg\n\n✩｡:*•.─────  ❁ ❁  ─────.•*:｡✩\n\nO seamos amigos en facebook: https://facebook.com/tupapi.samu330', id)
    break	
			
		case 'about':
			await kill.sendFile(from, './lib/media/img/iris.png', 'iris.png', sobre, id)
			break
			
		case 'belle':
			await kill.sendFile(from, './lib/media/img/belle.png', 'belle.png', belle, id)
			break

		case 'termux':
			await kill.sendFile(from, './lib/media/img/termux.png', 'termux.png', termux, id)
			break
			
			case 'blacklist':
            if (isGroupMsg && isGroupAdmins) {
				if (args.length !== 1) return kill.reply(from, 'Defina entre on y off!', id)
				if (args[0] == 'on') {
					bklist.push(chatId)
					fs.writeFileSync('./lib/blacklist.json', JSON.stringify(bklist))
					kill.reply(from, 'Anti números activado.\nUse */bklist* (Número) para adicionar números.', id)
				} else if (args[0] == 'off') {
					let exclu = bklist.indexOf(chatId)
					bklist.splice(exclu, 1)
					fs.writeFileSync('./lib/blacklist.json', JSON.stringify(bklist))
					kill.reply(from, 'Anti números offline.', id)
				}
			} else if (isGroupMsg && isGroupAdmins) {
				if (args.length !== 1) return kill.reply(from, 'Defina entre on y off!', id)
				if (args[0] == 'on') {
					bklist.push(chatId)
					fs.writeFileSync('./lib/blacklist.json', JSON.stringify(bklist))
					kill.reply(from, 'Anti números activado.\nUse */bklist* (Número) para adicionar números.', id)
				} else if (args[0] == 'off') {
					let exclu = bklist.indexOf(chatId)
					bklist.splice(exclu, 1)
					fs.writeFileSync('./lib/blacklist.json', JSON.stringify(bklist))
					kill.reply(from, 'Anti números offline.', id)
				}
            } else {
                kill.reply(from, mess.error.Ga, id)
            }
            break
			
	case 'bklist':
            if (isGroupMsg && isGroupAdmins) {
				if (args.length == 0) return kill.reply(from, 'Defina un número.', id)
				const bkls = body.slice(8) + '@c.us'
				atbk.push(bkls)
				fs.writeFileSync('./lib/anti.json', JSON.stringify(atbk))
				await client.reply(from, 'Número adicionado a black-list', id)
			} else if (isGroupMsg && isOwner) {
				if (args.length == 0) return kill.reply(from, 'Defina un número.', id)
				const bkls = body.slice(8) + '@c.us'
				atbk.push(bkls)
				fs.writeFileSync('./lib/anti.json', JSON.stringify(atbk))
				await client.reply(from, 'Número adicionado a black-list', id)
            } else {
                kill.reply(from, mess.error.Ga, id)
            }
            break
			
        case 'stickernobg':
		 if (isMedia) {
                try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './lib/media/img/noBg.png'
                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'https://www.remove.bg/upload', size: 'auto', type: 'auto', outFile }) // bota sua propria api ai, cuidado no limite mensal
                    await fs.writeFile(outFile, result.base64img)
                    await kill.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
					await kill.reply(from, 'Trate de no usar esto cuando no lo nececite,', id)
                } catch(err) {
                    console.log(err)
		    await kill.reply(from, 'Ups! Algo esta mal en este comando!', id)
                }
            }
            break

        case 'stickergif':
        case 'stikergif':
        case 'gif':
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
            if (args.length == 0) return kill.reply(from, 'Ponga un nombre, solo uno, sin apellido ni nombres completos, especialmente por su seguridad!', id)
			const predea = await axios.get(`https://api.agify.io/?name=${args[0]}`)
			await kill.reply(from, `Personas con este nombre "${predea.data.name}" tienden a morir en ${predea.data.age} años de edad.`, id)
			break			
			
			
	    case 'oculto':
            if (!isGroupMsg) return kill.reply(from, 'Solo grupos!', id)
            const eur = await kill.getGroupMembers(groupId)
            const surpresa = eur[Math.floor(Math.random() * eur.length)]
			console.log(surpresa.id)
    	    var xvid = ["Negoes branquelos e feministas", `${pushname} afeitarse en la bañera`, `${pushname} comiendo mi culo`, `${pushname} quieres comerme que hacer?`, "lolis nuas e safadas", "Ursinhos Mansos Peludos e excitados", "mae do adm cozida na pressao", "Buceta de 500 cm inflavel da boneca chinesa lolita company", "corno manso batendo uma pra mim com meu rosto na webcam", "tigresa vip da buceta de mel", "belle delphine dando o cuzinho no barzinho da esquina", "fazendo anal no negao", "africanos nus e chupando pau", "anal africano", "comendo a minha tia", "lgbts fazendo ahegao", "adm gostoso tirando a roupa", "gays puxando o intestino pra fora", "Gore de porno de cachorro", "anoes baixinhos do pau grandao", "Anões Gays Dotados Peludos", "anões gays dotados penetradores de botas", "Ursinhos Mansos Peludos", "Jailson Mendes", "Vendo meu Amigo Comer a Esposa", "Golden Shower"]
            const surpresa2 = xvid[Math.floor(Math.random() * xvid.length)]
            await kill.sendTextWithMentions(from, `*EQUIPO ❌VIDEOS*\n\n_Querido usuario @${surpresa.id.replace(/@c.us/g, '')} ..._\n\n_Soy de la administración de Xvideos y notamos que no ha iniciado sesión en su cuenta durante más de 2 semanas y decidimos verificar si todo está bien con nuestro usuario más activo.._ \n\n_Desde la última vez que visitó nuestro sitio, ha buscado cientos de veces_ *"${surpresa2}"* _(creemos que es tu favorito), venimos a decir que se agregaron y estamos seguros que te gustará mucho._ \n_Te esperamos allí!_\n\n_Para nuestro usuario favorito, con cariño, Equipo Xvideos._`)
            await sleep(2000)
            break
			
			
		case 'gender':
		case 'genero':
            if (args.length == 0) return kill.reply(from, 'Ponga un nombre, solo uno, sin apellido ni nombres completos, especialmente por su seguridad!', id)
			const seanl = await axios.get(`https://api.genderize.io/?name=${args[0]}`)
			const gender = seanl.data.gender.replace('Femenino', 'Mujeres').replace('Mazculino', 'hombres')
			await kill.reply(from, `O nombre "${seanl.data.name}" mas usado por ${gender}.`, id)
			break
			
			
        case 'detector' :
            if (!isGroupMsg) return kill.reply(from, 'Solo grupos grupos!', id)
			await kill.reply(from, 'Calculando foto de los participantes del grupo...', id)
            await sleep(3000)
            const eu = await kill.getGroupMembers(groupId)
            const gostosa = eu[Math.floor(Math.random() * eu.length)]
			console.log(gostosa.id)
            await kill.sendTextWithMentions(from, `*ＤＥＴＥＣＴＯＲ   ＤＥ  GROCERIAS👩‍⚕️*\n\n*pi pi pi pi*  \n*pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipi*\n\n@${gostosa.id.replace(/@c.us/g, '')} *ALTO HAÍ🖐*\n\n*A SIDO MULTADO!!*\n\n*1 por no decir buenos días, buenas tardes, buenas noches y otro por ser muy*\n\n*grocero(o)*\n\n*valor de la multa:*\n*FOTO DESNUD@ AL PRIV kkkkk*`)
            await sleep(2000)
            break			

			
			
		case 'math':
            if (args.length == 0) return kill.reply(from, 'No especificaste una cuenta de matemáticas.', id)
            const mtk = body.slice(6)
            if (typeof math.evaluate(mtk) !== "number") {
            kill.reply(from, `¿Incluso abriste una cuenta? No parece eh!.`, id)
			} else {
				kill.reply(from, `_La ecuacion:_\n\n*${mtk}*\n\n_Su resultado es:_\n\n*${math.evaluate(mtk)}*`, id)
			}
			break
			
			
		case 'inverter':
            if (args.length == 0) return kill.reply(from, 'No especificó una frase para invertir.', id)
			const inver = body.slice(10).split('').reverse().join('')
			await kill.reply(from, inver, id)
			break
			
			
		case 'contar':
            if (args.length == 0) return kill.reply(from, 'Esto tiene 0 letras, después de todo, no hay texto.', id)
			const count = body.slice(8).length
			await kill.reply(from, `El texto tiene ${count} letras.`, id)
			break
			
			
        case 'giphy':
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
			
			
        case 'slogan':
            if (args.length == 0) return kill.reply(from, 'Donde esta la frase?', id)
            const slog = await axios.get(`http://api.haipbis.xyz/randomcooltext?text=${body.slice(8)}`)
			await kill.sendFileFromUrl(from, slog.data.image, slog.data.text, 'Elegante no es?', id)
            break
			
			
		case 'setimage':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
			if (isMedia && type == 'imagen' || isQuotedImage) {
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
				kill.reply(from, `Creo que lo estás usando mal!`)
			}
			break			

			
		case 'img':
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                kill.reply(from, `Podrias esperar porfavor? esto lleva un poco de tiempo👑`, id)
                const stickerImage = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await kill.sendFile(from, stickerImage, '', 'Disfruta, aquí tienes tu foto! :D', id)
			} else if (!quotedMsg) return kill.reply(from, `Lo siento, esto es solo para stickers...`, id)
			break	


        case 'randomanime':
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
            translate(quota, 'pt')
                .then((quoted) => kill.reply(from, `➸ *Frase* : ${quoted}\n➸ *Personaje* : ${quote1.data.character}\n➸ *Anime* : ${quote1.data.anime}`, id))
            } else if (quote == 2) {
            const skya = await get.get('http://mhankbarbars.herokuapp.com/api/quotesnime/random').json() 
            skya_ = skya.data
			const quot = skya.data.quote
			kill.reply(from, mess.wait, id)
			await sleep(5000)
            translate(quot, 'pt')
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
			translate(chara, 'pt')
                .then((reschar) => kill.sendFileFromUrl(from, `${char.data.foto}`, ``, `Nome: ${char.data.nama}\n\nDescrição: ${reschar}\n\nFonte: ${char.data.sumber}`, id))
            break


        case 'image':
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
            translate(acon, 'pt')
                .then((lfts) => kill.reply(from, lfts, id))
			break


        case 'name':
            if (args.length == 0) return kill.reply(from, 'Falto un nombre!', id)
            const names = await axios.get(`https://api.i-tech.id/tools/arti?key=${techapi}&nama=${body.slice(6)}`)
			var sign = names.data.arti
			kill.reply(from, mess.wait, id)
			await sleep(5000)
            translate(sign, 'pt')
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
            translate(wikit, 'pt')
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
			
			
        case 'insta':
            if (args.length == 0) return kill.reply(from, 'El nombre de usuario?', id)
            const ig = await axios.get(`https://docs-jojo.herokuapp.com/api/stalk?username=${body.slice(7)}`)
			var insta = ig.data.Biodata
            await kill.sendFileFromUrl(from, `${ig.data.Profile_pic}`, ``, `Username: ${ig.data.Username}\n\nNombre: ${ig.data.Name}\n\nbio: ${insta}\n\nSeguidores: ${ig.data.Jumlah_Followers}\n\nSigiendo: ${ig.data.Jumlah_Following}\n\npublicaciones: ${ig.data.Jumlah_Post}`, id)
            break


       case 'ig':
            if (args.length == 0) return kill.reply(from, 'El enlace no es valido?', id)
            const iga = await axios.get(`http://api.i-tech.id/dl/igdl?key=${techapi}&link=${body.slice(11)}`)
			await kill.sendFileFromUrl(from, iga.data.result, ``, 'Es un gran video jaja!\n~Pero que diablos fue eso...~', id)
			.catch(() => {
						kill.reply(from, '¡Esa no! Impidieron mi acceso!\nQue *utos!', id)
					})
            break
			
		case 'fb':
			if (args.length == 0) return kill.reply(from, 'Olvidaste insertar un enlace de facebook?', id)
            const fb = await axios.get(`http://arugaz.herokuapp.com/api/fb?url=${body.slice(4)}`)
			const fbdw = fb.data.result.sd
            await kill.sendFileFromUrl(from, fbdw, 'video.mp4', 'Excelente video!\n~Pero que diablos paso?...~', id)
			.catch(() => {
						kill.reply(from, 'Dios mío, algún tipo de fuerza maligna me impidió terminar el comando!', id)
					})
            break

			
			case 'twit':
           if (args.length == 0) return kill.reply(from, 'Lo uso incorretamente.', id)
            axios.get(`http://arugaz.my.id/api/media/twvid?url=${body.slice(5)}`)
            .then(async(rest) => {
					var mp4 = rest.data.result
					var tmp4 = rest.data.title
					var m4tu = rest.data.thumb
					var m4fo = rest.data.ext
					await kill.sendFileFromUrl(from, m4tu, '', `Titulo: ${tmp4}\nFormato:${m4fo}\n\nEspero averlo echo bien, ahora espere a que el video se envie, NO LO UTILIZE OTRA VEZ!!`, id)
					await kill.sendFileFromUrl(from, mp4, `video.mp4`, tmp4, id)
                })
			break

         case 'mp3': // eu censurei o acesso pois as apis estão offlines, e fazer isso evita que usem o comando e te de problemas
             if (args.length == 0) return kill.reply(from, 'Lo uso incorrectamente.', id)
            axios.get(`http://st4rz.herokuapp.com/api/yta2?url=${body.slice(5)}`)
            .then(async(rest) => {
					var m3pa = rest.data.result
					var m3ti = rest.data.title
					var m3tu = rest.data.thumb
					var m3fo = rest.data.ext
					await kill.sendFileFromUrl(from, m3tu, '', `Titulo: ${m3ti}\nFormato:${m3fo}\n\nEspero averlo echo bien, ahora espere a que el video se envie, NO LO UTILIZE OTRA VEZ!!`, id)
					await kill.sendFileFromUrl(from, m3pa, '', '', id)
                })
			break


        case 'mp4':
           if (args.length == 0) return kill.reply(from, 'Lo uso incorretamente.', id)
            axios.get(`http://st4rz.herokuapp.com/api/ytv2?url=${body.slice(5)}`)
            .then(async(rest) => {
					var mp4 = rest.data.result
					var tmp4 = rest.data.title
					var m4tu = rest.data.thumb
					var m4fo = rest.data.ext
					await kill.sendFileFromUrl(from, m4tu, '', `Titulo: ${tmp4}\nFormato:${m4fo}\n\nEspero averlo echo bien, ahora espere a que el video se envie, NO LO UTILIZE OTRA VEZ!!`, id)
					await kill.sendFileFromUrl(from, mp4, `video.mp4`, tmp4, id)
                })
			break
			
        case 'video':
            if (args.length == 0) return kill.reply(from, 'Lo usaste incorrectamente.', id)
            axios.get(`http://arugaytdl.herokuapp.com/search?q=${body.slice(7)}`)
            .then(async (res) => {
                if (res.data[0].uploadDate.endsWith('years ago')) {
                    var videore = res.data[0].uploadDate.replace('years ago', 'Años atrás')
				} else if (res.data[0].uploadDate.endsWith('hours ago')) {
                    var videore = res.data[0].uploadDate.replace('hours ago', 'Horas atrás')
				} else if (res.data[0].uploadDate.endsWith('minutes ago')) {
                    var videore = res.data[0].uploadDate.replace('minutes ago', 'Minutos atrás')
				} else if (res.data[0].uploadDate.endsWith('day ago')) {
                    var videore = res.data[0].uploadDate.replace('day ago', 'Dia atrás')
				} else if (res.data[0].uploadDate.endsWith('months ago')) {
                    var videore = res.data[0].uploadDate.replace('months ago', 'Meses atrás')
				} else if (res.data[0].uploadDate.endsWith('seconds ago')) {
                    var videore = res.data[0].uploadDate.replace('seconds ago', 'Segundos atrás')
				} else if (res.data[0].uploadDate.endsWith('undefined')) {
                    var videore = res.data[0].uploadDate.replace('undefined', 'Indefinido')
				} else if (res.data[0].uploadDate.endsWith('null')) {
                    var videore = res.data[0].uploadDate.replace('null', 'Indefinido')
				}
				const size = await axios.get(`http://st4rz.herokuapp.com/api/ytv?url=http://youtu.be/${res.data[0].id}`)
				const fsize = size.data.filesize.replace(' MB', '').replace('Download  ', 'Imposible calcular')
				console.log(fsize)
				const impo = size.data.filesize.replace('Download  ', 'un peso mucho mayor que no puedo calcular')
				if (fsize >= 16.0 || size.data.filesize.endsWith('Download  ') || size.data.filesize.endsWith('GB')) {
					kill.reply(from, `Lo sentimos, para evitar prohibiciones de WhatsApp, el límite de carga de videos es de 16 MB, y este tiene ${impo.replace('    ', ' ')}.`, id)
				} else {
				await kill.sendFileFromUrl(from, `${res.data[0].thumbnail}`, ``, `Titulo: ${res.data[0].title}\n\nDuracion: ${res.data[0].duration} segundos\n\nEstá hecho: ${videore}\n\nVisualizaciones: ${res.data[0].viewCount}\n\nPeso: ${size.data.filesize}\n\nEspero haberlo hecho bien y ... ¡ahora solo espera! Pero evita usarlo de nuevo hasta que termine eh!`, id)
					console.log(res.data[0].title)
					axios.get(`http://st4rz.herokuapp.com/api/ytv2?url=https://youtu.be/${res.data[0].id}`)
					.then(async(rest) => {
						var mp4 = rest.data.result
						var tmp4 = rest.data.title
						await kill.sendFileFromUrl(from, mp4, `video.mp4`, tmp4, id)
					})
				}
			})
            break
			

        case 'play':
            if (args.length == 0) return kill.reply(from, 'Lo usaste incorrectamentee.', id)
            axios.get(`http://arugaytdl.herokuapp.com/search?q=${body.slice(6)}`)
            .then(async (res) => {
                if (res.data[0].uploadDate.endsWith('years ago')) {
                    var playre = res.data[0].uploadDate.replace('years ago', 'Años atrás')
				} else if (res.data[0].uploadDate.endsWith('hours ago')) {
                    var playre = res.data[0].uploadDate.replace('hours ago', 'Horas atrás')
				} else if (res.data[0].uploadDate.endsWith('minutes ago')) {
                    var playre = res.data[0].uploadDate.replace('minutes ago', 'Minutos atrás')
				} else if (res.data[0].uploadDate.endsWith('day ago')) {
                    var playre = res.data[0].uploadDate.replace('day ago', 'Dia atrás')
				} else if (res.data[0].uploadDate.endsWith('months ago')) {
                    var playre = res.data[0].uploadDate.replace('months ago', 'Meses atrás')
				} else if (res.data[0].uploadDate.endsWith('seconds ago')) {
                    var playre = res.data[0].uploadDate.replace('seconds ago', 'Segundos atrás')
				} else if (res.data[0].uploadDate.endsWith('undefined')) {
                    var videore = res.data[0].uploadDate.replace('undefined', 'Indefinido')
				} else if (res.data[0].uploadDate.endsWith('null')) {
                    var videore = res.data[0].uploadDate.replace('null', 'Indefinido')
				}
				const asize = await axios.get(`http://st4rz.herokuapp.com/api/yta?url=http://youtu.be/${res.data[0].id}`)
				const afsize = asize.data.filesize.replace(' MB', '')
				console.log(afsize)
				if (afsize >= 16.0 || asize.data.filesize.endsWith('GB')) {
					kill.reply(from, `Lo sentimos, para evitar prohibiciones de WhatsApp, el límite de envío de audio es de 16 MB, y esto tiene ${asize.data.filesize}.`, id)
				} else {
					await kill.sendFileFromUrl(from, `${res.data[0].thumbnail}`, ``, `Titulo: ${res.data[0].title}\n\nDuracion: ${res.data[0].duration} segundos\n\nEsta echo: ${playre}\n\nVisualizaciones: ${res.data[0].viewCount}\n\nEspero haberlo hecho bien y ... ¡ahora solo espera! Pero evita usarlo de nuevo hasta que termine eh!`, id)
					console.log(res.data[0].title)
					axios.get(`http://st4rz.herokuapp.com/api/yta2?url=http://youtu.be/${res.data[0].id}`)
					.then(async(rest) => {
						var m3pa = rest.data.result
						var m3ti = rest.data.title
						await kill.sendFileFromUrl(from, m3pa, '', '', id)
					})
				}
			})
            break
			

		case 'qr':
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
             arg = body.trim().split(' ')
            if (arg.length != 2) return client.reply(from, 'Wrong Format!', id)
            if (!quotedMsg) return client.reply(from, 'Wrong Format!', id)
            const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
            translate(quoteText, arg[1])
                .then((result) => kill.sendText(from, result))
                .catch(() => kill.sendText(from, 'An error occured!'))
            break

        case 'tts':
            if (args.length == 0) return kill.reply(from, `Digo tus palabras via voz, usa /tts idioma texto, para ver los diomas con /lang`)
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
					console.log('Request falhou, usando respostas locais...')
					let rfua = fs.readFileSync('./lib/reply.txt').toString().split('\n')
					let repy = rfua[Math.floor(Math.random() * rfua.length)]
					let resfl = repy.replace('%name$', '${name}').replace('%battery%', '${lvpc}')
					console.log(resfl)
					sppt.save('./lib/media/tts/resPtm.mp3', resfl, function () {
					kill.sendPtt(from, './lib/media/tts/resPtm.mp3', id)
					})		
				} else {
					sppt.save('./lib/media/tts/resPtm.mp3', a, function () {
						client.sendPtt(from, './lib/media/tts/resPtm.mp3', id)
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
			

        case 'iris':
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


        case 'wallpaper':
            if (args.length == 0) return kill.reply(from, 'Necesitas decirme que quieres de fondo de pantalla!', id)
            const quere = body.slice(6)
            const wallp = await wall(quere)
            console.log(wallp)
            await kill.sendFileFromUrl(from, wallp, 'wallp.jpg', '', id)
            break


        case 'ping':
            kill.sendText(from, `Pong! xd\n_Mi velocidad de respuesta es de ${processTime(t, moment())} segundos._`)
            break


        case 'criador':
            kill.sendContact(from, 'wa.me/+529984907794')
			kill.reply(from, 'Si no responde, solo espera, es raro que deje Internet ~Smitten guy sabe~, pero si sucedió, fue algo importante..', id)
            break


        case 'donate':
		case 'doar':
            kill.sendText(from, donate, id)
            kill.sendContact(from, 'wa.me/+529984907794')
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
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (args.length !== 1) return kill.reply(from, 'Olvidaste ponerlo (ON) o quitarlo [off].', id)
			if (args[0] == 'on') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                kill.reply(from, '¡Hecho! Se han activado las funciones Bienvenida y Adiós.', id)
			} else if (args[0] == 'off') {
				let welcom = welcome.indexOf(chatId)
                welkom.splice(welcom, 1)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                kill.reply(from, 'Entendido! Desactive las opciones de Bienvenida y Adiós.', id)
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
            if (args.length == 0) return kill.reply(from, `Digite algo para buscar.`, id)
		    const googleQuery = body.slice(8)
            google({ 'query': googleQuery }).then(results => {
            let vars = `_*Resultados de búsqueda de Google para: ${googleQuery}*_\n`
            for (let i = 0; i < results.length; i++) {
                vars +=  `\n═════════════════\n*Titulo >* ${results[i].title}\n\n*Descripcion >* ${results[i].snippet}\n\n*Link >* ${results[i].link}`
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


        case 'anime':
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
            translate(synopsis, 'pt')
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
					await kill.sendFileFromUrl(from, pfp, 'pfp.jpg', `*Datos de perfil..* ✨️ \n\n 🔖️ *¿Cuál es tu etiqueta de usuario?? ${namae}*\n\n💌️ *Frase del recadorra?*\n${status}\n\n 👑️ *Eres un administrador? ${adm}*`)
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
			if (args.length == 0) return kill.reply(from, 'Especifique el nombre de la aplicación que desea buscar.', id)
			kill.reply(from, mess.wait, id)
			await sleep(5000)
			const stsp = await search(`${body.slice(7)}`)
            translate(stsp.description, 'pt')
                .then((playst) => kill.sendFileFromUrl(from, stsp.icon, '', `*Nombre >* ${stsp.name}\n\n*Link >* ${stsp.url}\n\n*Precio >* ${stsp.price}\n\n*Descripcion >* ${playst}\n\n*Nota >* ${stsp.rating}/5\n\n*Descripcion >* ${stsp.developer.name}\n\n*Otros>* ${stsp.developer.url}`, id))
			break


        case 'search':
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
            if (!isBotGroupAdmins) return kill.reply(from, mess.error.Ba, id)
            if (isGroupMsg) {
                const inviteLink = await kill.getGroupInviteLink(groupId);
                kill.sendLinkWithAutoPreview(from, inviteLink, `\nAqui está el link del grupo🤩 ${name}!`)
            } else {
            	kill.reply(from, 'Vaya, este es solo un comando de grupo.', id)
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
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await kill.sendTextWithMentions(from, mimin)
            break


        case 'groupinfo' :
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
			if (isGroupMsg && isGroupAdmins) {
				const groupMem = await kill.getGroupMembers(groupId)
				let hehe = `🛑╔══✪〘 HOLA TODOS MARCADOS 〙✪══\n⚠╠✪〘 Asunto: ${body.slice(10)} 〙✪═\n\n`
				for (let i = 0; i < groupMem.length; i++) {
					hehe += '🔥╠➥ '
					hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
				}
				hehe += '\n✔╚═✪〘 Gracias, te amo ❤ 〙✪═'
				await sleep(2000)
				await kill.sendTextWithMentions(from, hehe, id)
			} else if (isGroupMsg && isOwner) {
				const groupMem = await kill.getGroupMembers(groupId)
				let hehe = `🛑╔══✪〘 HOLA TODOS MARCADOS 〙✪══\n⚠╠✪〘 Assunto: ${body.slice(10)} 〙✪═\n\n`
				for (let i = 0; i < groupMem.length; i++) {
					hehe += '🔥╠➥ '
					hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
				}
				hehe += '\n✔╚═✪〘 Gracias, te amo ❤ 〙✪═'
				await sleep(2000)
				await kill.sendTextWithMentions(from, hehe, id)
			} else if (isGroupMsg) {
				await kill.reply(from, 'Lo sentimos, solo los administradores pueden usar este comando...', id)
			} else {
				await kill.reply(from, 'Este comando solo se puede usar en grupos!', id)
			}
            break


        case 'random':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            const memran = await kill.getGroupMembers(groupId)
            const randme = memran[Math.floor(Math.random() * memran.length)]
			console.log(randme.id)
            await kill.sendTextWithMentions(from, `═✪〘 Te han seleccionado! 〙✪═ \n\n @${randme.id.replace(/@c.us/g, '')}\n\n═✪〘 Para: ${body.slice(8)} 〙✪═`)
            await sleep(2000)
            break


        case 'kickall':
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
            if (!isGroupAdmins && !isOwner) return kill.reply(from, 'Solo mi creador tiene acceso a este comando.', id)
            const allChatz = await kill.getAllChats()
            for (let dchat of allChatz) {
                await kill.deleteChat(dchat.id)
            }
            kill.reply(from, 'Borré todos los chats!', id)
            break


	    case 'add':
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
			
		
	case 'neon':
		if (args.length == 0) kill.reply(from, 'Pon un mensaje ahí!', id)
		kill.reply(from, mess.wait, id)
		await kill.sendFileFromUrl(from, `https://arugaz.my.id/api/textpro/neontext?text=${body.slice(4)}`, '', '', id)
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
		
	case 'lava':
		if (args.length == 0) kill.reply(from, 'Pon un nombre ahí!', id)
		kill.reply(from, mess.wait, id)
		await kill.sendFileFromUrl(from, `https://arugaz.my.id/api/textpro/lavatext?text=${body.slice(8)}`, '', '', id)
		break
			
	case 'toxic':
		if (args.length == 0) kill.reply(from, 'Pon un nombre ahí!', id)
		kill.reply(from, mess.wait, id)
		await kill.sendFileFromUrl(from, `https://arugaz.my.id/api/textpro/toxictext?text=${body.slice(8)}`, '', '', id)
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
			


        case 'meme':
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
            const loadedMsg = await kill.getAmountOfLoadedMessages()
            const chatIds = await kill.getAllChatIds()
            const groups = await kill.getAllGroups()
            kill.sendText(from, `Status :\n- *${loadedMsg}* Mensajes recibidos después de llamar\n- *${groups.length}* Conversaciones en grupo\n- *${chatIds.length - groups.length}* Conversaciones en PV\n- *${chatIds.length}* Total de conversaciones`)
            break


        case 'join':
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
			if (!isGroupMsg) return client.reply(from, 'Esta función solo se puede utilizar en grupos', id)
            if (!isGroupAdmins) return client.reply(from, 'Esta función solo puede ser utilizada por administradores de grupo', id)
            if (!quotedMsg) return client.reply(from, '¡¡Incorrecto !!, enviar comando */del [tagmsgbot]*', id)
            if (!quotedMsgObj.fromMe) return client.reply(from, '¡¡Incorrecto !!, los Bots no pueden borrar los chats de otros usuarios!', id)
            client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break


        case 'tela':
           
            const sesPic = await kill.getSnapshot()
            kill.sendFile(from, sesPic, 'session.png', 'Neh...', id)
            break
			

        case 'enviar':
            const arka = body.trim().substring(body.indexOf(' ') + 1)
            if (args.length == 0 || args.length == 1) return kill.reply(from, 'Defina el número y luego un mensaje, separándolos por |, por ejemplo...\n\n/enviar <numero> | <mensaje>.', id)
			if (isGroupMsg && isGroupAdmins) {
				await kill.sendText(`${args[0]}` + '@c.us', `${arka.split('|')[1]}`)
				await kill.sendText(from, 'Mensaje enviado.')
		    } else if (isGroupMsg && isOwner) {
				await kill.sendText(`${args[0]}` + '@c.us', `${arka.split('|')[1]}`)
				await kill.sendText(from, 'Mensaje enviado.')
			} else if (isGroupMsg) {
				await kill.reply(from, mess.error.Ga, id)
			} else {
				await kill.reply(from, mess.error.Gp, id)
			}
            break


        case 'blocks':
            
            let hih = `Lista de bloqueados\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            kill.sendTextWithMentions(from, hih, id)
            break
			
			
        case 'encerrar':
            
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
			

        case 'hug':
            if (double == 1) {
            const hug1 = await axios.get(`https://nekos.life/api/v2/img/hug`)
            await kill.sendFileFromUrl(from, hug1.data.url, ``, `Abraço fofinho...`, id)
            } else if (double == 2) {
            const hug = await randomNimek('hug')
            await kill.sendFileFromUrl(from, hug, ``, '<3', id)
			}
			break
			
			
        case 'exclusive':
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
            if (double == 1) {
            const dva = await axios.get(`http://api.i-tech.id/anim/dva?key=${techapi}`)
			console.log(dva.data)
            await kill.sendFileFromUrl(from, dva.data.result, ``, `DVA es muy hermoso, simplemente no sé qué es...`, id)
            } else if (double == 2) {
            const dva1 = await randomNimek('dva') 
            kill.sendFileFromUrl(from, dva1, ``, `Que ~ caliente ~ hermosa!`, id)
			}
            break


        case 'waifu':
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
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            kill.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            break
			
			
        case 'iecchi':
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
			const memean = await axios.get('https://nekos.life/api/v2/img/gecg')
			await kill.sendFileFromUrl(from, memean.data.url, '', '', id)
			break
			

		case 'icon':
			const avatarz = await axios.get('https://nekos.life/api/v2/img/avatar')
			await kill.sendFileFromUrl(from, avatarz.data.url, '', '', id)
			break
			
			
		case 'face':
			const gasm = await axios.get('https://nekos.life/api/v2/img/gasm')
			await kill.sendFileFromUrl(from, gasm.data.url, '', '', id)
			break
			

		case 'pezinho':
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
            const walnime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
            await kill.sendFileFromUrl(from, walnime.data.url, '', '', id)
            break
			
			
        case 'dog': 
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
            const smug = await axios.get('https://nekos.life/api/v2/img/smug')
            await kill.sendFileFromUrl(from, smug.data.url, '', '', id)
            break
			
			
        case 'holo' :
            const holo = await axios.get('https://nekos.life/api/v2/img/holo')
            await kill.sendFileFromUrl(from, holo.data.url, '', '', id)
            break


		case 'rolette':
            if (double == 1) {
            await kill.reply(from, 'Bang, ella disparó y tú moriste, se acabó el juego.', id)
            } else if (double == 2) {
            await kill.reply(from, 'Te quedas vivo, pasa el turno.', id)
			}
			break
			
			
		case 'kisu':
			const kisu = await axios.get('https://nekos.life/api/v2/img/kiss')
			await kill.sendFileFromUrl(from, kisu.data.url, '', '', id)
			break
			
			
		case 'tapa':
			const tapi = await axios.get('https://nekos.life/api/v2/img/slap')
			await kill.sendFileFromUrl(from, tapi.data.url, '', '', id)
			break


        case 'gato':
        case 'cat':
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
            q7 = Math.floor(Math.random() * 890) + 1;
            await kill.sendFileFromUrl(from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + q7 + '.png', 'Pokemon.png', '', id)
            break		


        case 'screenshot':
            const _query = body.slice(12)
            if (!_query.match(isUrl)) return kill.reply(from, mess.error.Iv, id)
            if (args.length == 0) return kill.reply(from, 'Huelo ortografía incorrecta:v!', id)
            await ss(_query)
            await sleep(4000)
			await kill.sendFile(from, './lib/media/img/screenshot.jpeg', 'ss.jpeg', 'Asegúrate de evitar usar esto con pornografía..', id)
            .catch(() => kill.reply(from, `Error de captura de pantalla del sitio ${_query}`, id))
            break
			
			
		case 'ship':
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
			if (args.length == 0) return kill.reply(from, 'Defina algo para analisar.', id)
			await kill.reply(from, `_De acuerdo con mis cálculos súper avanzados de ~dios~ robot "cuie" la oportunidad de..._ \n\n*"${body.slice(8)}"*\n\n_...ser realidad es_ *${lvpc}%.*`, id)
			break


        case 'kiss':
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
            arq = body.trim().split(' ')
            const person = author.replace('@c.us', '')
            await kill.sendGiphyAsSticker(from, 'https://media.giphy.com/media/hjcEjN4vfTv9aMHwWY/giphy.gif')
            kill.sendTextWithMentions(from, '@' + person + ' *abofeteado* ' + arq[1])
            break


        case 'getmeme':
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/memesmexico');
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            kill.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            break
			
			
        case 'date':
			const timeda = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
			await kill.reply(from, 'Ahora son exactamente\n"' + timeda + '"', id)
			break
		

        case 'menu':
			const timed = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
			const allin = `Hola usuario "@${sender.id}"!\n\nMe lleve ${processTime(t, moment())} segundos para responder.\n\nAhora son exactamente "${timed}".\nAqui abajito estan todas mis funciones.\n`
            kill.sendTextWithMentions(from, allin + help, id)
            kill.reply(from, '💢De otros comandos tenemos...\n\n*/Admins* _❌es para administradores._\n\n*/Kill* _🖤🖤es solo para mi dueño._\n\n*/Adult* _🍆🍆es el menú de comandos para adultos😈._\n\n*/Down* _⚠es el menú de descarga de música y video._\n\n*/termux* _🚧Comandos para termux🚧_', id)
            break


        case 'admins':
			if (!isGroupMsg) return kill.reply(from, mess.error.Gp, id)
            if (!isGroupAdmins) return kill.reply(from, mess.error.Ga, id)
            await kill.sendText(from, admins, id)
            break


        case 'adult':
            kill.sendText(from, adult, id)
            break
			

        case 'kill':
            
            kill.sendText(from, owner, id)
            break


        case 'down':
            kill.sendText(from, down, id)
            break


        case 'readme':
            kill.reply(from, readme, id)
            break

		
		case 'bomb':
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
