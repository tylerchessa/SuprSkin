import React from 'react';
import './TextInput.scss';

function TextInput({ name, onChange, onKeyDown, value, id, type = 'text', placeholder = '', mandatory = false }) {
    const whiteSpace = (text) => {
        return text !== text.trimStart(); 
    }

  return (
    <div className="mandatory-holder">
      {mandatory && <span className="mandatory-sign">*</span>}
      <input
        id={id}
        className={'text-input-input'}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />
    </div>
  );
}

export default TextInput;

