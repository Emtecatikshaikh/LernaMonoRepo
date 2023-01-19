import React from 'react'
import { Button, setFormData } from 'component-app'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  
  const data = useSelector((state) => state.empSlice.value);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setFormData())
  }

  return (
    <div>
      <Button />
      <button onClick={clickHandler}> Increase ! ( From Shell ) </button> {data}
    </div>
  );
}

export default App