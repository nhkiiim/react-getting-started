import React, { Component } from 'react';
import './App.css';


class Subject extends Component {
  render() { // js class 안에서는 return 생략 가능
    // return은 하나의 최상위 태그로 이루어져야함
    return (
      <header> 
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component { // table of content
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.sub}
      </article>
    );
  }
}

// js 문법 아님! -> jsx (create-react-app이 변환 해줌)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" sub="HTML is HyperText Markup Lanuage."></Content>
      </div>
    );
  }
}

export default App;
