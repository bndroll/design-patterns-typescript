export interface ICubeB {
	create(top_left_front: [number, number, number],
		   bottom_right_back: [number, number, number]): boolean
}

export default class CubeB implements ICubeB {
	static last__time = Date.now()

	create(top_left_front: [number, number, number],
		   bottom_right_back: [number, number, number]): boolean {

		const now = Date.now()

		if (now > CubeB.last__time + 3000) {
			console.log(`
				Company B built Cube with coords 
				[${top_left_front[0]}, ${top_left_front[1]}, ${top_left_front[2]}],
				[${bottom_right_back[0]}, ${bottom_right_back[1]}, ${bottom_right_back[2]}]`)

			CubeB.last__time = now
			return true
		}

		return false;
	}
}