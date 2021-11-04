class SubSystemClassA {
	method(): string {
		return 'A'
	}
}

class SubSystemClassB {
	method(value: string): string {
		return value
	}
}

class SubSystemClassC {
	method(value: { C: number[] }): { C: number[] } {
		return value
	}
}

class Facade {
	subSystemClassA(): string {
		return new SubSystemClassA().method()
	}

	subSystemClassB(value: string): string {
		return new SubSystemClassB().method(value)
	}

	subSystemClassC(value: { C: number[] }): { C: number[] } {
		return new SubSystemClassC().method(value)
	}
}

console.log(new SubSystemClassA().method())
console.log(new SubSystemClassB().method('B'))
console.log(new SubSystemClassC().method({C: [1, 2, 3]}))

const facade = new Facade()

console.log(facade.subSystemClassA())
console.log(facade.subSystemClassB('B'))
console.log(facade.subSystemClassC({C: [1, 2, 3]}))