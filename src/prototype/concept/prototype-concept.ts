interface IPrototype {
	clone(): this
}

class MyClass implements IPrototype {
	field: number[]

	constructor(field: number[]) {
		this.field = field
	}

	clone(): this {
		return JSON.parse(JSON.stringify(this))
	}
}

const object1 = new MyClass([1, 2, 3, 4])
console.log(`object1: ${JSON.stringify(object1)}`)

const object2 = object1.clone()
console.log(`object2: ${JSON.stringify(object2)}`)