import './App.css';
import {useState} from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Trailerstarwars from './Trailerstarwars';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Filter from './Filter';

function App() {
  const [KeyWords, setKeyWords] =useState('')
  const [movies, setMovies ]= useState([
    {id:1, img :" https://upload.wikimedia.org/wikipedia/en/7/72/Star_wars_the_clone_wars.jpg", name:"starwars", description:"kthry"},
    {id:2, img :" https://fr.web.img4.acsta.net/r_1280_720/pictures/22/09/14/10/01/0595808.jpg",name:"smile", description:"kthry"},
    {id:3, img :" https://fr.web.img6.acsta.net/pictures/22/12/02/16/03/2536613.jpg",name:"babylon", description:"kthry"},
  ])

  const AddNewMovie = (newMovie) => {
    setMovies ([...movies , newMovie])
  }
  const searchMov = (text) => {
    setKeyWords (text)
  }
  return (
    <div className="App">
      <AddMovie AddNewMovie={AddNewMovie}/>
      <Filter searchMov ={searchMov}/>
      <hr></hr>
      <MovieList movies={movies.filter(elm => elm.name.includes(KeyWords.toLowerCase().trim()))}/>
      <Routes>
      
        <Route path='/Trailerstarwars/:id' element={<Trailerstarwars movies={movies}/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
