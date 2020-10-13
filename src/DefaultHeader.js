import React, {useContext} from 'react';
import useHover from './useHover';
import TodoContext from './TodoContext';

const DefaultHeader = ({title, onClick}) => {
  const [ref, isHovered] = useHover();
  const {dispatch} = useContext(TodoContext);
  const reset = () => dispatch({type: 'RESET'});

  return (
    <div className='hover-container' ref={ref}>
      <h1 className='header' onClick={onClick}>
        {title}
      </h1>
      <div onClick={reset}>{isHovered ? 'X' : ''}</div>
    </div>
  );
};

export default DefaultHeader;
