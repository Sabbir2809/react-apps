import React, { useState } from 'react';

const ExpandableText = ({ children, maxChars = 100 }) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <div>
      <p>
        {text}... <button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button>
      </p>
    </div>
  );
};

export default ExpandableText;
