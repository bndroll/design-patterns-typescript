import IShapeImplementer from './ishape-implementer'


export default class CircleImplementer implements IShapeImplementer {
	drawImplementation(): void {
		console.log(`  ******  `)
		console.log(`**      **`)
		console.log(`*        *`)
		console.log(`*        *`)
		console.log(`**      **`)
		console.log(`  ******  `)
	}
}