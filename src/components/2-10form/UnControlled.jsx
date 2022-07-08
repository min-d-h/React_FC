import React, { useRef } from 'react';

export default function UnControlled() {
    const fileInputRef = useRef(null); 
    // 변수가 아니라, 레퍼런스라는것을 명시해주면, current로 뽑아내는 것을 알 수 있다.

    function handleSubmit(e) {
        e.preventDefault();
        alert( `Selected file - ${fileInputRef.current.files[0].name}`);
    } 
    // value에 대해 모른다. 근데 어떻게 알고있는가?
    // 
    return (
        <div>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>
                    Upload file:
                    <input type="file" ref={fileInputRef} />
                    {/* ref를 넘기면서 관련된 정보까지 넘기게 된다. 어디로?  
                        function handleSubmit 을 이용해서
                        레퍼런스를 잉요해 담기게 된다.
                    */}
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
