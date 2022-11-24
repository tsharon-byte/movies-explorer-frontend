import React from 'react';
import './ProgressBar.css';

function ProgressBar() {
  return (
    <div>
      <div className="progressbar">
        <div className="progressbar__value progressbar__color">
          <span>1 неделя</span>
        </div>
        <div className="progressbar__total">
          <span>4 недели</span>
        </div>
      </div>
      <div className="progressbar">
        <div className="progressbar__value no-background">
          <span>Back-end</span>
        </div>
        <div className="progressbar__total no-background">
          <span>Front-end</span>
        </div>
      </div>

    </div>
  );
}

export default ProgressBar;
