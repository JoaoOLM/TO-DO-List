import React, { useState } from "react";
import TodoItem from "../components/TodoItem/todoItem";
import NovaTask from "../components/NovaTask/novaTask";
import "./todoList.css";

const TodoList = ({ taskList, onAddTask, onToggleTask, editTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  

  const handleEditTask = (task) => {
    console.log("Editando tarefa:", task); // Log para verificar se a tarefa está correta
    setSelectedTask(task);
  };

  const handleSaveTask = (task) => {
    console.log('aaaaaaa')
    if (!task.text || task.text.trim() === "") {
      alert("A tarefa não pode estar vazia.");
      return;
    }
   

    console.log("Selected task:", selectedTask); // Adicionando log

    if (selectedTask) {
      // Verifica se há uma tarefa selecionada
      editTask({ ...selectedTask, ...task }); // Atualiza a tarefa existente com os dados editados
    } else {
      onAddTask(task); // Adiciona uma nova tarefa
    }

    setSelectedTask(null); // Limpa a seleção após salvar
  };

  return (
    <div className="todo-list">
      <h1>{taskList.name}</h1>
      <div className="tasks">
        {taskList.tasks.map((task) => (
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
