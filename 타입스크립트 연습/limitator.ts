class test{
  public name : string; //어디서든 접근
  private height : number; // 클래스 내부에서만 접근 가능
  protected hobby : string; // 해당 클래스와 하위클래스만 접근 가능
  private secrethobby : string; 

  constructor(name:string , height:number, hobby:string , secrethobby : string) {
    this.name = name;
    this.height = height;
    this.hobby = hobby;
    this.secrethobby = secrethobby;
  }

  public humanInfo(){ // 사람 정보 메서드
    console.log(`이름 : ${this.name}`);
    console.log(`키 : ${this.height}`);
    console.log(`취미 : ${this.hobby}`);
    console.log(`숨겨진 취미 ${this.secrethobby}`);
  }
}

let hong = new test('홍길동',180,'독서','운동');
hong.humanInfo();