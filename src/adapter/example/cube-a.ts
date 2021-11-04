export interface ICubeA {
	manufacture(width: number, height: number, depth: number): boolean
}

export default class CubeA implements ICubeA {
	static last__time = Date.now()

	manufacture(width: number, height: number, depth: number): boolean {
		const now = Date.now()

		if (now > CubeA.last__time + 1500) {
			console.log(`Company A built Cube with dimensions ${width} x ${height} x ${depth}`)
			CubeA.last__time = now

			return true
		}

		return false
	}
}