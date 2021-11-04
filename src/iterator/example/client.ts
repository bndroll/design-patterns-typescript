class NumberWheel {
	index: number

	constructor() {
		this.index = 0
	}

	next() {
		this.index++

		return (this.index * 2) % 11
	}
}

const numberWheel = new NumberWheel()

for (let i = 0; i < 22; i++) {
	process.stdout.write(numberWheel.next() + ` `)
}