import React, { useState } from 'react'
import { useEffect } from 'react'

const List = ({getItems}) => {
    
    const [items,setItems] = useState([])
   
    useEffect(() => {
        setItems(getItems())
        console.log("List is Being Called and Updated");
    },[getItems])
    
  return items.map(item => <div key={item}>{item}</div>)
}

export default List