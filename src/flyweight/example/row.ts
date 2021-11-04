import Column from './column'


export default class Row {
	columns: Column[]

	constructor(columnCount: number) {
		this.columns = []

		for (let i = 0; i < columnCount; i++) {
			this.columns.push(new Column())
		}
	}

	getData(): string {
		let ret = ``

		this.columns.forEach(col => ret = `${ret}${col.getData()}|`)

		return ret
	}
}