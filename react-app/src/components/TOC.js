import React, { Component } from 'react';

class TOC extends Component { // table of content
   shouldComponentUpdate(newProps, newState) {
      // state의 원본을 변경하면 성능 개선에 좋지 않은 이유
      if (this.props.data === newProps.data) {
         return false;
      }
      return true;
   }

   render() {
      const data = this.props.data;
      let lists = [];

      for (let i = 0; i < data.length; i++) {
         // key는 리액트가 내부적으로 필요해서 요청하는 데이터
         lists.push(
            <li key={data[i].id}>
               {/* 1. 속성으로 추가 */}
               {/* <a
                  href={"/content/" + data[i].id}
                  data-id= {data[i].id}
                  onClick={function (e) {
                     e.preventDefault();
                     this.props.onChangePage(e.target.dataset.id);
                  }.bind(this)}
               >{data[i].title}</a> */}

               {/* 2. bind로 추가 */}
               <a
                  href={"/content/" + data[i].id}
                  onClick={function (id, e) {
                     e.preventDefault();
                     this.props.onChangePage(id);
                  }.bind(this, data[i].id)}
               >{data[i].title}</a>
            </li>
         );
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
