import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import TodoListTitle from "./TodoListTitle";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  render() {
    return (
      <div>
        <TodoListTitle />
        {this.state.todos.map((todoObj, index) => {
          return (
            <TodoItem
              item={todoObj}
              key={index}
              clickHandler={this.toggleTodo.bind(this, index)}
            />
          );
        })}
        <TodoForm handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }

  toggleTodo(i) {
    const tmpTodos = [...this.state.todos];
    tmpTodos[i].isCompleted = !tmpTodos[i].isCompleted;
    this.setState({ todos: tmpTodos });
  }

  handleSubmit(newTodo) {
    const tmpTodos = [...this.state.todos, newTodo];
    this.setState({ todos: tmpTodos, newTodo: { description: "" } });
  }
}

export default TodoList;
