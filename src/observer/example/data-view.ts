import { IDataModel } from './data-model'


export interface IDataView {
	notify(data: number[]): void

	draw(data: number[]): void

	delete(): void
}

export class BarGraphView implements IDataView {
	#observable: IDataModel
	readonly #id: number

	constructor(observable: IDataModel) {
		this.#observable = observable
		this.#id = this.#observable.subscribe(this)
	}

	notify(data: number[]): void {
		console.log(`barGraph, id: ${this.#id}`)
		this.draw(data)
	}

	draw(data: number[]): void {
		console.log(`drawing a bar graph using data: ${JSON.stringify(data)}`)
	}

	delete(): void {
		this.#observable.unsubscribe(this.#id)
	}
}

export class PieGraphView implements IDataView {
	#observable: IDataModel
	readonly #id: number

	constructor(observable: IDataModel) {
		this.#observable = observable
		this.#id = this.#observable.subscribe(this)
	}

	notify(data: number[]): void {
		console.log(`pieGraph, id: ${this.#id}`)
		this.draw(data)
	}

	draw(data: number[]): void {
		console.log(`drawing a pie graph using data: ${data}`)
	}

	delete(): void {
		this.#observable.unsubscribe(this.#id)
	}
}

export class TableView implements IDataView {
	#observable: IDataModel
	readonly #id: number

	constructor(observable: IDataModel) {
		this.#observable = observable
		this.#id = this.#observable.subscribe(this)
	}

	notify(data: number[]): void {
		console.log(`tableView, id: ${this.#id}`)
		this.draw(data)
	}

	draw(data: number[]): void {
		console.log(`drawing a table using data: ${JSON.stringify(data)}`)
	}

	delete(): void {
		this.#observable.unsubscribe(this.#id)
	}
}