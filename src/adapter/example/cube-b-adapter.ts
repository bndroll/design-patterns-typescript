import { ICubeA } from './cube-a'
import CubeB from './cube-b'


export default class CubeBAdapter implements ICubeA {
	#cube: CubeB

	constructor() {
		this.#cube = new CubeB()
	}

	manufacture(width: number, height: number, depth: number): boolean {
		return this.#cube.create(
			[-1 * width / 2, -1 * height / 2, -1 * depth / 2],
			[width / 2, height / 2, depth / 2]
		)
	}
}