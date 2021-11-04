import Wallets from './wallets'
import Reports from './reports'


export default class Users {
	static instance: Users
	#users: { [id: string]: { [id: string]: string } } = {}
	#reports = new Reports()
	#wallets = new Wallets()

	constructor() {
		if (Users.instance) return Users.instance
		Users.instance = this
	}

	registerUser(newUser: { [id: string]: string }): string {
		if (!(newUser['user_name'] in this.#users)) {
			const userId = newUser['userName']

			this.#users[userId] = newUser
			this.#reports.logEvent(`new user '${userId}' created`)
			this.#wallets.createWallet(userId)
			this.#reports.logEvent(`give new user '${userId}' sign up bonus of 10`)
			this.#wallets.adjustBalance(userId, 10)

			return userId
		}

		return ``
	}

	editUser(userId: string, user: { [id: string]: string }): boolean {
		console.log(userId)
		console.log(user)

		return false
	}

	changePassword(userId: string, password: string): boolean {
		console.log(userId)
		console.log(password)

		return false
	}
}