import IProteus from './iproteus'
import Serpent from './serpent'
import Leopard from './leopards'


export default class Lion implements IProteus {
	name = 'Lion'

	tellMeTheFuture(): void {
		if (Math.floor(Math.random() * 2)) {
			Object.assign(this, new Serpent())
			this.tellMeTheFuture = Serpent.prototype.tellMeTheFuture
			this.tellMeYourForm = Serpent.prototype.tellMeYourForm
		} else {
			Object.assign(this, new Leopard())
			this.tellMeTheFuture = Leopard.prototype.tellMeTheFuture
			this.tellMeYourForm = Leopard.prototype.tellMeYourForm
		}
	}

	tellMeYourForm(): void {
		console.log(`I'm the form of ${this.name}`)
	}
}