interface IProduct {
	name: string
}

class ConcreteProduct implements IProduct {
	name = ''
}

class ConcreteProductA extends ConcreteProduct {
	constructor() {
		super()
		this.name = 'ConcreteProductA'
	}
}

class ConcreteProductB extends ConcreteProduct {
	constructor() {
		super()
		this.name = 'ConcreteProductB'
	}
}

class ConcreteProductC extends ConcreteProduct {
	constructor() {
		super()
		this.name = 'ConcreteProductC'
	}
}

class Creator {
	static createObject(someProperty: string): IProduct {
		if (someProperty === 'a' || someProperty === 'A') return new ConcreteProductA()
		else if (someProperty === 'b' || someProperty === 'B') return new ConcreteProductB()
		else if (someProperty === 'c' || someProperty === 'C') return new ConcreteProductC()
		else throw new Error('not found product of this type')
	}
}

const product = Creator.createObject('C')
console.log(product)