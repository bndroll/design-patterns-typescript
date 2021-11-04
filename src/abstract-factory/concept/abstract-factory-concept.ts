import { FactoryA, IProductA } from './factory-a'
import { FactoryB, IProductB } from './factory-b'


interface IProduct extends IProductA, IProductB {}

class AbstractFactory {
	static createObject(factory: string): IProduct {
		if (['aa', 'ab', 'ac'].indexOf(factory) != -1) {
			return FactoryA.getObject(factory[1])
		}

		if (['ba', 'bb', 'bc'].indexOf(factory) != -1) {
			return FactoryB.getObject(factory[1])
		}

		throw new Error('factory with this type is not found')
	}
}

const product1 = AbstractFactory.createObject('ab')
console.log(product1)

const product2 = AbstractFactory.createObject('bc')
console.log(product2)