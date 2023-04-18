import React, { useState } from 'react'


const AddMovie = ({AddNewMovie}) => {
    const [ inputs, setInputs ] = useState ({
        img : "",
        name : "",
        description :""
   } )

   const handleChange = (e) => {
    setInputs ( {...inputs, [e.target.name] :e.target.value})
   }
  return (
    <div>
       <input placeholder='img' name='img' onChange = {handleChange}/>
        <input placeholder='name'name='name'onChange = {handleChange}/>
        <input placeholder='description'name='description'onChange = {handleChange}/>
        <button onClick={()=>AddNewMovie(inputs)} > add movie</button>
    </div>
  )
}

export default AddMovie