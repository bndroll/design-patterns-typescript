import House from './house'
import HouseBuilder from './house-builder'


export default class HouseboatDirector {
	static construct(): House {
		return new HouseBuilder()
			.setBuildingType('Houseboat')
			.setWallMaterial('Wood')
			.setNumberDoors(6)
			.setNumberWindows(8)
			.getResult()
	}
}