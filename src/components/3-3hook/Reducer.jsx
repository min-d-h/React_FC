import React,{useReducer} from 'react'

export default function Reducer() {
  // const initState = {count:0};
  const initState = {count:0, name:"kak"};

  function reducer(state, action) {
    switch(action.type){
        case 'reset':
          return initState;
        case 'increment':
          return { count : state.count + 1, name:"hoho"};
        case 'decrement':
          return { count : state.count - 1, name:"qqqqq"};
          default : 
            throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      Count : {state.count}
      Name: {state.name}
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
      <button onClick={() => dispatch({type: "decrement"})}>--</button>
      <button onClick={() => dispatch({type: "increment"})}>++</button>

    </div>
  )
}
