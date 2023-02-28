import React, { Component } from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject';
import './App.css';

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
