import React from 'react'

export default function Naver() {
  
  return (
    <>
    <div style={{
      width:'100%',
      display: 'flex',
      flexDirection:'column',
      marginTop:'21px',
    }}>
      <div style={{
        width:'768px',
      }}>
        <div>
        <div style={{
          display:'flex',
          justifyContent:'flex-end'
        }}>
          <select name="lan" id="lan" 
            style={{
                border: '1px solid #dadada',
                height:'30px',
                width: '96px',
                margin: '0px',
                padding: '0px',
                float:'right',
                color:'#4e4e4e'
                }}>
              <option value="ko">한국어</option>
              <option value="ko">English</option>
              <option value="ko">中文(简体)</option>
              <option value="ko">中文</option>
          </select>
        </div>
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

        <form>
        <section style={{
          paddingTop:'60px',
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }}>
          <div style={{
            width:'465px',
            height:'48px',
            border:'solid 1px #dadada',
            background:'white'
          }}>
            <input placeholder ="Username" type="text" style={{
              border:'none',
              width:'430px',
              marginTop:'10px',
              fontSize:'14px',
              marginLeft:'10px',
              height:'30px'
            }} />

          </div>

          <div style={{
            marginTop: '13px',
            width:'465px',
            height:'48px',
            border:'solid 1px #dadada',
            background:'white'
          }}>
          <input placeholder ="Password" type="text" style={{
              border:'none',
              width:'430px',
              marginTop:'10px',
              fontSize:'14px',
              marginLeft:'10px',
              height:'30px'
            }} />
            
          </div>


          <div style={{
            paddingTop: '13px'
          }}>
            <button style={{
              width:'465px',
              height:'48px',
              fontSize:'18px',
              background:'#04c75a',
              color:'white',
              border:'solid 1px #06b350'
            }}>
              Sign in
            </button>
          </div>

          </section>
        </form>

          <div style={{
            width:'768px',
            height:'52px',
            color:'#4e4e4e',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderBottom:'solid 1px #dadada',
            
            
          }}>
            <span style={{
              color:'#9ba1a3',
              fontSize:'14px',
              padding:'0px 10px',
              lineHeight:'25px',
              borderRight:'1px solid #dadada',
            }}>비밀번호 찾기</span>
            <span style={{
              color:'#9ba1a3',
              fontSize:'14px',
              padding:'0px 10px',
              lineHeight:'25px',
              borderRight:'1px solid #dadada',

            }}>아이디 찾기</span>
            <span style={{
              color:'#9ba1a3',
              fontSize:'14px',
              padding:'0px 10px',
              lineHeight:'25px',
            }}>회원가입</span>
          </div>

        
        
        

        <footer>
          <div>
            <span>
              <img src="" alt="" />
              Copyright © NAVER Corp. All Rights Reserved.
            </span>
          </div>
        </footer>

      </div>
    </div>

   

    </>
  )
}
