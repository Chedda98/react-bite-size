import React, { Component } from 'react';
class Header extends Component { 
  render() { //HTML을 웹 페이지에 렌더링 한다. 
    return ( 
    <div> 
      <header> 
        <h1>여긴 헤더임!</h1> 
      </header> 
    </div>
    );
  }
} 

export default Header; //다른 JS파일에서 불러올 수 있도록 내보내주기
