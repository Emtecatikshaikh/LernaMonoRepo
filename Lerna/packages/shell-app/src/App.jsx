import React from 'react'
import { Button, setFormData } from 'component-app'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.empSlice.value)
  const clickHandler = () => {
     dispatch(setFormData())
  }
  return (
    <div>
      <Button />
      Added Redux !
      {data}
      <br />
      <button onClick={clickHandler}>Increase</button>
    </div>
  )
}

export default App