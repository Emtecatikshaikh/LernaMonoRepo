import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFormData } from './Slice/empSlice';

export const Button = () => {
  
  const data = useSelector((state) => state.empSlice.value);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setFormData());
  };

  return (
    <div>
      <button onClick={clickHandler}> Click me ! ( From Child ) </button> {data}
    </div>
  );
}

