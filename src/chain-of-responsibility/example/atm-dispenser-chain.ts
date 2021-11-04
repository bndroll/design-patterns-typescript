import Dispenser50 from './dispenser50'
import Dispenser20 from './dispenser20'
import Dispenser10 from './dispenser10'


export default class AtmDispenserChain {
	chain1: IDispenser
	chain2: IDispenser
	chain3: IDispenser

	constructor() {
		this.chain1 = new Dispenser50()
		this.chain2 = new Dispenser20()
		this.chain3 = new Dispenser10()

		this.chain1.nextSuccessor(this.chain2)
		this.chain2.nextSuccessor(this.chain3)
	}
}