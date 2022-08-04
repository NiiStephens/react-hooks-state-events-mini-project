import React from "react";
import Task from "./Task";
import { nanoid } from "nanoid"

function TaskList({ tasks, onDeleteTask}) {
  const taskList = tasks.map((task) => (
    <Task 
    key = {nanoid(5)}
    text = {task.text}
    category = {task.category}
    onDeleteTask = {onDeleteTask} 
    />
  ))
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
