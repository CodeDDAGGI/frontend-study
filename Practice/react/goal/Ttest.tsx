import React, { ChangeEvent } from 'react'

interface Tprops {
  T:{
    title: string;
    explanation:string;
  }

  onCreate : ()=>void;
  onChange: (e:ChangeEvent<HTMLInputElement>)=> void;
}

export default function Ttest({T, onCreate, onChange}: Tprops) {
  return (
    <div>
      <input 
        type="text"
        name='title'
        value={T.title} 
        placeholder = '입력하세요'
        onChange={onChange}
        />
        <input 
          type="text"
          name='explantion'
          value={T.explanation}
          placeholder='입력하세요' 
          onChange={onChange}/>
          <button onClick={onCreate}>목표추가</button>

    </div>
  )
}
