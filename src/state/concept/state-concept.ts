interface IState {
	toString(): string
}

class ConcreteStateA implements IState {
	toString(): string {
		return `i'm concreteStateA`
	}
}

class ConcreteStateB implements IState {
	toString(): string {
		return `i'm concreteStateB`
	}
}

class ConcreteStateC implements IState {
	toString(): string {
		return `i'm concreteStateC`
	}
}

class Context {
	#stateHandles: IState[]
	#handle: IState | undefined

	constructor() {
		this.#stateHandles = [
			new ConcreteStateA(),
			new ConcreteStateB(),
			new ConcreteStateC()
		]
		this.#handle = undefined
	}

	request() {
		this.#handle = this.#stateHandles[Math.floor(Math.random() * 3)]

		return this.#handle
	}
}

const context = new Context()
console.log(context.request())
console.log(context.request())
console.log(context.request())
console.log(context.request())
console.log(context.request())