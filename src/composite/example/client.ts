import Folder from './folder'
import File from './file'


const fileSystem = new Folder(`root`)
const file1 = new File('abc.txt')
const file2 = new File('123.txt')

fileSystem.attach(file1)
fileSystem.attach(file2)

const folderA = new Folder('folder-a')
fileSystem.attach(folderA)

const file3 = new File('xyz.txt')
folderA.attach(file3)

const folderB = new Folder('folder-b')
const file4 = new File('456.txt')

folderB.attach(file4)

fileSystem.attach(folderB)

fileSystem.dir(``)

console.log()
folderB.attach(folderA)

fileSystem.dir(``)