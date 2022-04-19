import React, { Component } from 'react';
class Main extends Component { 
  render() { //HTML을 웹 페이지에 렌더링 한다. 
    return ( 
    <div> 
      <main> 
        <h1>안녕! 나는 체다!</h1> 
      </main> 
    </div>
    );
  }
} 

export default Main; //다른 JS파일에서 불러올 수 있도록 내보내주기
