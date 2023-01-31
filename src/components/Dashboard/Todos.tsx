import React from 'react';
import '../../styles/todos.css';
import { motion, AnimatePresence } from 'framer-motion';

import Todo from './Todo';

type Props = {
  openEdit: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  hideTodos: boolean;
};

const Todos: React.FC<Props> = ({ openEdit, hideTodos }) => {
  let text1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    text2 =
      'Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet  adipisicing elit. Facilis totam illo nobis optio ex commodi tenetur, quaerat explicabo non sint?',
    text3 = 'Lorem ipsum dolor sit amet.',
    text4 =
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate sunt debitis, facere possimus officia ut.',
    text5 =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem vero dolores.',
    text6 = 'Lorem ipsum dolor sit.';
  const showItemIsDone = () => {};
  return (
    <div className="TodosContainer">
      <div className="bottom">
        <Todo openEdit={openEdit} text={text1} hideTodos={hideTodos} />
        <Todo openEdit={openEdit} text={text2} hideTodos={hideTodos} />
        <Todo openEdit={openEdit} text={text3} hideTodos={hideTodos} />
        <Todo openEdit={openEdit} text={text4} hideTodos={hideTodos} />
        <Todo openEdit={openEdit} text={text5} hideTodos={hideTodos} />
        <Todo openEdit={openEdit} text={text6} hideTodos={hideTodos} />
      </div>
    </div>
  );
};

export default Todos;
