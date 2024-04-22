import React, { useState } from 'react'
import index from '..';

//! 온라인 투표 시스템

//? 문제 요구 사항
// - 후보자 목록은 객체의 배열로 관리
// - 각 객체는 name과 votes 두 가지 키를 가짐
// - 사용자는 후보자 목록 중 하나를 선택하고 투표
// - 투표 버튼을 누르면 선택된 후보자의 투표 수가 증가

interface Candidate {
  name : string;
  votes: number;
}

export default function Practice02() {
  
  const [ List , setList ] = useState<Candidate[]>([])
  const [ candidate,setCandidate] = useState<string>("");

  const addCandidate= () => {
    if(candidate.trim() !== ''){
      const newCandidate :Candidate = {
        name : candidate,
        votes : 0 // 득표수 0으로 설정
      };

      // 후보자 리스트 추가
      setList([...List, newCandidate]);

      // 입력필드 초기화
      setCandidate('');
    }
  }
  
  const removeCandidate = (index:number) =>{
    const newCandidate = [...List];
    newCandidate.splice(index,1);
    setList(newCandidate);
  }
  
  const voteCandidate = (index: number) => {
    const newCandidates = [...List];
    newCandidates[index].votes++;
    setList(newCandidates);
  }


  return (
    <div>
      <h2>후보자 등록</h2>
      <input 
        type="text"
        value={candidate}
        // 속성은 입력 요소의 값이 변경될 때 실행할 함수
        onChange={(e) => setCandidate(e.target.value)}
        style={{
          width:'300px',
          height:'20px',
          textAlign:'center'
        }}
      />
      <button onClick={addCandidate}>등록</button>

      <ul style={{listStyleType:"none"}}>
      {List.map((candidate, index) => (
          <li key={index}>
            {candidate.name} - 득표수: {candidate.votes}
            <button onClick={() => voteCandidate(index)}>투표하기</button>
            <button onClick={() => removeCandidate(index)}>후보 삭제</button>
          </li>
        ))}
      </ul> 
    </div>
  )
}