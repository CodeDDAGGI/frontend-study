import React from 'react'

interface Ttest{
  id:number;
  title:string;
  explanation:string;
  active:boolean
}

interface TtestProps{
  tests: Ttest[]

  onRemove:(id:number) => void;

  onToggle:(id:number) => void;
}

export default function TtestList({tests, onRemove, onToggle}:TtestProps) {
  return (
    <>
      {tests.map((test)=> (
        <div key={test.id}>
          <span 
            style={{
              cursor:'pointer',
              color:test.active ? 'green' : 'black'
            }} onClick={()=> onToggle(test.id)}>

              {test.title} - {test.explanation}
            </span>

            <button onClick={()=> onRemove(test.id)}> 삭제 </button>
        </div>
      ))      }
    </>
  )
}
