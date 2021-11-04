import IProteus from './iproteus'
import Serpent from './serpent'
import Lion from './lion'


export default class Leopard implements IProteus {
	name = 'Leopard'

	tellMeTheFuture(): void {
		if (Math.floor(Math.random() * 2)) {
			Object.assign(this, new Lion())
			this.tellMeTheFuture = Lion.prototype.tellMeTheFuture
			this.tellMeYourForm = Lion.prototype.tellMeYourForm
		} else {
			Object.assign(this, new Serpent())
			this.tellMeTheFuture = Serpent.prototype.tellMeTheFuture
			this.tellMeYourForm = Serpent.prototype.tellMeYourForm
		}
	}

	tellMeYourForm(): void {
		console.log(`I'm the form of ${this.name}`)
	}
}