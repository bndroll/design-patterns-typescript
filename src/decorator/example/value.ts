export interface IValue {
	value: number
}

class _Value implements IValue {
	value: number

	constructor(value: number) {
		this.value = value
	}
}

export default (value: number): IValue => new _Value(value)