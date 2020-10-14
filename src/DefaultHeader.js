import React from 'react';
import useHover from './useHover';

const DefaultHeader = ({title, onClick, onReset}) => {
  const [ref, isHovered] = useHover();

  return (
    <div className='hover-container' ref={ref}>
      <h1 className='header' onClick={onClick}>
        {title}
      </h1>
      <div onClick={onReset}>{isHovered ? 'X' : ''}</div>
    </div>
  );
};

export default DefaultHeader;
