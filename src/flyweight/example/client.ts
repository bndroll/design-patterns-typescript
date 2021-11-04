import Table from './table'
import FlyweightFactory from './flyweight-factory'


const table = new Table(3, 3)

table.rows[0].columns[0].data = 'abra'
table.rows[0].columns[1].data = '112233'
table.rows[0].columns[2].data = 'cadabra'

table.rows[1].columns[0].data = 'racadab'
table.rows[1].columns[1].data = '12345'
table.rows[1].columns[2].data = '332211'

table.rows[2].columns[0].data = 'cadabra'
table.rows[2].columns[1].data = '445566'
table.rows[2].columns[2].data = 'aa 22 bb'

table.rows[0].columns[0].justify = 1
table.rows[1].columns[0].justify = 1
table.rows[2].columns[0].justify = 1

table.rows[0].columns[2].justify = 2
table.rows[1].columns[2].justify = 2
table.rows[2].columns[2].justify = 2

table.rows[0].columns[1].width = 15
table.rows[1].columns[1].width = 15
table.rows[2].columns[1].width = 15

table.draw()

console.log(`FlyweightFactory has ${FlyweightFactory.getCount()} flyweights`)