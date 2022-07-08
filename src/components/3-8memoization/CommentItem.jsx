import React, {memo, Profiler, useState, useMemo} from 'react'
import "./CommentItem.css"

function CommentItem({id, title, text,likes, onClick}) {
  //나의 상태를 체크한다.
  const [click, setClick] = useState(0);
  //Profiler 성능분석 도구 onRenderCallback를 사용해서 내부 지표 확인 가능
  function onRenderCallback(
    id, // 방금 커밋된 Profiler 트리의 "id"
    phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
    actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
    baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간 
    startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
    commitTime, // React가 해당 업데이트를 언제 커밋했는지
    interactions // 이 업데이트에 해당하는 상호작용들의 집합
  ) {
    
    console.log(`actualDuration(${title}: ${actualDuration})`)
  }

  const handleClick = () => {
    onClick(); // 전달받은 props의 함수까지 전달 받는다.
    setClick((prev => prev +1))
    // alert (`${title} 눌림`)
  }

  const rate = useMemo(() => { //usememo는 return해주는 값을 전달함 hook으로 감쌌다.
    console.log("rate")
    return click > 10 ? 'Good' : 'bad'
  }, [click])

  return (
    <>
      <Profiler id="CommentItem" onRender={onRenderCallback}>
        <div className="CommentItem" onClick={handleClick}>
          <div>제목 : {title} </div>
          <div>내용 : {text} </div>
          <div>{likes}</div>
          <div> {rate}</div>
          <div>{click}</div>
        </div>
      </Profiler>
    </>
  )
}


export default memo(CommentItem);