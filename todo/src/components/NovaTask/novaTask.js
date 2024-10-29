import React, { useState, useEffect } from "react";
import Modal from "../Modal/modal";
import "./novaTask.css";
import { MdCancel, MdDelete } from "react-icons/md";

function NovaTask({ onAddTask, taskToEdit, onEditTask, changeSelected, deleteTask }) {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // Efeito para preencher os campos se uma tarefa estiver sendo editada
    useEffect(() => {
        if (taskToEdit) {
            setText(taskToEdit.text);
            setDate(taskToEdit.date);
            setTime(taskToEdit.time);
            setShowModal(true); 
        } else {
            clearFields();
        }
    }, [taskToEdit]);

    const clearFields = () => {
        setText("");
        setDate("");
        setTime("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const taskData = {
            id: taskToEdit ? taskToEdit.id : null, 
            text,
            date,
            time,
            completed: taskToEdit ? taskToEdit.completed : false, 
        };

        if (taskToEdit) {
            onEditTask(taskData); 
        } else {
            onAddTask(taskData); 
        }

        clearFields();
        setShowModal(false);
    };

    const openModal = () => {
        clearFields(); 
        setShowModal(true);
    };

    const closeModal = () => {
        clearFields(); 
        setShowModal(false);
    };

    return (
        <div className="novaTask">
            <button className="novaTaskBtn" onClick={() => {
                changeSelected(null)
                openModal()

            }
                }>Nova Tarefa +</button>
            <Modal showModal={showModal} setShowModal={closeModal}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Título"
                        required
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        required
                    />
                    <input
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        required
                    />
                    <button className="confirmar" type="submit">Salvar</button>
                    <MdCancel size={40} onClick={closeModal} />
                    {taskToEdit && 
                        <MdDelete size={40} onClick={() => {
                            deleteTask(taskToEdit.id); 
                            closeModal(); 
                        }}/>
                    }
                </form>
            </Modal>
        </div>
    );
}

export default NovaTask;
