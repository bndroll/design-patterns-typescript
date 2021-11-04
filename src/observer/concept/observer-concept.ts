interface IObservable {
	subscribe(observer: IObserver): void

	unsubscribe(observer: IObserver): void

	notify(...args: unknown[]): void
}

class ObserverSubject implements IObservable {
	#observers: Set<IObserver>

	constructor() {
		this.#observers = new Set()
	}

	subscribe(observer: IObserver) {
		this.#observers.add(observer)
	}

	unsubscribe(observer: IObserver) {
		this.#observers.delete(observer)
	}

	notify(...args: unknown[]) {
		this.#observers.forEach((observer) => observer.notify(...args))
	}
}

interface IObserver {
	notify(...args: unknown[]): void
}

class Observer implements IObserver {
	readonly #id: number

	constructor(observable: IObservable) {
		this.#id = counter++
		observable.subscribe(this)
	}

	notify(...args: unknown[]) {
		console.log(`observer_${this.#id} received ${JSON.stringify(args)}`)
	}
}

let counter = 1

const subject = new ObserverSubject()
const observer1 = new Observer(subject)
const observer2 = new Observer(subject)

subject.notify('first notification', [1, 2, 3])

subject.unsubscribe(observer2)

subject.notify('second notification', {A: 1, B: 2, C: 3})