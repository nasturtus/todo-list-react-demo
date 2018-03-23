import React from "react";
import { shallow } from "enzyme";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("should verify submit is called on click", () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(<TodoForm handleSubmit={mockHandler} />);
    expect(wrapper.find("form")).toHaveLength(1);
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(mockHandler).toBeCalled();
  });
});
