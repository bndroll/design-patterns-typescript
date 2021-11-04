import Memento from './memento'


export default class GameCharacter {
	#score: number
	#inventory: Set<string>
	#level: number
	#location: { x: number, y: number, z: number }

	constructor() {
		this.#score = 0
		this.#inventory = new Set()
		this.#level = 0
		this.#location = {x: 0, y: 0, z: 0}
	}

	public get score(): number {
		return this.#score
	}

	registerKill(): void {
		this.#score += 100
	}

	addInventory(item: string): void {
		this.#inventory.add(item)
	}

	progressToNextLevel(): void {
		this.#level++
	}

	moveForward(amount: number): void {
		this.#location.z += amount
	}

	status(): string {
		return (
			`
				score: ${this.#score}\n
				level: ${this.#level}\n 
				location: ${JSON.stringify(this.#location)}\n
				inventory: ${JSON.stringify(Array.from(this.#inventory))}
			`
		)
	}

	public get memento(): Memento {
		return new Memento(
			this.#score,
			new Set(this.#inventory),
			this.#level,
			Object.assign({}, this.#location)
		)
	}

	public set memento(memento: Memento) {
		this.#score = memento.score
		this.#inventory = memento.inventory
		this.#level = memento.level
		this.#location = memento.location
	}
}