import React, { useState } from 'react'
import './Style.css'

export default function NaverRe() {

  const [select, setSelect] = useState<'id'|'ot'|'qr'>('id');
  // const [rendering,setRendering] = useState<>();
  return (
    <>
    <div className='main'>
      <div className='main-block'>
        <div className='lan'>
          <select className='lang'>
              <option value="ko">한국어</option>
              <option value="ko">English</option>
              <option value="ko">中文(简体)</option>
              <option value="ko">中文</option>
          </select>
        </div>
        <div>
          <h1 className='logo'>NAVER</h1>
        
          <div className='login-btn'>
            <button className='id-login'>ID 로그인</button>
            <button className='one-login'>일회용 번호</button>
            <button className='QR-login'>QR 코드</button>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}
