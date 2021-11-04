class ObjectContext {
	request(strategy: IStrategyConstructor) {
		return new strategy()
	}
}

interface IStrategy {
	method(): string
}

interface IStrategyConstructor {
	new(): IStrategy
}

class ConcreteStrategyA implements IStrategy {
	method() {
		return 'i am concreteStrategyA'
	}
}

class ConcreteStrategyB implements IStrategy {
	method() {
		return 'i am concreteStrategyB'
	}
}

class ConcreteStrategyC implements IStrategy {
	method() {
		return 'i am concreteStrategyC'
	}
}

const objectContext = new ObjectContext()

console.log(objectContext.request(ConcreteStrategyA).method())
console.log(objectContext.request(ConcreteStrategyB).method())
console.log(objectContext.request(ConcreteStrategyC).method())