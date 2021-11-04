import { dimensions } from './dimension'


export interface ITable {
	name: string
	height: number
	width: number
	depth: number

	getDimensions(): dimensions
}

export class Table implements ITable {
	name = ''
	height = 0
	width = 0
	depth = 0

	getDimensions(): dimensions {
		return {
			width: this.width,
			height: this.height,
			depth: this.depth
		}
	}
}