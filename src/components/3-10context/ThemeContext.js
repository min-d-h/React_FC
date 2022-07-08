import React from 'react'

export const themes = {
  light : {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark : {
    foreground: "#ffffff",
    background: "#222222",
  },
}

export const ThemeContext = React.createContext(themes.dark); 
//dark를 기본값으로 가진 ThemeContext를 하나 만들었다.
// provider로 감싸져 있는 자식이라면 provider가 선언한 그 값을 사용하고,
// provider외부에 있는 녀석이라면, 선언해준 default값인 dark를 사용하겠다.