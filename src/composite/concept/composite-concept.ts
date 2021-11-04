interface ICompositeComponent {
	name: string
	referenceParent?: Composite

	method(): void

	detach(): void
}

class Leaf implements ICompositeComponent {
	referenceParent?: Composite = undefined
	name: string

	constructor(name: string) {
		this.name = name
	}

	method(): void {
		const parent = this.referenceParent ? this.referenceParent.name : 'none'

		console.log(`<Leaf>\t\tname:${this.name}\tParent:\t${parent}`)
	}

	detach(): void {
		if (this.referenceParent) this.referenceParent.delete(this)
	}
}

class Composite implements ICompositeComponent {
	referenceParent?: Composite
	components: ICompositeComponent[]
	name: string

	constructor(name: string) {
		this.name = name
		this.components = []
	}

	method(): void {
		const parent = this.referenceParent ? this.referenceParent.name : 'none'

		console.log(`<Composite>\tname:${this.name}\tParent:\t${parent}\tComponents:${this.components.length}`)

		this.components.forEach(component => component.method())
	}

	attach(component: ICompositeComponent): void {
		component.detach()
		component.referenceParent = this
		this.components.push(component)
	}

	delete(component: ICompositeComponent): void {
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

const leafA = new Leaf('leaf-a')
const leafB = new Leaf('leaf-b')
const composite1 = new Composite('composite-1')
const composite2 = new Composite('composite-2')

composite1.attach(leafA)
composite2.attach(leafA)
composite2.attach(composite1)

leafB.method()
composite2.method()