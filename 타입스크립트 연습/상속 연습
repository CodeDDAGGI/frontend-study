class test{
	name:string;

	constructor(name:string){
		this.name = name;
	}
	
	text1(write:string=""){
	console.log(`${this.name}이 ${write}를 합니다`);	
  }
}
class test1 extends test {
	
	constructor(name:string){
		super(name);
	}
	
	text2(writenumber:number= 0){
		console.log(`${this.name}이 글을 ${writenumber}번을 수정합니다.`);
	}
}
let write1 = new test1('홍길동');
console.log(`이름: ${write1.name}`);
write1.text1('문서 작성(을)');
write1.text2(2);

console.log(`이름: ${write1.name}`);
write1.name = '김길동';
write1.text1('삭제');
write1.text2(1);
