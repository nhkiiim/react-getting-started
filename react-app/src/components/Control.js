import React, { Component } from 'react';

class Control extends Component {
   render() { // js class 안에서는 return 생략 가능
      // return은 하나의 최상위 태그로 이루어져야함
      return (
         <ul>
            <li>
               <a href="/create" onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode('create');
               }.bind(this)}>create
               </a>
            </li>
            <li>
               <a href="/update" onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode('update');
               }.bind(this)}>update
               </a>
            </li>
            <li>
               <input type="button" value="delete" onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode('delete');
               }.bind(this)}>
               </input>
            </li>
         </ul>
      );
   }
}

export default Control;