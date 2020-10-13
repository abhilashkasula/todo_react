import React, {useState} from 'react';
import Input from './Input';
import useHover from './useHover';

const DefaultHeader = ({title, onClick, onDelete}) => {
  const [ref, isHovered] = useHover();

  return (
    <div className='hover-container' ref={ref}>
      <h1 className='header' onClick={onClick}>
        {title}
      </h1>
      <div onClick={onDelete}> {isHovered ? 'X' : ''} </div>
    </div>
  );
};

const Header = ({title, onUpdate, onReset}) => {
  const [editable, setEditable] = useState(false);

  const updateHeader = (text) => {
    onUpdate(text);
    setEditable(false);
  };

  return editable ? (
    <Input value={title} onSubmit={updateHeader} className='editable-header' />
  ) : (
    <DefaultHeader
      title={title}
      onClick={() => setEditable(true)}
      onDelete={onReset}
    />
  );
};

export default Header;
