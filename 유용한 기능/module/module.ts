export {add, subtract};

function add(x: number, y: number): number {
  return x + y;
}

function subtract(x: number, y: number): number {
  return x - y;
}

// import default
// 클래스,객체,함수 등을 보낼때 사용
export default class Calcu {
  addd(x:number , y:number): number {
    return x + y;
  }
}