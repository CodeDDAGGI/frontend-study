// 모듈 불러오기
// import
import {add, subtract} from './module';

console.log(add(3,5)); // 8
console.log(subtract(10,5)); // 5

import Calcu from './module';
const calculator = new Calcu();
console.log(calculator.addd(5,15)); // 20