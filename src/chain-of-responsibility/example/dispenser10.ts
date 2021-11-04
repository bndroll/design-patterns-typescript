export default class Dispenser10 implements IDispenser {
	#successor: IDispenser | undefined

	nextSuccessor(successor: IDispenser): void {
		this.#successor = successor
	}

	handle(amount: number): void {
		if (amount >= 10) {
			const num = Math.floor(amount / 10)
			const remainder = amount % 10

			console.log(`dispensing ${num} $10 note`)

			if (remainder !== 0) (this.#successor as IDispenser).handle(remainder)
		} else {
			(this.#successor as IDispenser).handle(amount)
		}
	}
}