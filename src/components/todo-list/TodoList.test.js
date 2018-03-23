import React from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

describe("TodoList", () => {
  it("should render TodoList properly", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find("TodoListTitle")).toHaveLength(1);
    expect(wrapper.find("TodoItem")).toHaveLength(5);
  });

  it("should add a new ToDo when submit is clicked", () => {
    const newTodo = { description: "new todo", isCompleted: false };
    const wrapper = shallow(<TodoList />);
    const expectedLength = 6;
    wrapper
      .find("TodoForm")
      .props()
      .handleSubmit(newTodo);
    expect(wrapper.state().todos).toHaveLength(expectedLength);
  });

});
