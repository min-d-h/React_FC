import React, {useState} from 'react';
import styled, {keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    color: blue;

    &:hover {
        color: red; // & <- 나 자신을 말한다. :hover 마우스를 올렸을 때
    }

    & ~ & {
        background: tomato; // & <- 나 자신이 'Thing'이고 주변에 'Thing'이 있으면 tomato가 된다
    }

    & + & {
        background: lime; // & <- 나 자신이 'Thing'이고, 그 다음이 Thing이면 라임이 된다.
    }

    &.something {
        background: orange; // & <-나 자신이고 className으로 something이면 orange ( Thing 이 아니고 div면 해당되지 않는다.)
    }

    .something-else & {
        border: 1px solid; //
    }
`;

const Input = styled.input.attrs((props) => ({
    type: 'text', 
    size: props.size || '1em',
}))`
  // attrs를 이용해서 props로부터 받은 내용을 토대로 
    border: 2px solid palevioletred;
    margin: ${(props) => props.size};
    padding: ${(props) => props.size};
`;

// PasswordInput 이름으로 styled의 Input안에 있는 attrs(속성)의 내용을 변경한다.
const PasswordInput = styled(Input).attrs({
    type: 'password',
})`
    // similarly, border will override Input's border
    border: 2px solid aqua;
`;
// transform 을 해준다 from -> to로 0도 시작 360도 까지
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 0.5s linear infinite; //rotate라는 이름으로 선언해준것을 불러와 linear하게 infinite하게 돌린다.
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// 버튼 변경
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.color}; //theme값을 받아서 그것을 main으로 쓴다.
  border: 2px solid ${props => props.theme.borderColor};
`;

// 버튼의 색상을 변경할 때 기본값을 주고, 그 버튼을 컴포넌트 이름으로 만들면 적용 되고
// 버튼에 State 값을 변경할 떄는
// onClick이벤트를 이용해서 setState에 값을 저장하게 되면, 상태를 확인할 수 있다.
Button.defaultProps = {
  theme: {
    color: "red",
    borderColor:"blue"
  }
}
const theme = {
  color: "green",
  borderColor: "orange"
};
const defaultTheme = {
  color: "orange",
  borderColor: "orange"
};
const gTheme = {
  color: "green",
  borderColor: "green"
};

// css에 해당되는 영역 전체에 css를 입힐 수 있다. global영역에 모두 적용되는 컴포넌트
// GlobalStyle 이녀석 마져도 컴포넌트이기 대문에
const GlobalStyle = createGlobalStyle`
  div {
    background-color: pink;
  }
`

export default function StyledComponents2() {
  const [theme, setTheme] = useState(defaultTheme);
    return (
        <>
            <GlobalStyle />
            <div>
              <button onClick={() => setTheme(gTheme)}>green</button>
              <button onClick={() => setTheme(defaultTheme)}>default</button>
            </div>
            <div>
                <ThemeProvider theme={theme}> 
                    <Button>Normal</Button>
                {/* 
                ThemeProvider로 감싼 녀석의 theme의 값이 theme면
                그 안에 있는 값도 같은것을 반환한다.
                */}
                    <Button>Themed</Button>
                </ThemeProvider>
            </div>
            
            <Rotate>&lt; 💅🏾 &gt;</Rotate> <br />

            <Input placeholder="A bigger text input" size="2em" />
            <br />
            {/* Notice we can still use the size attr from Input */}
            <PasswordInput placeholder="A bigger password input" size="2em" />
            <Thing>Hello world!</Thing>
            <Thing>How ya doing?</Thing>
            <Thing className="something">The sun is shining...</Thing>
            <Thing>How ya doing?</Thing>
            <div className="something">My name is div let's in patty</div>
            <Thing>How ya doing?</Thing>
            <div>Pretty nice day today.</div>
            <Thing>Don't you think?</Thing>
            <div className="something-else">
                <Thing>Splendid.</Thing>
            </div>
        </>
    );
}
