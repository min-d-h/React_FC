import React from 'react';

export default function Event() {
    const buttonClick = (e) =>{
        console.log("this. buttonClick event on");
    }
    const ClickCheck1 = () =>{
        console.log("ClickCheck1");
    }
    const ClickCheck2 = () =>{
        console.log("ClickCheck2");
    }
    const handleClickBubble = () =>{
        console.log("handleClickBubble");
    }
    const mouse = (e) => {
        console.dir(e);
    }
    return (
        <div onClickCapture={ClickCheck1}>
            <div onClickCapture={ClickCheck2} onClick={handleClickBubble}>
                <button onClick={buttonClick} onMouseLeave={mouse}>click</button>
            </div>
        </div>
    );
}
