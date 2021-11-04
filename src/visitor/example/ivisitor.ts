import AbstractCarPart from './abstract-car-part'


export default interface IVisitor {
	visit(abstractCarPart: AbstractCarPart): void
}