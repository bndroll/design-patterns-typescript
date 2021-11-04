import BigTable from './big-table'
import MediumTable from './medium-table'
import SmallTable from './small-table'
import { ITable } from './table'


export default class TableFactory {
	static getTable(table: string): ITable {
		if (table === 'BigTable') return new BigTable()
		else if (table === 'MiddleTable') return new MediumTable()
		else if (table === 'SmallTable') return new SmallTable()
		else throw new Error('table with this type is not exist')
	}
}