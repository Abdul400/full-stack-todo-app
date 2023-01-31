import React, { useState } from 'react';
import Navigation from './Navigation';
import Todos from './Todos';
import '../../styles/dashboard.css';
import add from '../../assets/plus.png';
import Add from '../Dashboard/Add';
import Edit from './Edit';

type myData = {
  myTitle: string | null | undefined;
  myDescription: string | null | undefined;
};

const MainDashboard: React.FC = () => {
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [editData, setEditData] = useState<myData>({
    myTitle: '',
    myDescription: '',
  });
  const addNewTodo = () =>
    setShowAdd((prevState: React.SetStateAction<boolean>) => !prevState);
  const openEdit = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    console.log(e.currentTarget);
    if (e.currentTarget.textContent === 'Edit...') {
      let title =
        e.currentTarget.parentElement?.parentElement?.children[0].children[0]
          .textContent;
      let description =
        e.currentTarget.parentElement?.parentElement?.children[0].children[1]
          .textContent;
      setEditData({
        myTitle: title,
        myDescription: description,
      });
    }
    setShowEdit((prevState: React.SetStateAction<boolean>) => !prevState);
  };
  const [hideTodos, setHideTodos] = useState<boolean>(false);
  const hideDoneTodos = () => {
    setHideTodos(!hideTodos);
  };
  return (
    <div className="DashboardContainer">
      <h2 className="header1">todo</h2>
      <img
        className="add"
        onClick={() => addNewTodo()}
        src={add}
        alt="add todo"
      />
      <div className="left-nav">
        <Navigation hideDoneTodos={hideDoneTodos} />
      </div>
      <div className="right-todos">
        <Todos openEdit={openEdit} hideTodos={hideTodos} />
      </div>
      {(showAdd || showEdit) && <div className="overlay"></div>}
      {showAdd && <Add addNewTodo={addNewTodo} />}
      {showEdit && <Edit editData={editData} openEdit={openEdit} />}
    </div>
  );
};

export default MainDashboard;
