interface IA {
	methodA(): void
}

interface IB {
	methodB(): void
}

class ClassA implements IA {
	methodA() {
		console.log(`method A`)
	}
}

class ClassB implements IB {
	methodB() {
		console.log(`method B`)
	}
}

class ClassBAdapter implements IA {
	#classB: ClassB

	constructor() {
		this.#classB = new ClassB()
	}

	methodA() {
		this.#classB.methodB()
	}
}

const items = [new ClassA(), new ClassB()]

items.forEach(item => {
	if (item instanceof ClassB) item.methodB()
	else item.methodA()
})

const adapted = [new ClassA(), new ClassBAdapter]

adapted.forEach(item => item.methodA())