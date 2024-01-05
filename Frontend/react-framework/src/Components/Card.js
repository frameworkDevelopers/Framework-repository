// Card.js
import React, { useState } from 'react';

const Card = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const styles = {
    card: {
      border: '1px solid #2345',
      borderRadius: '10px',
      margin: '10px',
      transition: 'height 0.3s ease-in-out',
      overflow: 'hidden',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: isExpanded ? '#fff' : '#ccc',
      height: isExpanded ? 'auto' : 'auto', // Set a fixed height for mobile screens
    },
    header: {
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: '#f0f0f0',
      borderBottom: '1px solid #ccc',
    //   borderTopLeftRadius: '10px',
    //   borderTopRightRadius: '10px',
      borderRadius:'10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      margin: '0',
    },
    content: {
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loremIpsum: {
      textAlign: 'justify',
      fontSize: '14px',
      color: '#333',
      overflowY: 'auto', // Enable vertical scrolling for content overflow
      maxHeight: '100%', // Limit the maximum height to the parent's height
    },
  };

  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, augue eget dapibus blandit, sapien leo varius augue, at mollis lectus ex in quam. Fusce hendrerit augue non leo venenatis, at tempus metus bibendum. Nullam in risus ac tortor finibus semper nec a risus. Vivamus euismod, orci at convallis tincidunt, urna libero consectetur massa, in imperdiet justo lectus vel ex. Maecenas interdum nunc id libero volutpat, ut volutpat justo feugiat. Sed interdum justo quis risus facilisis, ac accumsan urna mattis. In hac habitasse platea dictumst.';

  return (
    <div style={styles.card} onClick={handleToggle}>
      <div style={styles.header}>
        <h2 style={styles.title}>Title</h2>
        {isExpanded ? '▲ Collapse' : '▼ Expand'}
      </div>
      {isExpanded && (
        <div style={styles.content}>
          <p style={styles.loremIpsum}>{loremIpsum}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
