import React from 'react'

function UserGreeting (props) {
    return <h1>{props.name && props.name + ","} welcome {props.count ? `It's ${props.count} time` : null }</h1>
    // props.name &&  < 이것이 있을 때 바로 뒤에 것을 실행.
}
function GuestGreeting (props) {
    return <h1>please Sing up</h1>
}
function Greeting (props) {
    return props.isLoggedIn ? <UserGreeting name="dddd" count={0} /> : <GuestGreeting />
}
export default function conditional() {
    
    const isLoggedIn = true;
    // const isLoggedIn = false;

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    )
}
