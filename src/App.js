import React from 'react'
import Home from './Home'
import Error from './Error'
import {Routes,Route} from "react-router-dom"
import SingleMovie from './SingleMovie'

const App = () => {
  return (
    <div style={{backgroundColor:"#9EB384",display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
   
     <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<SingleMovie/>}/>
      <Route path="*" element={<Error/>}/>
     </Routes>
  
    </div>
  )
}

export default App