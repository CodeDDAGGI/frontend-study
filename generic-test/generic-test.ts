// 학생 성적 기입 프로그램

//? 학생 정보
// : name(이름) , age(나이), grade(등급) , record(성적)

//? 학생 성적 프로그램
// : 학생 수 추가(addStudent)
// : 학생 성적 검색 (findStudent)
// : 학생 미응시자 제거(removeStudent)
// : 학생 성적순 나열(filterRecordStudent)
// : 상위권 3명 필터처리(filterHeightRecord)
// : 학생 성적 평균 계산(StudentAverage)

class Student {

  constructor (
  public name : string,
  public age : number,
  public grade : string,
  public record : number
  ) {}
}

class StudentMain<T extends Student>{
  private students : T[] = []; // Student 객체들을 저장할 배열

  //? 학생 추가
  // push() : 배열 끝에 요소 추가
  addStudent(student:T){
    this.students.push(student);
  }

  //? 학생 이름을 기준으로 검색
  // find() : 주어진 조건을 만족하는 배열의 첫 번째 요소 반환
  findStudent(name:string):T |undefined{
    return this.students.find(student=>student.name === name);
  }

  //? 학생 제거-성적(record)기준
  // findIndex() : 주어진 조건을 만족하는 배열의 첫 번째 요소의 인덱스 반환
  // splice() : 배열의 요소를 추가하거나 제거, 제거된 요소를 반환 
  removeStudent(name :string):void{
    let index = this.students.findIndex(student => student.name === name);
    if(index !== -1){
      this.students.splice(index, 1);
    }
  }

  //? 학생 성적순 나열
  // sort() 메서드 : 배열의 요소를 정렬
  // slice() 메서드 : 배열의 일부분을 추출하여 새로운 배열을 반환
  filterRecordStudent(): T[]{
    return this.students.slice().sort((a,b) => b.record - a.record)
  }



  //? 학생 성적 평균 계산
  // 배열의 각 요소에 대해 콜백함수 실행, 하나의 결과값을 반환
  StudentAverage():number{
    if (this.students.length === 0) return 0;
    
    const totalRecord = this.students.reduce((acc, cur) => acc + cur.record,0);
    let average = 0;

    return average / this.students.length;
  }

  filterHeightRecord():T[]{
    const sortStudents = this.students.sort((a,b) => b.record-a.record);
    const topStudents = sortStudents.slice(0,3);
    return topStudents;
  }

  
}


let StudentManage = new StudentMain<Student>();

StudentManage.addStudent(new Student ('홍길동',16,'A',90));
StudentManage.addStudent(new Student ('김길동',17,'B',85));
StudentManage.addStudent(new Student ('고길동',16,'D',55));
StudentManage.addStudent(new Student ('이길동',17,'C',72));

console.log(StudentManage.findStudent('홍길동'));
console.log(StudentManage.findStudent('고길동'));
console.log(StudentManage.findStudent('일지매'));

StudentManage.removeStudent('홍길동');
console.log(StudentManage.findStudent('홍길동'));

StudentManage.StudentAverage()
StudentManage.filterHeightRecord();
// 성적 순으로 나열
// forEach() : 배열의 각 요소에 대해 주어진 함수를 실행 (for문이랑 느낌 비슷)
const sortStudents = StudentManage.filterRecordStudent();
sortStudents.forEach(student => {
  console.log(`이름 : ${student.name} , 성적 : ${student.record}`);
})
