import FlyweightFactory from './flyweight-factory'


export default class Column {
	data = ''
	width = 10
	justify = 0

	getData(): string {
		const codes = []

		for (let i = 0; i < this.data.length; i++) {
			codes.push(this.data.charCodeAt(i))
		}

		let ret = ``

		Array.from(codes).forEach(c => ret = ret + String.fromCharCode(FlyweightFactory.getFlyweight(c).code))

		switch (this.justify) {
			case 1:
				ret = this.leftAlign(this.width, ret, ` `)
				break
			case 2:
				ret = this.rightAlign(this.width, ret, ` `)
				break
			default:
				ret = this.center(this.width, ret, ` `)
		}

		return ret
	}

	center(width: number, str: string, padding: string): string {
		return width <= str.length ? str : this.centerAlternative(width, str + padding, padding)
	}

	centerAlternative(width: number, str: string, padding: string): string {
		return width <= str.length ? str : this.center(width, str + padding, padding)
	}

	leftAlign(width: number, str: string, padding: string): string {
		return width <= str.length ? str : this.leftAlign(width, str + padding, padding)
	}

	rightAlign(width: number, str: string, padding: string): string {
		return width <= str.length ? str : this.rightAlign(width, str + padding, padding)
	}
}