import React from 'react';
import './sidebar.css';
import NovaTaskList from '../NovaTaskList/novaTaskList.js'
import Ipanema from '../../assets/images/ipanema.jpg';
import { CiSearch, CiCircleList } from "react-icons/ci";

const Sidebar = ({ taskLists, handleListClick, addNewTaskList }) => {
  const handleLogout = () => {
    // Lógica para o logout
    console.log("Usuário fez logout");
  };

  return (
    <div className="sidebar">
       <div className="user-info">
        <div className="profile-pic">
          <img alt="Profile" src={Ipanema} />
        </div>
        <div className="user-details">
          <h3>Nome do Usuário</h3>
          <p onClick={handleLogout} >Logout</p>
        </div>
      </div>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="Pesquisar" />
        <CiSearch className="search-icon" />
      </div>

      <div className='line'></div>

      <ul className="task-lists">
        {taskLists && taskLists.length > 0 ? (
          taskLists.map((list, index) => (
            <li key={index} onClick={() => handleListClick(list)}>
              <CiCircleList />
              <p>{list.name}</p>
            </li>
          ))
        ) : (
          <li><p>Nenhuma lista encontrada</p></li>
        )}
      </ul>

      <NovaTaskList addNewTaskList={addNewTaskList} />
    </div>
  );
};

export default Sidebar;
