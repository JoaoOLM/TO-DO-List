import React, { useState } from "react";
import TodoItem from "../components/TodoItem/todoItem";
import NovaTask from "../components/NovaTask/novaTask";
import "./todoList.css";

const TodoList = ({ taskList, onAddTask, onToggleTask, editTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  

  const handleEditTask = (task) => {
    setSelectedTask(task);
  };

  const handleSaveTask = (task) => {
    if (!task.text || task.text.trim() === "") {
      alert("A tarefa não pode estar vazia.");
      return;
    }
   
    if (selectedTask) {
      editTask({ ...selectedTask, ...task }); 
    } else {
      onAddTask(task); 
    }

    setSelectedTask(null); 
  };

  // Filtrando tarefas
  const incompleteTasks = taskList.tasks.filter(task => !task.completed);
  const completedTasks = taskList.tasks.filter(task => task.completed);

  return (
    <div className="todo-list">
      <h1>{taskList.name}</h1>
      <div className="tasks">
        {[...incompleteTasks, ...completedTasks].map((task) => (
          <TodoItem
            key={task.id}
            tarefa={task}
            onToggle={() => onToggleTask(task.id)}
            handleEditTask={handleEditTask}
          />
        ))}
      </div>
      <NovaTask
        onAddTask={handleSaveTask}
        changeSelected={setSelectedTask}
        taskToEdit={selectedTask}
        onEditTask={editTask}
      />
    </div>
  );
};

export default TodoList;
