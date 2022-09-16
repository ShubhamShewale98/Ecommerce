import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Home=()=>{
const data = useSelector((state)=>state.products)
  useEffect(() => {
    
  }, []);
  return (
    <div>Home PAge</div>
  )
}

export {Home}