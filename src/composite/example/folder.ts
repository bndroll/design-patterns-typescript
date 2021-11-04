import IComponent from './icomponent'


export default class Folder implements IComponent {
	referenceParent?: Folder
	name: string
	components: IComponent[]

	constructor(name: string) {
		this.name = name
		this.components = []
	}

	dir(indent: string): void {
		console.log(`${indent}<DIR> ${this.name}`)

		this.components.forEach(component => component.dir(`${indent}..`))
	}

	attach(component: IComponent): void {
		component.detach()
		component.referenceParent = this
		this.components.push(component)
	}

	delete(component: IComponent): void {
		const index = this.components.indexOf(component)

		if (index != -1) this.components.splice(index, 1)
	}

	detach(): void {
		if (this.referenceParent) {
			this.referenceParent.delete(this)
			this.referenceParent = undefined
		}
	}
}