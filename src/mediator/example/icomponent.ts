export default interface IComponent {
	notify(message: string): void

	receive(message: string): void
}