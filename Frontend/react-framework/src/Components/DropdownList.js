import React, { useState } from 'react';

const DropdownList = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={styles.dropdownContainer}>
      <div style={styles.selectedOption} onClick={toggleDropdown}>
        {selectedOption || 'Select an option'}
      </div>
      {isDropdownOpen && (
        <div style={styles.dropdownOptions}>
          {options.map((option, index) => (
            <div
              key={index}
              style={styles.dropdownOption}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  dropdownContainer: {
    position: 'relative',
    display: 'inline-block',
    margin: '10px', // Add margin for spacing between multiple dropdowns
  },
  selectedOption: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    minWidth: '150px', // Set a minimum width to avoid very narrow dropdown on small screens
  },
  dropdownOptions: {
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ddd',
    borderTop: 'none',
    borderRadius: '0 0 4px 4px',
    backgroundColor: 'gray',
    zIndex: '1',
    marginTop: '5px', // Add a small margin between the selected option and dropdown
  },
  dropdownOption: {
    padding: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

    ':hover': {
      backgroundColor: '#f5f5f5',
    },
  },
};

export default DropdownList;
