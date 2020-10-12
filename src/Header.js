import React, {useState} from 'react';
import Input from './Input';
import Hoverable from './Hoverable';

const DefaultHeader = ({title, onClick}) => (
  <h1 className='header' onClick={onClick}>
    {title}
  </h1>
);

const Header = ({title, onUpdate, onReset}) => {
  const [editable, setEditable] = useState(false);

  const updateHeader = (text) => {
    onUpdate(text);
    setEditable(false);
  };

  const DefaultHeaderWithHover = Hoverable(DefaultHeader);

  return editable ? (
    <Input value={title} onSubmit={updateHeader} className='editable-header' />
  ) : (
    <DefaultHeaderWithHover
      title={title}
      onClick={() => setEditable(true)}
      onDelete={onReset}
    />
  );
};

export default Header;
