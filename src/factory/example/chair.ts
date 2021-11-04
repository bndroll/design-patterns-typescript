import { dimensions } from './dimension'


export interface IChair {
	height: number
	width: number
	depth: number

	getDimensions(): dimensions
}

export default class Chair implements IChair {
	height = 0
	width = 0
	depth = 0

	getDimensions(): dimensions {
		return {
			height: this.height,
			width: this.width,
			depth: this.depth
		}
	}
}