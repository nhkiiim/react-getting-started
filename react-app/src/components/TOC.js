import React, { Component } from 'react';

class TOC extends Component { // table of content
   render() {
      const data = this.props.data;
      let lists = [];

      for (let i = 0; i < data.length; i++) {
         // key는 리액트가 내부적으로 필요해서 요청하는 데이터
         lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
      }

      return (
         <nav>
            <ul>
               {lists}
            </ul>
         </nav>
      );
   }
}

export default TOC; 
