import React from 'react';
import { Button,Container, Card } from 'react-bootstrap';
import axios from 'axios';
const CardView = (props)=>{
    const deleteNoteHandler = ( ) => {
        axios.post('http://localhost:8080/delete', { "_id": props.note._id}, {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            alert(response.data);
            // not ekleme formunu gorunmez hale getirdik.
            props.setFormVisiblity(false);
          }).catch(error => {
            console.log(error);
          });
      }
     
    return (
        <Container fluid>
            <Card.Header><Card.Title>{props.note.title}</Card.Title></Card.Header>
        <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">{props.note.subject}</Card.Subtitle>
            <Card.Text> {props.note.note}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Container style={{ alignSelf: 'center' }} >

                <Button variant="primary" onClick={props.setIsVisible}>edit</Button>

                <Button variant="danger" onClick={deleteNoteHandler}>delete</Button>
            </Container>
        </Card.Footer>     
        </Container>
        
    );
   };
   export default CardView;