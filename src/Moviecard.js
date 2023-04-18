import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Moviecard = ({el}) => {
  return (
    <div class="row justify-content-center">
      
    <Card style={{ width: '18rem' , color : "black" }}>
         
        <Card.Img variant="top" src={el.img} />
            <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Title>{el.id}</Card.Title>
            <Card.Text>
              {el.description}
            </Card.Text>
              <Link to={`/Trailerstarwars/${el.id}`} > description </Link>
            </Card.Body>
        </Card>
        </div>
  )
}

export default Moviecard


