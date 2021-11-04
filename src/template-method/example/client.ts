import TextDocument from './text-document'
import HtmlDocument from './html-document'


const textDocument = new TextDocument()
textDocument.createDocument('some text')

const htmlDocument = new HtmlDocument()
htmlDocument.createDocument(`line 1\nline 2`)