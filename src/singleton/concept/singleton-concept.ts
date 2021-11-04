export class Singleton {
	static instance: Singleton
	id: number
	
	constructor(id: number) {
		this.id = id

		if (Singleton.instance) return Singleton.instance

		Singleton.instance = this
	}
}

const object1 = new Singleton(1)
const object2 = new Singleton(2)

console.log(object1 === object2)
