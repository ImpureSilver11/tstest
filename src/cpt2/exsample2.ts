export function basicType(){
  // bool型
  let flag: boolean = false;
  
  // number型
  let decimal: number = 256;
  let hex: number = 0xfff;
  let binary: number = 0b0000;
  let octal: number = 0o123;
  
  // string型
  let color: string = "white";
  color = 'black';
  let myColor: string = `my color is ${color}`

  // list
  let list1: number[] = [1, 2, 3];
  let list2: Array<number> = [1, 2, 3];

  // tnple
  let x1: [string, number]
  x1 = ['hello', 10] 
  // x1 = [10, 'hello'] // ERROR
  console.log(x1[0].substr(1))
  // console.log(x1[1].substr(1)) // ERROR
  let x2: string| number
  x2[3] = 'hoge';
  console.log(x2[5].substr())
  // x[6] = true // ERROR

  let whatever: any = 0;
  whatever = 'something'
  whatever = false

  // let ceratainlyNumbers: number[] = ['0']// ERROR
  let ceratainlyNumbers: number[] = [0]
  let maybeNumbers: any[] = ['0']
  let probaplyNumbers: unknown[] = ['0']

  ceratainlyNumbers[0].toFixed(1) // OK
  maybeNumbers[0].toFixed(1) // Runtime ERROR
  // probaplyNumbers[0].toFixed(1) // ERROR

  // "strictNullChecks": trueなら役立つ
  let hoge: null = null
  let fuga: undefined = undefined

  // object
  let objectBrace: {}
  let objectType: object
  objectBrace =true
  objectBrace = 0
  // objectType = false // ERROR
  // objectType = 0 // ERROR
}

// void型
function logger(message: string): void{
  let unsable: void = undefined; // input this or null
  console.log(message)
}

// never 戻り値を得てはいけない
function error(message: string): never{
  throw new Error(message)
}

function infiniteLoop(): never{
  while(true){
  }
}
