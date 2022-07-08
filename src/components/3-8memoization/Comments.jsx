import React, {useCallback} from 'react'
import CommentItem from "./CommentItem"

export default function Comments({commentList}) {
  const handleClick = useCallback(() => {
    console.log('눌림');
  }, []);
  return (
    <>
      {
        
        commentList.map(comment => <CommentItem
          key={comment.title}
          title={comment.title}
          text={comment.text}
          likes={comment.likes}
          // onClick={() => console.log('눌림')}
          onClick={handleClick}
          />        
          )
      }
    </>
  )
}


//comment아이템을 계속 그리는 녀석