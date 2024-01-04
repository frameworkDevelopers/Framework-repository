// App.js
import React, { useState } from 'react';
import './App.css';
import theme from './Common/Theme';

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState('theme1');

  const handleThemeChange = (themeName) => {
    setSelectedTheme(themeName);
  };

  const appStyles = {
    background: theme[selectedTheme].pageBackground.default || '#191970',
    borderRadius: theme[selectedTheme].borderRadius.medium || 8,
    margin: theme[selectedTheme].space.large || 12,
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
        <div key={id} style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h2 style={{ fontSize: theme[selectedTheme].fontSize.large }}>{title}</h2>
          <p style={{ fontSize: theme[selectedTheme].fontSize.medium }}>{description}</p>
        </div>
      ))}

      <div style={{ marginTop: theme[selectedTheme].space.large }}>
        <button onClick={() => handleThemeChange('theme1')}>Theme 1</button>
        <button onClick={() => handleThemeChange('theme2')}>Theme 2</button>
        <button onClick={() => handleThemeChange('theme3')}>Theme 3</button>
      </div>
    </div>
  );
};

export default App;
