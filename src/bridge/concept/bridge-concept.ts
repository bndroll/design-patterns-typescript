interface IImplementer {
	method(value: string[]): void
}

interface IAbstraction {
	method(value: string[]): void
}

class RefinedAbstractionA implements IAbstraction {
	#implementer: IImplementer

	constructor(implementer: IImplementer) {
		this.#implementer = implementer
	}

	method(value: string[]): void {
		this.#implementer.method(value)
	}
}

class RefinedAbstractionB implements IAbstraction {
	#implementer: IImplementer

	constructor(implementer: IImplementer) {
		this.#implementer = implementer
	}

	method(value: string[]): void {
		this.#implementer.method(value)
	}
}

class ConcreteImplementerA implements IImplementer {
	method(value: string[]) {
		console.log(value)
	}
}

class ConcreteImplementerB implements IImplementer {
	method(value: string[]) {
		value.forEach(item => console.log(`${item} `))
	}
}

const values = ['a', 'b', 'c']

const refinedAbstractionA = new RefinedAbstractionA(new ConcreteImplementerA())
refinedAbstractionA.method(values)

const refinedAbstractionB = new RefinedAbstractionB(new ConcreteImplementerB())
refinedAbstractionB.method(values)