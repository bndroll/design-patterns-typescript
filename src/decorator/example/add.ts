import { IValue } from './value'


class _Add implements IValue {
	value: number

	constructor(value1: IValue | number, value2: IValue | number) {
		const a = Object.prototype.hasOwnProperty.call(value1, 'value') ?
			(value1 as IValue).value : (value1 as number)
		const b = Object.prototype.hasOwnProperty.call(value2, 'value') ?
			(value2 as IValue).value : (value2 as number)

		this.value = a + b
	}
}

export default (value1: IValue | number, value2: IValue | number): IValue => new _Add(value1, value2)