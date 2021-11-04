import Folder from './folder'


export default interface IComponent {
	referenceParent?: Folder

	dir(indent: string): void

	detach(): void
}