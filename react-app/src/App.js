import React, { Component } from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject';
import './App.css';

// js 문법 아님! -> jsx (create-react-app이 변환 해줌)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText...'},
        { id: 2, title: 'CSS', desc: 'CSS is for design'},
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}, 
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" sub="HTML is HyperText Markup Lanuage."></Content>
      </div>
    );
  }
}

export default App;
