import Flyweight from './flyweight'


export default class FlyweightFactory {
	static flyweights: { [id: number]: Flyweight } = {}

	static getFlyweight(code: number): Flyweight {
		if (!(code in FlyweightFactory.flyweights)) FlyweightFactory.flyweights[code] = new Flyweight(code)

		return FlyweightFactory.flyweights[code]
	}

	static getCount(): number {
		return Object.keys(FlyweightFactory.flyweights).length
	}
}