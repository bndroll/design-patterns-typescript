import { dimensions } from './dimension'


export interface IChair {
	name: string
	height: number
	width: number
	depth: number

	getDimensions(): dimensions
}

export class Chair implements IChair {
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