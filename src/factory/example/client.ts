import ChairFactory from './chair-factory'


const chair1 = ChairFactory.getChair('l')
console.log(chair1.getDimensions())

const chair2 = ChairFactory.getChair('m')
console.log(chair2.getDimensions())

const chair3 = ChairFactory.getChair('s')
console.log(chair3.getDimensions())