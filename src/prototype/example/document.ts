import IPrototype from './iprototype'


export default class Document implements IPrototype {
	name: string
	array: [number[], number[]]

	constructor(name: string, array: [number[], number[]]) {
		this.name = name
		this.array = JSON.parse(JSON.stringify(array))
	}

	clone(mode: number): Document {
		let array

		if (mode === 2) array = JSON.parse(JSON.stringify(this.array))
		else array = Object.assign([], this.array)

		return new Document(this.name, array)
	}
}