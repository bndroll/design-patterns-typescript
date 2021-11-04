import FurnitureFactory from './furniture-factory'


const furniture1 = FurnitureFactory.getFurniture('SmallChair')
console.log(furniture1?.name)
console.log(furniture1?.getDimensions())

const furniture2 = FurnitureFactory.getFurniture('MediumTable')
console.log(furniture2?.name)
console.log(furniture2.getDimensions())