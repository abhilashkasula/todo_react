import React, {useState} from 'react';

const Input = ({value, onSubmit, className}) => {
  const [text, setText] = useState(value || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={className}
      />
    </form>
  );
};

export default Input;
