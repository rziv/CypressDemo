import 'todomvc-common';
import TodoStore from './stores/TodoStore';
import ViewStore from './stores/ViewStore';
import TodoApp from './components/todoApp.js';
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch'; // required until cypress support fetch API
console.log("Fetching!");

fetch('http://localhost:3004/todos').then(response=>response.json()).then(initialState=> {


var todoStore = TodoStore.fromJS(initialState || []);
var viewStore = new ViewStore();


// expose store when run in Cypress
if (window.Cypress) {
  window.todoStore = todoStore;
  console.log("window.todoStore 1", window.todoStore);
}

ReactDOM.render(
	<TodoApp todoStore={todoStore} viewStore={viewStore}/>,
	document.getElementById('todoapp')
);

if (module.hot) {
  module.hot.accept('./components/todoApp', () => {
    var NewTodoApp = require('./components/todoApp').default;
    ReactDOM.render(
      <NewTodoApp todoStore={todoStore} viewStore={viewStore}/>,
      document.getElementById('todoapp')
    );
  });
}
});
