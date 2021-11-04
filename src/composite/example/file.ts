import Folder from './folder'
import IComponent from './icomponent'


export default class File implements IComponent {
	name: string
	referenceToParent?: Folder = undefined

	constructor(name: string) {
		this.name = name
	}

	dir(indent: string): void {
		console.log(`${indent}<FILE> ${this.name}`)
	}

	detach(): void {
		if (this.referenceToParent) this.referenceToParent.delete(this)
	}
}