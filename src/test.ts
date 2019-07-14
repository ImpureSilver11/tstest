// ~ 1-2-10
// // デフォルトany型
// export function test(arg){
//   let hoge = null
//   hoge = arg
//   return hoge
// }

// ~ 1-2-14
// export function test1(){
//   return 'test1'
// }
// export function test2(){
//   return { value: 'test2' }
// }

// 1-2-17
// ライブラリ型定義の利用 https://definitelytyped.org/
import { sampleText, sampleFunction } from './sample'

const a = sampleFunction
const b = sampleText
