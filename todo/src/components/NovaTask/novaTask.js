import React, { useState, useEffect } from "react";
import Modal from "../Modal/modal";
import "./novaTask.css";
import { MdCancel } from "react-icons/md";

function NovaTask({ onAddTask, taskToEdit, onEditTask, changeSelected }) {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // Efeito para preencher os campos se uma tarefa estiver sendo editada
    useEffect(() => {
        console.log('1oooooo')
        if (taskToEdit) {
            setText(taskToEdit.text);
            setDate(taskToEdit.date);
            setTime(taskToEdit.time);
            setShowModal(true); 
        } else {
            clearFields();
            setShowModal(false);
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
            onAddTask(taskData); // Adiciona a nova tarefa
        }

        clearFields();
        setShowModal(false);
    };

    const openModal = () => {
        clearFields(); // Limpa os campos antes de abrir o modal
        setShowModal(true);
    };

    const closeModal = () => {
        clearFields(); // Limpa os campos ao fechar o modal
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
                </form>
            </Modal>
        </div>
    );
}

export default NovaTask;
