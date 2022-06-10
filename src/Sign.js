import React from 'react';

export default function Sign({ circusIsOpen }) {
  return (
    <div className={circusIsOpen ? 'open' : 'closed'}>
      {
        circusIsOpen
          ? <h3>Come inside and see wonders!</h3>
          : <h3>Animals are taking a rest, come back later.</h3> 
      }
    </div>
  );
}
