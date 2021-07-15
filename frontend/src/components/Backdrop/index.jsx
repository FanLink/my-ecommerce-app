import React from 'react';
import "./style.css"

function Backdrop({show, handleToggle}) {
  return show&&(
    <div className="backdrop" onClick={handleToggle}>
      
    </div>
  );
}

export default Backdrop;