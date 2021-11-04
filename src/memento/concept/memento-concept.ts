class Memento {
	state: string

	constructor(state: string) {
		this.state = state
	}
}

class Originator {
	#state: string

	constructor() {
		this.#state = ``
	}

	public get state(): string {
		return this.#state
	}

	public set state(state: string) {
		this.#state = state
		console.log(`originator: set state to ${state}`)
	}

	public get memento(): Memento {
		console.log(`originator: provoding memento of state to caretaker`)

		return new Memento(this.#state)
	}

	public set memento(memento: Memento) {
		this.#state = memento.state

		console.log(`originator: state after restoring from memento: ${this.#state}`)
	}
}

class CareTaker {
	#originator: Originator
	#mementos: Memento[]

	constructor(originator: Originator) {
		this.#originator = originator
		this.#mementos = []
	}

	create() {
		console.log(`caretaker: getting a copy of originators current state`)
		this.#mementos.push(this.#originator.memento)
	}

	restore(index: number) {
		console.log(`caretaker: restoring originators state from memento`)
		this.#originator.memento = this.#mementos[index]
	}
}

const originator = new Originator()
const caretaker = new CareTaker(originator)

originator.state = 'state #1'
originator.state = 'state #2'

caretaker.create()

originator.state = 'state #3'
caretaker.create()

originator.state = 'state #4'
console.log(originator.state)

caretaker.restore(0)
console.log(originator.state)

caretaker.restore(1)
console.log(originator.state)