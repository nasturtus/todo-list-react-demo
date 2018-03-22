import React from "react";
import { shallow } from "enzyme";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  it("should render TodoItem properly", () => {
    const item = { description: "test todo item", isCompleted: false };
    const key = 100;
    const clickHandler = function clickHandler() {};
    const wrapper = shallow(
      <TodoItem item={item} key={key} clickHandler={clickHandler} />
    );
    expect(wrapper.find("li")).toHaveLength(1);
  });
});
