import Wallets from './wallets'
import Reports from './reports'


export interface GameState {
	clock: number
	gameOpen: boolean
	entries: [string, number][]
}

export default class GameEngine {
	static instance: GameEngine
	#startTime = 0
	#clock = 0
	#entries: [string, number][] = []
	#gameOpen = true
	#reports = new Reports()
	#wallets = new Wallets()

	constructor() {
		if (GameEngine.instance) return GameEngine.instance

		this.#startTime = Math.floor(Date.now() / 1000)
		this.#clock = 60

		GameEngine.instance = this
	}

	getGameState(): GameState {
		const now = Math.floor(Date.now() / 1000)
		let timeRemaining = this.#startTime - now + this.#clock

		console.log(`getGameState: ${timeRemaining}`)

		if (timeRemaining < 0) timeRemaining = 0

		this.#gameOpen = false

		return {
			clock: timeRemaining,
			gameOpen: this.#gameOpen,
			entries: this.#entries
		} as GameState
	}

	submitEntry(userId: string, entry: number): boolean {
		const now = Math.floor(Date.now() / 1000)
		const timeRemaining = this.#startTime - now + this.#clock

		if (timeRemaining > 0) {
			if (this.#wallets.getBalance(userId) > 1) {
				if (this.#wallets.adjustBalance(userId, -1)) {
					this.#entries.push([userId, entry])
					this.#reports.logEvent(`new entry '${entry}' submitted by '${userId}'`)

					return true
				}

				this.#reports.logEvent(`problem adjusting balance for '${userId}'`)

				return false
			}

			this.#reports.logEvent(`user balance for '${userId}' to low`)

			return false
		}

		this.#reports.logEvent(`game closed`)

		return false
	}
}