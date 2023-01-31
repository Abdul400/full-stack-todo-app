import React from 'react';
import '../../styles/dashboard.css';
import illustration from '../../assets/illustration2.png';

type myProps = {
  hideDoneTodos: () => void;
};

const Navigation: React.FC<myProps> = ({ hideDoneTodos }) => {
  return (
    <div className="nav">
      <div className="tags">
        <div className="work group">
          <div className="work-circle circle"></div>
          <p className="work-text text">Work</p>
        </div>
        <div className="study group">
          <div className="study-circle circle"></div>
          <p className="study-text text">Study</p>
        </div>
        <div className="entertainment group">
          <div className="entertainment-circle circle"></div>
          <p className="entertainment-text text">Entertainment</p>
        </div>
        <div className="family group">
          <div className="family-circle circle"></div>
          <p className="family-text text">Family</p>
        </div>
      </div>
      <div className="done">
        <div className="checkDone">
          <input
            className="checkbox"
            type="checkbox"
            name="check"
            id="checkbox"
            onClick={() => hideDoneTodos()}
          />
          <p className="hide">Hide Done Tasks</p>
        </div>
      </div>
      <div className="illustration">
        <img className="illustration2" src={illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default Navigation;
