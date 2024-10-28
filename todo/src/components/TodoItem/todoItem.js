import React from "react";
import "./todoItem.css";

const TodoItem = ({ tarefa, onToggle, handleEditTask }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={tarefa.completed} onChange={onToggle} />
      <span
        className={tarefa.completed ? "concluida" : ""}
        onClick={() => handleEditTask(tarefa)} 
      >
        {tarefa.text}
      </span>
    </div>
  );
};

export default TodoItem;
