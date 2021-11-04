abstract class AbstractClass {
	stepOne(): void {
	}

	abstract stepTwo(): void

	stepThree(): void {
		console.log(`step three is a hook that prints this line by default`)
	}

	templateMethods(): void {
		this.stepOne()
		this.stepTwo()
		this.stepThree()
	}
}

class ConcreteClassA extends AbstractClass {
	stepTwo() {
		console.log(`classA: step two (overridden)`)
	}
}

class ConcreteClassB extends AbstractClass {
	stepOne() {
		console.log(`classB : step one (overridden)`)
	}

	stepTwo() {
		console.log(`classB : step two. (overridden)`)
	}

	stepThree() {
		console.log(`classB : step three. (overridden)`)
	}
}

const classA = new ConcreteClassA()
classA.templateMethods()

const classB = new ConcreteClassB()
classB.templateMethods()