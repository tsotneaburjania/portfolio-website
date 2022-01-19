import React from 'react';

function ExpCard(props) {
  return (
    <div className='expCard'>
        <img src={props.img} />
        <p>{props.compName}</p>
        <p>{props.timeline}</p>
        <p>{props.pos}</p>
    </div>
  );
}

export default ExpCard;
