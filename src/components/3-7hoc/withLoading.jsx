import React, {useState, useEffect} from 'react'

export default function withLoading(Component) {

  const WithLoadingComponent = (props) => { // ---A

  const [loading, setLoading] = useState(true)
  const [timeout, setTimeout] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
  
    return () => clearTimeout(timer);
  }, []);

  return loading ? <p>loading ....</p> : <Component {...props}/>;
  //Component가 필요한 props가 있다면, return하는애 한테 주입 해 줄께 가져다가 써.
  };

  return WithLoadingComponent; // ---B
}

// HOC를 사용하기 위해서 새로운 컴포넌트 이름을 주입해준다. ---A
// return 방식이 아닌, 함수형컴포넌트를 사용해서 만들어야 한다.
// 그리고 새로 선언한 컴포넌트 이름을 return해준다. ---B