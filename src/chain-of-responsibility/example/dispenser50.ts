export default class Dispenser50 implements IDispenser {
	#successor: IDispenser | undefined

	nextSuccessor(successor: IDispenser): void {
		this.#successor = successor
	}

	handle(amount: number): void {
		if (amount >= 50) {
			const num = Math.floor(amount / 50)
			const remainder = amount % 50

			console.log(`dispensing ${num} $50 note`)

			if (remainder !== 0) (this.#successor as IDispenser).handle(remainder)
		} else {
			(this.#successor as IDispenser).handle(amount)
		}
	}
}