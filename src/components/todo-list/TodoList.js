import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import TodoListTitle from "./TodoListTitle";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      newTodo: { description: "", isCompleted: false }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.newTodo.description}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  toggleTodo(i) {
    const tmpTodos = [...this.state.todos];
    tmpTodos[i].isCompleted = !tmpTodos[i].isCompleted;
    this.setState({ todos: tmpTodos });
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      newTodo: { description: event.target.value, isCompleted: false }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const tmpTodos = [...this.state.todos, this.state.newTodo];
    console.log(tmpTodos);
    this.setState({ todos: tmpTodos, newTodo: { description: "" } });
    console.log("New todo added.");
  }
}

export default TodoList;
