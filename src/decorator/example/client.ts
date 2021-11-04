import value from './value'
import add from './add'
import sub from './sub'


const a = value(1)
const b = value(2)
const c = value(5)

console.log(add(a, b).value)
console.log(add(a, 100).value)

console.log(sub(c, a).value)
console.log(sub(add(c, b), a).value)
console.log(sub(100, 101).value)