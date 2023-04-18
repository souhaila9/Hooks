import React from 'react'
import Moviecard from './Moviecard'


const MovieList = ({movies}) => {
  return (
    <div>
        {
      movies.map((el,i) => <Moviecard el={el} key={i}/>)
    }
  
    
    </div>
  )
}

export default MovieList