import React from 'react'

export default function List() {
    const todos = [
        {id:1, text:"aaaa"},
        {id:2, text:"bbbb"},
        {id:3, text:"cccc"},
        {id:4, text:"dddd"}
    ];

    const Item = (props) => {
        return <li>{props.text}</li>
    }
    const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);
    // key라는 값은 react가 해당 고유값을 확인하기 위해서 사용하는것이지, 이 값을 넘기거나 하지 않는다.
    // key는 attribute 로 해당, 분류된다.

    // todoList에만, key값을 주는 이유는 형제 사이에서만 고유하면 되기때문에,

    return (
        <>
            {todoList}
        </>
    )
}
