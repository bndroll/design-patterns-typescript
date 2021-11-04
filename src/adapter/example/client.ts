import CubeA from './cube-a'
import CubeBAdapter from './cube-b-adapter'


const totalCubes = 5
let counter = 0

const manufactureCube = () => {
	const width = Math.floor(Math.random() * 10) + 1
	const height = Math.floor(Math.random() * 10) + 1
	const depth = Math.floor(Math.random() * 10) + 1

	let cube = new CubeA()
	let success = cube.manufacture(width, height, depth)

	if (success) counter++
	else {
		console.log(`Company A was busy, so trying company B`)

		cube = new CubeBAdapter()

		success = cube.manufacture(width, height, depth)

		if (success) counter++
		else {
			console.log(`Company B was busy, so trying company A`)
		}
	}
}

const interval = setInterval(() => {
	manufactureCube()

	if (counter >= totalCubes) {
		clearInterval(interval)
		console.log(`${totalCubes} cubes have been manufactured`)
	}
}, 1000)