import React, {useState} from 'react';
import Input from './Input';
import DefaultHeader from './DefaultHeader';

const Header = ({title, onUpdate, onReset}) => {
  const [editable, setEditable] = useState(false);

  const edit = () => setEditable(true);
  const updateHeader = (text) => {
    onUpdate(text);
    setEditable(false);
  };

  return editable ? (
    <Input value={title} onSubmit={updateHeader} className='editable-header' />
  ) : (
    <DefaultHeader title={title} onClick={edit} onReset={onReset} />
  );
};

export default Header;
