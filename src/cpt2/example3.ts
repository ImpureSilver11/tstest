
// 1
export function advancedType(): Kimera{
  let pochi: Kimera
  pochi.bark
  pochi.tail.color = 'black'
  pochi.wing.color = 'gold'
  pochi.fly
  return pochi
}

type Dogs = {
  tail: Tail
  bark: () => void
}
type Tail ={
  color: string
}
type Bird = {
  wing: Wing
  fly: () => void
}
type Wing = {
  color: string
}
export type Kimera = Dogs & Bird

function returnNever(): never{
  throw new Error()
}

let unexistenceType: string & number & boolean = returnNever()
// let problematicNumber: string & number = '0' //ERROR


// union Types
let value: boolean | number | string
value = false
value = 1
value = '1'

let numberOfStrings: (number | string)[]
numberOfStrings = [0, '1']
// numberOfStrings = [0, '1', false] // ERROR

let nullableString: string | null
nullableString = null
nullableString = 'notnull'

let nullableStrings: (string | null)[]
nullableStrings.push(null)
nullableStrings.push('notnull')
// nullableStrings.push(false))

let status: 'ToDo' | 'Doing' | 'Done'
status = 'ToDo'
status = 'Doing'
// status = 'やってない' // ERROR

let zero: 0
zero = 0
// zero = 1 // ERROR
zero.toFixed(1) // 0.0
