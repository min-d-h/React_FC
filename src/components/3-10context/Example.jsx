import React, { Component } from 'react'
import {ThemeContext, themes} from './ThemeContext'
import ThemeButtond from './ThemeButtond';

export default class Example extends Component {
  constructor(...props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
    // 상태값에다가 기본 theme를 설정한다.
    this.toggleTheme = () => {
      this.setState((prev) => ({
        theme: prev.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
    // theme를 바꾸는 함수
  }
  render() { 
    return ( 
      <>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeButtond changeTheme={this.toggleTheme}/>
          <ThemeContext.Consumer>
            {(theme) => (
            <div 
              style={{height: 300, width: "100%", backgroundColor: theme.background}}>
              </div>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
          <ThemeButtond />
      </>
    )
  }
}
