interface IComponent {
	method(): string
}

class Component implements IComponent {
	method(): string {
		return `Component method`
	}
}

class Decorator implements IComponent {
	#obj: IComponent

	constructor(obj: IComponent) {
		this.#obj = obj
	}

	method(): string {
		return `Decorator method(${this.#obj.method()})`
	}
}

const component = new Component()
console.log(component.method())

const decoratedComponent1 = new Decorator(component)
console.log(decoratedComponent1.method())