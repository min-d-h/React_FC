import React, { useState, useEffect } from 'react'

export default function FunctionComponent() {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date())
        //setDate에 업데이트 시켜주기 위해 작성
    }

    // 컴포넌트에 들어오면서부터 화면에 그리기 시작한다. [] 빈값이니 처음에 한번~
    useEffect(() => {
        const interval = setInterval(() => tick(), 1000 )

    // clearInterval은 그리고 난 후 되돌려 줄때 clear한다
    return () => {
        clearInterval(interval);
    }
    }, [])

    // 함수형 컴포넌트는 useState를 set할때 초기화 해주고
    return (
        <div>
        <h1>This, Function Component</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}


// 현재 시간 불러오는거