class Mediator {
	colleague1: Colleague1
	colleague2: Colleague2

	constructor() {
		this.colleague1 = new Colleague1()
		this.colleague2 = new Colleague2()
	}

	colleague1Method() {
		return this.colleague1.method1()
	}

	colleague2Method() {
		return this.colleague2.method2()
	}
}

class Colleague1 {
	method1() {
		return `here is the colleague1 specific data you asked for`
	}
}

class Colleague2 {
	method2() {
		return `here is the colleague2 specific data you asked for`
	}
}

const mediator = new Mediator()

let data = mediator.colleague2Method()
console.log(`colleague1 <--> ${data}`)

data = mediator.colleague1Method()
console.log(`colleague2 <--> ${data}`)