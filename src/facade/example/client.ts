import GameApi from './game-api'


const sleep = (ms: number) => new Promise(res => setTimeout(res, ms))

const facadeExample = async () => {
	const gameApi = new GameApi()

	const user = {userName: 'user-name'}
	const userId = gameApi.registerUser(user)

	await sleep(500)

	gameApi.submitEntry(userId, 5)

	await sleep(500)

	console.log(`---- GameState Snapshot ----`)
	console.log(gameApi.gameState() + '\n')

	await sleep(1000)

	const history = gameApi.getHistory()

	console.log(`---- GameState Snapshot ----`)
	Object.keys(history).forEach(key => console.log(`${key} : ${history[key][0]} : ${history[key][1]}`))

	await sleep(1000)

	console.log(`---- GameState Snapshot ----`)
	console.log(`${user.userName} : ${gameApi.getBalance(userId)}\n`)

	await sleep(1000)

	console.log(`---- GameState Snapshot ----`)
	console.log(gameApi.gameState())
}

facadeExample()