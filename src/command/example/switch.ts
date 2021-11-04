export default class Switch {
	readonly #commands: { [id: string]: ICommand }
	#history: [number, string][]

	constructor() {
		this.#commands = {}
		this.#history = []
	}

	showHistory(): void {
		this.#history.forEach(row => console.log(`${row[0]} : ${row[1]}`))
	}

	register(commandName: string, command: ICommand): void {
		this.#commands[commandName] = command
	}

	execute(commandName: string): void {
		if (commandName in this.#commands) {
			this.#commands[commandName].execute()
			this.#history.push([Date.now(), commandName])
		} else {
			console.log(`command [${commandName}] not registered`)
		}
	}

	replayLast(numberOfCommands: number): void {
		const commands = this.#history.slice(
			this.#history.length - numberOfCommands,
			this.#history.length
		)

		commands.forEach(command => this.#commands[command[1]].execute())
	}
}