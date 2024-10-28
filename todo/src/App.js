import "./App.css";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/sidebar.js";
import TodoList from "./pages/todoList.js";

function App() {
  const [taskLists, setTaskLists] = useState([]);
  const [activeList, setActiveList] = useState(null);
  const [lastTaskId, setLastTaskId] = useState(0); // Controle de ID

  const loadExampleLists = () => {
    let initialId = 1;
    return [
      {
        name: "Estudos",
        tasks: [
          {
            id: initialId++,
            text: "Assistir aula de React",
            date: "2024-10-28",
            time: "10:00",
            completed: false,
          },
          {
            id: initialId++,
            text: "Fazer exercício de Algoritmos",
            date: "2024-10-29",
            time: "14:00",
            completed: false,
          },
        ],
      },
      {
        name: "Trabalho",
        tasks: [
          {
            id: initialId++,
            text: "Enviar relatório",
            date: "2024-10-30",
            time: "16:00",
            completed: false,
          },
          {
            id: initialId++,
            text: "Reunião com equipe",
            date: "2024-10-31",
            time: "09:00",
            completed: false,
          },
        ],
      },
      {
        name: "Pessoal",
        tasks: [
          {
            id: initialId++,
            text: "Comprar presentes de aniversário",
            date: "2024-10-28",
            time: "18:00",
            completed: false,
          },
          {
            id: initialId++,
            text: "Marcar consulta médica",
            date: "2024-11-01",
            time: "11:00",
            completed: false,
          },
        ],
      },
    ];
  };

  useEffect(() => {
    const savedTaskLists = JSON.parse(localStorage.getItem("taskLists"));

    if (savedTaskLists && savedTaskLists.length > 0) {
      setTaskLists(savedTaskLists);
      setActiveList(savedTaskLists[0]);
      const highestId = savedTaskLists
        .flatMap((list) => list.tasks.map((task) => task.id))
        .reduce((maxId, currId) => Math.max(maxId, currId), 0);
      setLastTaskId(highestId);
    } else {
      const exampleLists = loadExampleLists();
      setTaskLists(exampleLists);
      setActiveList(exampleLists[0]);
      localStorage.setItem("taskLists", JSON.stringify(exampleLists));
      setLastTaskId(
        exampleLists
          .flatMap((list) => list.tasks.map((task) => task.id))
          .reduce((maxId, currId) => Math.max(maxId, currId), 0)
      );
    }
  }, []);

  const addNewTaskList = (listName) => {
    const newList = {
      name: listName,
      tasks: [],
    };
    const updatedTaskLists = [...taskLists, newList];
    setTaskLists(updatedTaskLists);
    setActiveList(newList);
    localStorage.setItem("taskLists", JSON.stringify(updatedTaskLists));
  };

  const updateTaskLists = (newTaskLists) => {
    setTaskLists(newTaskLists);
    localStorage.setItem("taskLists", JSON.stringify(newTaskLists));
  };

  const toggleTask = (taskId) => {
    const updatedTaskLists = taskLists.map((list) => {
      if (list.name === activeList.name) {
        const updatedTasks = list.tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        return { ...list, tasks: updatedTasks };
      }
      return list;
    });

    updateTaskLists(updatedTaskLists);
    setActiveList(
      updatedTaskLists.find((list) => list.name === activeList.name)
    );
  };

  const handleListClick = (list) => {
    setActiveList(list);
  };

  const addTaskToList = (task) => {
    // Se for uma nova tarefa, gere um novo ID
    const newTask = {
      id: task.id || lastTaskId + 1, // Gere o ID se for uma nova tarefa
      text: task.text,
      date: task.date,
      time: task.time,
      completed: task.completed || false,
    };

    const updatedTaskLists = taskLists.map((list) => {
      if (list.name === activeList.name) {
        // Verifica se a tarefa já existe (caso de edição)
        const existingTaskIndex = list.tasks.findIndex(
          (t) => t.id === newTask.id
        );
        if (existingTaskIndex !== -1) {
          // Se já existe, atualize a tarefa
          const updatedTasks = list.tasks.map((task) =>
            task.id === newTask.id ? newTask : task
          );
          return { ...list, tasks: updatedTasks };
        } else {
          // Se não existe, adicione uma nova tarefa
          return { ...list, tasks: [...list.tasks, newTask] };
        }
      }
      return list;
    });

    setLastTaskId(newTask.id); // Atualiza o ID após a adição
    updateTaskLists(updatedTaskLists);
    setActiveList(
      updatedTaskLists.find((list) => list.name === activeList.name)
    );
  };

  const editTask = (updatedTask) => {
    const updatedTaskLists = taskLists.map((list) => {
      if (list.name === activeList.name) {
        const updatedTasks = list.tasks.map((task) => {
          if (task.id === updatedTask.id) {
            return updatedTask;
          }
          return task;
        });
        return { ...list, tasks: updatedTasks };
      }
      return list;
    });

    updateTaskLists(updatedTaskLists);
    setActiveList(
      updatedTaskLists.find((list) => list.name === activeList.name)
    );
  };

  return (
    <div className="App">
      <Sidebar
        taskLists={taskLists}
        handleListClick={handleListClick}
        addNewTaskList={addNewTaskList}
      />
      {activeList ? (
        <TodoList
          taskList={activeList}
          onAddTask={addTaskToList}
          onToggleTask={toggleTask}
          editTask={editTask}
        />
      ) : (
        <p>Nenhuma lista selecionada</p>
      )}
    </div>
  );
}

export default App;
