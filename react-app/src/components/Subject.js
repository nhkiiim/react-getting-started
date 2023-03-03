import React, { Component } from 'react';

class Subject extends Component {
   render() { // js class 안에서는 return 생략 가능
      // return은 하나의 최상위 태그로 이루어져야함
      return (
         <header>
            <h1><a href="/">{this.props.title}</a></h1>
            {this.props.sub}
         </header>
      );
   }
}

export default Subject;