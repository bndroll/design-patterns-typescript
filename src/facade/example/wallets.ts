import Reports from './reports'


export default class Wallets {
	static instance: Wallets
	#wallets: { [id: string]: number } = {}
	#reports = new Reports()

	constructor() {
		if (Wallets.instance) return Wallets.instance
		Wallets.instance = this
	}

	createWallet(userId: string): boolean {
		if (!(userId in this.#wallets)) {
			this.#wallets[userId] = 0
			this.#reports.logEvent(`wallet for '${userId}' created and set to 0`)

			return true
		}

		return false
	}

	getBalance(userId: string): number {
		this.#reports.logEvent(`Balance check for '${userId}' = ${this.#wallets[userId]}`)

		return this.#wallets[userId]
	}

	adjustBalance(userId: string, amount: number): number {
		this.#wallets[userId] = this.#wallets[userId] + amount
		this.#reports.logEvent(`Balance adjustment for '${userId}'. New balance = ${this.#wallets[userId]}`)

		return this.#wallets[userId]
	}
}