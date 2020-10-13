import React, {useContext, useState} from 'react';
import Input from './Input';
import DefaultHeader from './DefaultHeader';
import TodoContext from './TodoContext';

const Header = ({title, onUpdate, onReset}) => {
  const [editable, setEditable] = useState(false);
  const {dispatch} = useContext(TodoContext);

  const edit = () => setEditable(true);
  const updateHeader = (text) => {
    dispatch({type: 'UPDATE_TITLE', text});
    setEditable(false);
  };

  return editable ? (
    <Input value={title} onSubmit={updateHeader} className='editable-header' />
  ) : (
    <DefaultHeader title={title} onClick={edit}/>
  );
};

export default Header;
