import React from 'react'
import { FaStar } from "react-icons/fa";

interface ItemType {
  // 여행을 위한 짐 싸기
  // 짐 항목의 이름, 준비 여부를 props로 전달 받음
  name: string;
  isPacked : boolean;
}

function Item( { name , isPacked } : ItemType ) {

  //! if 조건문을 사용한 조건부 렌더링
  // isPacked가 true의 값인 경우 : 짐 싸기 완료
  // if (isPacked) {
  //   return <li className='item'>{name} 🖊</li>;

    // 만약 조건부로 아무것도 반환하지 않을 경우
    // : null 반환
    // return null;
  // }else{

  // isPacked가 false인 경우
  // return <li className='item'>{name} </li>;
  // }

  //! 삼항 연산자를 사용한 조건부 렌더링*****
  // return(
  //   <li className='item'>
  //     {/* HTML 코드 내에서 JS 문법 사용시 {} */}
  //     {isPacked ? name + '⚔' : name}
  //   </li>
  // )

  //! 논리 연산자(&&)를 사용한 조건부 렌더링*****
  return(
    <li className='item'>
      {/* 
        && 연산자
        : A && B
        - 둘 다 true여야 true값이 반환
        - A의 값이 false인 경우 B의 값이 출력? X
        - A의 값이 true인 경우 B의 값이 출력? O
      */}
      {name} {isPacked && '🎁'} 
    </li>
  )
}

// react-icons 외부 라이브러리 사용
// : 리액트에서 다양한 아이콘을 사용하기 위한 라이브러리
// npm install react-icons
export default function Rendering01() {
  const score = 1;
  return (
    <section>
      <p>여행용 짐 목록</p>
      <ul>
        <Item 
          name='과자'
          isPacked = {true} // true는 값 중괄호
        />
        <Item 
          name='음료수'
          isPacked = {true} 
        />
        <Item 
          name='김밥'
          isPacked = {false} 
        />
      </ul>

      {/* 
        score 점수가
        - 0 이상인 경우 별이 출력
        - 0 미만인 경우 출력 X

        : && 연산자 사용
      */}
      <div style={{ margin: '20px', border: '2px solid black' }}>
        {score >= 0 && <FaStar />}
      </div>
    </section>
  )
}
