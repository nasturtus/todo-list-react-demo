import React from "react";
import "./TodoList.css";

function TodoItem(props) {
  const cssClass = props.item.isCompleted ? "done" : "pending";
  return (
    <li key={props.index} className={cssClass} onClick={props.clickHandler}>
      {props.item.description}
    </li>
  );
}

export default TodoItem;
