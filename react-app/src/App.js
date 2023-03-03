import React, { Component } from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
//import Subject from './components/Subject';
import './App.css';

// js 문법 아님! -> jsx (create-react-app이 변환 해줌)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'read',
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!! ^0^' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText...' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ]
    }
  }

  // state의 값이 바뀌면 그 state를 가진 컴포넌트의 render()가 호출 -> 하위 컴포넌트도 render() 호출
  render() {
    console.log('App render~!');

    let _title, _desc = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
          </Subject> */}
        <header>
          <h1><a href="/" onClick={function (e) {
            e.preventDefault(); // a 태그의 기본적인 동작 금지
            
            // this.state.mode = 'welcome';
            // 1. 이번트 안에서 this는 아무것도 먹지 않음 -> bind(this) 추가
            // 2. 직접 접근하지 말고 setState 이용
            this.setState({
              mode: 'welcome'
            })
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} sub={_desc}></Content>
      </div>
    );
  }
}

export default App;
