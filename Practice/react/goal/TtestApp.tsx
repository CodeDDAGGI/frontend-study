import React, { ChangeEvent, useRef, useState } from 'react'
import Ttest from './Ttest';
import TtestList from './TtestList';

interface test {
  id:number;
  title: string;
  explanation:string;
  active:boolean;
}

const initialtests : test[] =[
  {
    id: 1,
    title: '책 10권 읽기',
    explanation:'경제 서적 10권 읽기',
    active:true
  },
  {
    id: 2,
    title: '자격증따기',
    explanation:'공부',
    active:false
  },
  {
    id: 3,
    title: '취업하기',
    explanation:'취직준비',
    active: false
  },
]

export default function TtestApp() {
  const [tests, setTests] = useState<test[]>(initialtests);
  

  const [testInput , setTestInput] = useState({
    title:'',
    explanation:''
})

  const nextId = useRef(4);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    setTestInput({
      ...testInput,
      [name]: value
    });
  }

  const handleCreate = () => {
    const newTest = {
      id:nextId.current,
      title: testInput.title,
      explanation: testInput.explanation,
      active: false
    }

    setTests(tests.concat(newTest))

    setTestInput({
      title:'',
      explanation:''
    });

    nextId.current += 1
  }

  const handleRemove = (id:number) => {
    setTests(tests.filter(test => test.id !== id));
  }

  const handleToggle = (id:number) => {
    setTests (
      tests.map(test => 
        test.id === id? {...test, active :!test.active} :test
      )
    )
  }
  return (
    <div>
      <Ttest 
        T={testInput}
        onChange={handleChange}
        onCreate={handleCreate}
        />

      <TtestList 
        tests= {tests}
        onRemove = {handleRemove}
        onToggle = {handleToggle}
      />
    </div>
  )
}
