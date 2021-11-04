import IVisitor from './ivisitor'


export default interface IVisitable {
	accept(visitor: IVisitor): void
}