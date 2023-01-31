import React, { useState, useRef } from 'react';
import '../../styles/todos.css';
import menuImg from '../../assets/menu.png';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  text: string;
  openEdit: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  hideTodos: boolean;
};
const Todo: React.FC<Props> = ({
  text,
  openEdit,
  setShowEdit,
  hideTodos,
}: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const showMenuFunc = () => {
    setShowMenu((prevState: React.SetStateAction<boolean>) => !prevState);
  };

  const closeEditor = (e: React.MouseEvent) => {
    openEdit(e);
    setShowMenu((prevState: React.SetStateAction<boolean>) => !prevState);
  };
  const style = {
    display: isDone && hideTodos ? 'none' : 'block',
  };

  return (
    <AnimatePresence>
      <motion.div
        style={style}
        className="todoItem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="primary-inner-container">
          <div className="title-container">
            <h3 className={isDone ? 'strike-through title' : 'title'}>
              Test Title Item
            </h3>
            <img
              onClick={showMenuFunc}
              className="editMenu"
              src={menuImg}
              alt="menu"
            />
          </div>
          <div className="task-text-container">
            <p className={isDone ? 'strike-through todoText' : 'todoText'}>
              {text}
            </p>
          </div>
          <div className="tags-container">
            <div className="task-tags">
              <div className="work-circle circle"></div>
              <div className="study-circle circle"></div>
              <div className="entertainment-circle circle"></div>
              <div className="family-circle circle"></div>
            </div>
            <div className="mark-done">
              <input
                className="checkboxItem"
                type="checkbox"
                name="check"
                id="checkbox"
                checked={isDone}
                onChange={() => setIsDone(!isDone)}
              />
              <p className="checkItem">Done</p>
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="editMenu-container">
            <p
              onClick={(e: React.MouseEvent) => closeEditor(e)}
              className="edit"
            >
              Edit...
            </p>
            <div className="center"></div>
            <p
              onClick={() =>
                setShowMenu(
                  (prevState: React.SetStateAction<boolean>) => !prevState
                )
              }
              className="delete"
            >
              Delete
            </p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Todo;
