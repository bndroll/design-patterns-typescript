interface IIterator {
	next(): IAggregate

	hasNext(): boolean
}

class IteratorConcept implements IIterator {
	index: number
	aggregates: IAggregate[]

	constructor(aggregates: IAggregate[]) {
		this.index = 0
		this.aggregates = aggregates
	}

	next(): IAggregate {
		if (this.index < this.aggregates.length) {
			const aggregate = this.aggregates[this.index]
			this.index++

			return aggregate
		}

		throw new Error(`at end of iterator`)
	}

	hasNext(): boolean {
		return this.index < this.aggregates.length
	}
}

interface IAggregate {
	method(): void
}

class Aggregate implements IAggregate {
	method(): void {
		console.log(`this method has been invoked`)
	}
}

const aggregates = [
	new Aggregate(),
	new Aggregate(),
	new Aggregate(),
	new Aggregate()
]

const iterable = new IteratorConcept(aggregates)

while (iterable.hasNext()) {
	iterable.next().method()
}