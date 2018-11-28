import React, { Component } from 'react';
import './App.css';
import TodoListContainer from "./components/TodoListContainer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faPlusSquare, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faPlusSquare, faEllipsisH);

class App extends Component {
  render() {
    return (
      <div className="App">
       <TodoListContainer/>
      </div>
    );
  }
}

export default App;
