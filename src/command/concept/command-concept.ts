interface ICommand {
	execute(): void
}

class Invoker {
	readonly #commands: {[id: string]: ICommand}

	constructor() {
		this.#commands = {}
	}

	register(commandName: string, command: ICommand) {
		this.#commands[commandName] = command
	}

	execute(commandName: string): void {
		if (commandName in this.#commands) this.#commands[commandName].execute()
		else console.log(`command [${commandName}] not recognised`)
	}
}

class Receiver {
	runCommand1() {
		console.log(`executing command 1`)
	}

	runCommand2() {
		console.log(`executing command 2`)
	}
}

class Command1 implements ICommand {
	#receiver: Receiver

	constructor(receiver: Receiver) {
		this.#receiver = receiver
	}

	execute(): void {
		this.#receiver.runCommand1()
	}
}

class Command2 implements ICommand {
	#receiver: Receiver

	constructor(receiver: Receiver) {
		this.#receiver = receiver
	}

	execute(): void {
		this.#receiver.runCommand2()
	}
}

const receiver = new Receiver()

const command1 = new Command1(receiver)
const command2 = new Command2(receiver)

const invoker = new Invoker()

invoker.register('1', command1)
invoker.register('2', command2)

invoker.execute('1')
invoker.execute('2')
invoker.execute('1')
invoker.execute('2')
invoker.execute('3')