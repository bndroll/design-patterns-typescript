import Document from './document'


const documentOriginal = new Document('original', [
	[1, 2, 3, 4],
	[5, 6, 7, 8]
])

console.log(documentOriginal)

const documentCopy1 = documentOriginal.clone(1)
const documentCopy2 = documentOriginal.clone(2)

console.log(documentCopy1)
console.log(documentCopy2)