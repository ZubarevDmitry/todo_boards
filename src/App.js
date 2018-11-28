import React, { Component } from 'react';
import './App.css';
import TodoListContainer from "./components/TodoListContainer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faTrashAlt);

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
