import React from 'react'
import { useParams } from 'react-router-dom'

const Trailerstarwars = ({movies}) => {
  
  const params = useParams()
    
  console.log(params)
  
  const oneMovie = movies.find(el=> el.id == params.id)
  console.log(oneMovie)
  return (
    <div>
      {oneMovie.name}
    </div>
  )
}

export default Trailerstarwars
