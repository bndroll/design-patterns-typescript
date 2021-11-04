import GameCharacter from './game-character'
import Memento from './memento'


export default class CareTaker {
	#originator: GameCharacter
	#mementos: Memento[]

	constructor(originator: GameCharacter) {
		this.#originator = originator
		this.#mementos = []
	}

	save(): void {
		console.log(`caretaker: game save`)
		this.#mementos.push(this.#originator.memento)
	}

	restore(index: number): void {
		console.log(`caretaker: restoring character attributes from memento`)
		this.#originator.memento = this.#mementos[index]
	}
}