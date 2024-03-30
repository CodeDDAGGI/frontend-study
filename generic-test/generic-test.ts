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
  public stnum : number,
  public age : number,
  public grade : string,
  public record : number
  ) {}
}

class StudentMain<T extends Student>{
  private students : T[] = []; // Student 객체들을 저장할 배열

  //? 학생 추가
  addStudent(student:T){
    this.students.push(student);
  }

  //? 학생 이름을 기준으로 검색
  findStudent(name:string, stnum: number):T |undefined{
    return this.students.find(student=>student.name === name);
  }

  //? 미응시자 학생 제거-성적(record)기준
  removeStudent(record:number):void{
    let index = this.students.findIndex(student => student.record === record);
    if(index !== -1){
      this.students.splice(index, 1);
    }
  }

  //? 학생 성적순 나열
  filterRecordStudent(): T[]{
    return this.students.sort(student => student.record)
  }

  //? 학생 성적 평균 계산
  StudentAverage():number{
    if
  }
}
