import React, { useState } from "react";
import Modal from "../Modal/modal";
import "./novaTaskList.css";
import { MdCancel } from "react-icons/md";

function NovaTaskList({ addNewTaskList }) {
    const [showModal, setShowModal] = useState(false);
    const [listName, setListName] = useState("");

    // Função para fechar o modal e limpar o campo de input
    const closeModal = () => {
        setListName(""); // Limpa o campo de nome da lista
        setShowModal(false); // Fecha o modal
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (listName.trim() === "") {
            return; // Evita criar uma lista vazia
        }
        // Chama a função para adicionar a nova lista de tarefas
        addNewTaskList(listName);
        closeModal(); // Fecha o modal e limpa o campo após criar a lista
    };

    return (
        <div className="novaTaskList">
            <div className="novaTaskListBtn">
                <button onClick={() => setShowModal(true)}>Nova Lista +</button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <form onSubmit={handleSubmit}>
                    <div className="text">
                        <h3>Nova Lista</h3>
                        <input
                            type="text"
                            value={listName}
                            onChange={e => setListName(e.target.value)}
                            placeholder="Nome da Lista"
                            autoFocus
                            required
                        />
                    </div>
                    <div className="row">
                        <div className="confirmar">
                            <button type="submit">Salvar</button>
                        </div>
                        <div className="cancelar" onClick={closeModal}>
                            <MdCancel size={40} />
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default NovaTaskList;
