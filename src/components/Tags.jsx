import React, { useState } from 'react';
import Button from './Button';

const Tags = () => {
  const [tags, setTags] = useState(['care', 'like']);

  const handleTags = () => {
    // Add
    // setTags([...tags, 'haha']);

    // Remove
    // setTags(tags.filter((tag) => tag !== 'care'));

    // Update
    setTags(tags.map((tag) => (tag === 'like' ? 'happiness' : tag)));
  };

  return (
    <div className='container'>
      {tags.map((tag) => (
        <h4 key={tag}>{tag}</h4>
      ))}
      <Button onClick={handleTags} color='secondary'>
        Vote
      </Button>
    </div>
  );
};

export default Tags;
