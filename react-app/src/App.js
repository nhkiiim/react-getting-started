import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from './components/Subject';
import Control from './components/Control';
import './App.css';

// js 문법 아님! -> jsx (create-react-app이 변환 해줌)
class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3; // render 시 새로 생길 필요가 없기 때문에 state에 넣지 않기
    this.state = {
      mode: 'create',
      selected_content_id: 1,
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

    let _title, _desc, _article = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} sub={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article =  <ReadContent title={_title} sub={_desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        this.max_content_id++;

        // 원본에 직접 추가 X -> 성능 개선 시 까다로움
        // this.state.contents.push({
        //   id: this.max_content_id,
        //   title: _title,
        //   desc: _desc
        // });

        // concat 사용
        let _contents = this.state.contents.concat({
          id: this.max_content_id,
          title: _title,
          desc: _desc
        });

        this.setState({
          contents: _contents
        });
      }.bind(this)}></CreateContent>;
    }

    return (
      <div className="App">
        {/* <header>
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
        </header> */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        >
        </Subject>
        <TOC onChangePage={function (id) {
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          });

        }.bind(this)}
          data={this.state.contents}></TOC>
        <Control onChangeMode={function (_mode) { 
          this.setState({
            mode: _mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
