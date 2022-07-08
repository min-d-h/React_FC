import React, { useState, useEffect } from 'react'
import Comments from "./Comments"

const commentList = [
  {id:1, title:"title1", text:"message1", likes:3},
  {id:2, title:"title2", text:"message2", likes:221},
  {id:3, title:"title3", text:"message3", likes:2},
  {id:4, title:"title4", text:"message4", likes:60},
  {id:5, title:"title5", text:"message5", likes:31},
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);

  useEffect(() => {
    const interval = setInterval(() =>{
      setComments((prevComments) => [
        ...prevComments,
        {
          title: `title${prevComments.length + 1}`, 
          text: `message${prevComments.length + 1}`,
          likes: `likes${prevComments.length +1}`
        }
      ])
    }, 2000)
  
    return () => {
      clearInterval(interval);
    }
  }, [])
  

  return (
    <>
      <Comments commentList={comments} />
    </>
  )
}
