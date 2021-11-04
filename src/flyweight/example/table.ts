import Row from './row'


export default class Table {
	rows: Row[]

	constructor(rowCount: number, columnCount: number) {
		this.rows = []

		for (let i = 0; i < rowCount; i++) {
			this.rows.push(new Row(columnCount))
		}
	}

	draw(): void {
		let maxRowLength = 0
		const rows: string[] = []

		this.rows.forEach(row => {
			const rowData = row.getData()
			rows.push(`|${rowData}|`)
			const rowLength = rowData.length + 1

			if (maxRowLength < rowLength) maxRowLength = rowLength
		})

		console.log(`-`.repeat(maxRowLength))

		rows.forEach(row => console.log(row))

		console.log(`-`.repeat(maxRowLength))
	}
}