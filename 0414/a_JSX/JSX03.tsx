import React from 'react'

export default function JSX03() {
  const url = 'https://cdn.pixabay.com/photo/2019/04/10/23/51/animal-4118585_1280.jpg';
  
  const baseUrl = 'https://cdn.pixabay.com/photo/';

  const dog = {
    date : '2019/04/10/',
    description : '23/51/',
    imageId: 'animal-4118585_1280',
    name : '도베르만',
    thema: {
      backgroundColor: 'gray',
      color: 'pink'
    },
    imageThema: {
      width: '200px',
      height : '150px'
    }
  }

  return (
    <div style={dog.thema}>
      <p>{dog.name}'s Picture</p>
      {/* JS의 표현식을 중괄호 내에서 작성 */}
      <img src={baseUrl + dog.date + dog.description + dog.imageId + '.jpg'} alt={dog.name} width={dog.imageThema.width}
      height={dog.imageThema.height} 
      />
      <hr />
    </div>
  )
}
