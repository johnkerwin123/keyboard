
import React, { useState } from 'react';
import OnScreenKeyboard from './OnScreenKeyboard';
import './CreateInputForm.css';

const CreateInputForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleKeyClick = (key) => {
    if (activeField !== null) {
      switch (key) {
        case 'SPACE':
          handleSpace();
          break;
        case 'CLEAR':
          handleClear();
          break;
        default:
          updateFieldValue(key);
          break;
      }
    }
  };

  const handleSpace = () => {
    updateFieldValue(' ');
  };

  const handleClear = () => {
    switch (activeField) {
      case 'name':
        setName('');
        break;
      case 'address':
        setAddress('');
        break;
      case 'contactNumber':
        setContactNumber('');
        break;
      default:
        break;
    }
  };

  const updateFieldValue = (key) => {
    switch (activeField) {
      case 'name':
        setName((prevName) => prevName + key);
        break;
      case 'address':
        setAddress((prevAddress) => prevAddress + key);
        break;
      case 'contactNumber':
        setContactNumber((prevContactNumber) => prevContactNumber + key);
        break;
      default:
        break;
    }
  };

  const handleInputFocus = (field) => {
    setActiveField(field);
    setShowKeyboard(true);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Submitted!', name, address, contactNumber);
    // Reset form fields
    setName('');
    setAddress('');
    setContactNumber('');
    // Hide on-screen keyboard
    setShowKeyboard(false);
    setActiveField(null);
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onFocus={() => handleInputFocus('name')}
            readOnly
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={address}
            onFocus={() => handleInputFocus('address')}
            readOnly
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={contactNumber}
            onFocus={() => handleInputFocus('contactNumber')}
            readOnly
          />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {showKeyboard && <OnScreenKeyboard onKeyClick={handleKeyClick} />}
    </div>
  );
};

export default CreateInputForm;


