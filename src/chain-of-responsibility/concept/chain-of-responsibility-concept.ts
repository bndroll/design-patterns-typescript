interface IHandler {
	handle(payload: number): number
}

class Successor1 implements IHandler {
	handle(payload: number): number {
		console.log(`successor1 payload = ${payload}`)

		const test = Math.floor(Math.random() * 2) + 1

		if (test === 1) {
			payload++
			payload = new Successor1().handle(payload)
		} else {
			payload--
			payload = new Successor2().handle(payload)
		}

		return payload
	}
}

class Successor2 implements IHandler {
	handle(payload: number): number {
		console.log(`successor2 payload = ${payload}`)

		const test = Math.floor(Math.random() * 3) + 1

		if (test === 1) {
			payload *= 2
			payload = new Successor1().handle(payload)
		} else if (test === 2) {
			payload /= 2
			payload = new Successor2().handle(payload)
		}

		return payload
	}
}

class Chain {
	start(payload: number) {
		return new Successor1().handle(payload)
	}
}

const chain = new Chain()
const payload = 1
const out = chain.start(payload)

console.log(`finished result = ${out}`)