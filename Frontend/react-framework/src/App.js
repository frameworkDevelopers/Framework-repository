import React from 'react';
import theme from './Common/Theme';
import './App.css';

const App = () => {
  const appStyles = {
    background:theme.pageBackground.secondary, 
    borderRadius: theme.borderRadius.medium, 
    margin:theme.space.large
  };

  const listItemStyles = {
  
  };

  const dummyData = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1' },
    { id: 2, title: 'Item 2', description: 'Description for Item 2' },
    { id: 3, title: 'Item 3', description: 'Description for Item 3' },
  ];

  return (
    <div className="App" style={appStyles}>
      <h1>My App</h1>

        {dummyData.map(({ id, title, description }) => (
          <div key={id} style={{display:'flex', justifyContent:'space-around'}}>
            <h2 style={{ fontSize: theme.fontSize.large }}>{title}</h2>
            <p style={{ fontSize: theme.fontSize.medium }}>{description}</p>
          </div>
        ))}

    </div>
  );
};

export default App;
