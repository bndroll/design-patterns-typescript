interface IFlyweight {
	code: number
}

class Flyweight implements IFlyweight {
	code: number

	constructor(code: number) {
		this.code = code
	}
}

class FlyweightFactory {
	static flyweights: { [id: number]: Flyweight } = {}

	static getFlyweight(code: number): Flyweight {
		if (!(code in FlyweightFactory.flyweights)) FlyweightFactory.flyweights[code] = new Flyweight(code)

		return FlyweightFactory.flyweights[code]
	}

	static getCount(): number {
		return Object.keys(FlyweightFactory.flyweights).length
	}
}

class AppContext {
	private codes: number[] = []

	constructor(codes: string) {
		for (let i = 0; i < codes.length; i++) {
			this.codes.push(codes.charCodeAt(i))
		}
	}

	output(): string {
		let ret = ``

		this.codes.forEach(c => ret = ret + String.fromCharCode(FlyweightFactory.getFlyweight(c).code))

		return ret
	}
}

const appContext = new AppContext('abracadabra')

console.log(appContext.output())

console.log(`abracadabra has ${'abracadabra'.length} letters`)
console.log(`FlyweightFactory has ${FlyweightFactory.getCount()} flyweights`)