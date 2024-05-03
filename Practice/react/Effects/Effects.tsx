import React, { useEffect, useState } from 'react'

type Posts = {
  id:number;
  title:string;
  body:string;
}

export default function Effects() {

  const [posts, setPosts] =useState<Posts[]>([]);

  const [loading,setLoading]=useState<boolean>(true);

  const [error ,setError] = useState<string|null>(null)

  const [searchTerm, setSearchTerm] = useState <string>('')

  async function fetchPosts() {
    try{  
      // HTTP 요청을 보낸 후 받은 응답(response) 객체의 속성 중 하나
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

      if(!response.ok) {
        throw new Error(`HTTP error status : ${response.status}`)
      }

      const data = await response.json();

      setPosts(data);
      setLoading(false);
    }catch(error) {
      setError((error as Error).message);
      setLoading(false)
    }
  }

  useEffect(()=> {
    fetchPosts();
  },[])

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

  if(loading) {
    return <div>게시물 로딩중입니다</div>
  }

  if(error) {
    return <div>Error : {error}</div>
  }
  return (
    <div>
      <h3>Posts 게시물</h3>

      <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='검색어를 입력'
        />

        <ul>
          {filteredPosts.map(post => (
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}
