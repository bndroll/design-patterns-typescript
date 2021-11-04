import Wallets from './wallets'
import Reports from './reports'
import Users from './users'
import GameEngine, { GameState } from './game-engine'


export default class GameApi {
	#wallets: Wallets
	#reports: Reports
	#users: Users
	#gameEngine: GameEngine

	constructor() {
		this.#wallets = new Wallets()
		this.#reports = new Reports()
		this.#users = new Users()
		this.#gameEngine = new GameEngine()
	}

	getBalance(userId: string): number {
		return this.#wallets.getBalance(userId)
	}

	gameState(): GameState {
		return this.#gameEngine.getGameState()
	}

	getHistory(): { [id: string]: [number, string] } {
		return this.#reports.getHistory()
	}

	changePassword(userId: string, password: string): boolean {
		return this.#users.changePassword(userId, password)
	}

	submitEntry(userId: string, entry: number): boolean {
		return this.#gameEngine.submitEntry(userId, entry)
	}

	registerUser(value: {[id: string]: string}): string {
		return this.#users.registerUser(value)
	}
}