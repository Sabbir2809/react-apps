import React, { useState } from 'react';
import styles from './ListGroup.module.css';

const ListGroup = ({ title, items, onSelectItem }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className='container mt-2'>
      <h1 className={[styles.heading, styles.color].join(' ')}>List of {title}</h1>
      {items.length === 0 && <h6>City Not Found!</h6>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={index}
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item trigger'}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
