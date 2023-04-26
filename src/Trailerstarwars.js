import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'

const Trailerstarwars = ({movies}) => {
  
  const params = useParams()
  const Navigate =useNavigate()
    
  console.log(params)
  console.log('hee',movies)

  
  const oneMovie = movies.find(el=> el.id == params.id)
  console.log(oneMovie)
  return (
    <div>
      
          <h1>{oneMovie.description}</h1>
          <br/>
          <h6>{oneMovie.Img}</h6>
          <br/>
          <button onClick={()=> Navigate('/')}>back to movies list</button>
              


    
    
    </div>
    
  )
}

export default Trailerstarwars
