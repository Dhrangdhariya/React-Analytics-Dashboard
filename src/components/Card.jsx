import React from 'react';
import { useContexts } from '../context/Contexts';

const Card = (props) => {
    const {
        theme
    }= useContexts();
    // "bg-white p-4 rounded-lg shadow"
  return (
    <div className={`${theme ? 'bg-white' : 'bg-gray-700'} p-4 rounded-lg shadow`}>
      <h3 className="text-base text-gray-500">{props.title}</h3>
      <p className="text-2xl font-bold">{props.value}</p>
    </div>
  );
};

export default Card;