import IComponent from './icomponent'


export default class Mediator {
	#components: Set<IComponent>

	constructor() {
		this.#components = new Set()
	}

	add(component: IComponent): void {
		this.#components.add(component)
	}

	notify(message: string, originator: IComponent): void {
		this.#components.forEach(component => {
			if (component !== originator) {
				component.receive(message)
			}
		})
	}
}