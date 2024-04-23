import React from 'react'

export default function Naver() {
  
  return (
    <>
    <div style={{
      
    }}>
      <div>
      <select name="lan" id="lan" 
      style={{
        border: '1px solid rgb(170,170,170)',
        height:'30px',
        width: '100px',
        margin: '0px',
        padding: '0px',
        float:'right'
      }}>
        <option value="ko">한국어</option>
        <option value="ko">English</option>
        <option value="ko">中文(简体)</option>
        <option value="ko">中文</option>
      </select>
      </div>
      <div>
      <h1 style={{
      padding: '80px',
      fontSize: '45px',
      color:'rgb(3,199,90)',
      fontWeight:'900',
      textAlign:'center'
    }}>NAVER</h1>
      </div>
      <div id='container' style={{
        
      }}>
      <button>ID 로그인</button>
      <button>일회용 번호</button>
      <button>QR 코드</button>
      </div>
    </div>

   

    </>
  )
}
