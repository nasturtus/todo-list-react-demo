import React from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

describe("TodoList", () => {
  it.skip("should render TodoList properly", () => {
    const wrapper = shallow(<TodoList />);
    console.log(wrapper.debug());
    expect(wrapper.find("TodoListTitle")).toHaveLength(1);
    expect(wrapper.find("TodoItem")).toHaveLength(5);
  });
});
