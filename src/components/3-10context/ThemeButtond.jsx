// import React, { Component } from 'react';
// import { ThemeContext } from './ThemeContext';

// class ThemeButtond extends Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;

//     return (
//       <>
//         <button 
//         {...props}
//         onClick={props.changeTheme} 
//         style={{backgroundColor:theme.background, color: theme.foreground}}>
//         버튼입니당~
//         </button>
//       </>
//     );
//   }
// }

// // context 지금 class컴포넌트 안에서 어디서 사용되는 지 모르니까

// ThemeButtond.contextType = ThemeContext
// // 어디서든 가져다 쓸 수 있도록 만들었다.

// export default ThemeButtond;

import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemeButtond(props) {
  const theme = useContext(ThemeContext);

  return (
    <button 
    {...props}
    onClick={props.changeTheme} 
    style={{backgroundColor:theme.background, color: theme.foreground}}>
    버튼입니당~
    </button>
  );
}
