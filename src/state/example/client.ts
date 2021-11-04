enum ExampleState {
	INITIALIZING = `INITIALIZING`,
	STARTED = 'STARTED',
	RUNNING = 'RUNNING',
	FINISHED = 'FINISHED',
}

interface IExampleState {
	request(): void
}

class StateContext implements IExampleState {
	#state: ExampleState

	constructor() {
		this.#state = ExampleState.INITIALIZING
	}

	public get state() {
		return this.#state
	}

	public set state(value: ExampleState) {
		switch (value) {
			case ExampleState.STARTED:
				this.request = Started.prototype.request
				break
			case ExampleState.RUNNING:
				this.request = Running.prototype.request
				break
			case ExampleState.FINISHED:
				this.request = Finished.prototype.request
				break
		}

		this.#state = value
	}

	request() {
	}
}

class Started implements IExampleState {
	request() {
		console.log(`i'm now started`)
	}
}

class Running implements IExampleState {
	request() {
		console.log(`i'm now running`)
	}
}

class Finished implements IExampleState {
	request() {
		console.log(`i'm now finished`)
	}
}

const stateContext = new StateContext()
console.log(`stateContext = ${stateContext.state}`)

stateContext.state = ExampleState.STARTED
stateContext.request()

stateContext.state = ExampleState.RUNNING
stateContext.request()

stateContext.state = ExampleState.FINISHED
stateContext.request()

stateContext.state = ExampleState.STARTED
stateContext.request()

stateContext.state = ExampleState.RUNNING
stateContext.request()

stateContext.state = ExampleState.FINISHED
stateContext.request()