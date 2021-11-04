export interface Document {
	[id: string]: string
}

export abstract class AbstractDocument {
	document: Document = {}

	abstract title(document: Document): void

	description?(document: Document): void

	author?(document: Document): void

	backgroundColor(document: Document): void {
		document['bg-col'] = `white`
	}

	abstract text(document: Document, text: string): void

	footer?(document: Document): void

	print(document: Document): void {
		console.log(`----------------------`)
		Object.keys(document).forEach((attribute: string) => console.log(`${attribute}\t: ${document[attribute]}`))
		console.log()
	}

	createDocument(text: string): void {
		this.title(this.document)
		if (this.description) this.description(this.document)
		if (this.author) this.author(this.document)
		this.backgroundColor(this.document)
		this.text(this.document, text)
		if (this.footer) this.footer(this.document)
		this.print(this.document)
	}
}