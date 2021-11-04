import Chair from './chair'
import BigChair from './big-chair'
import MediumChair from './medium-chair'
import SmallChair from './small-chair'


export default class ChairFactory {
	static getChair(chair: string): Chair {
		if (chair == 'l') return new BigChair()
		else if (chair == 'm') return new MediumChair()
		else if (chair == 's') return new SmallChair()
		else throw new Error('this type of chair is not found')
	}
}