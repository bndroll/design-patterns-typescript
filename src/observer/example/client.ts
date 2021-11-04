import { DataModel } from './data-model'
import { BarGraphView, PieGraphView, TableView } from './data-view'
import { DataController } from './data-controller'


const dataModel = new DataModel()
const pieGraphView = new PieGraphView(dataModel)
const barGraphView = new BarGraphView(dataModel)
const tableView = new TableView(dataModel)
const dataController = new DataController()

dataController.notify([1, 2, 3])
barGraphView.delete()
dataController.notify([4, 5, 6])