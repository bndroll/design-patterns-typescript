import { AbstractDocument, Document } from './abstract-document'


export default class TextDocument extends AbstractDocument {
	title(document: Document): void {
		document['title'] = `new textDocument title`
	}

	text(document: Document, text: string): void {
		document['text'] = text
	}

	footer(document: Document): void {
		document['footer'] = `-- page 1 --`
	}
}