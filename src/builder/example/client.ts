import IglooDirector from './igloo-director'
import CastleDirector from './castle-director'
import HouseboatDirector from './houseboat-director'


const igloo = IglooDirector.construct()
const castle = CastleDirector.construct()
const houseboat = HouseboatDirector.construct()

console.log(igloo.construction())
console.log(castle.construction())
console.log(houseboat.construction())