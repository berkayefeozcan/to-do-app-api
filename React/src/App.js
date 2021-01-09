import React, { useState, useEffect } from 'react';
import { Button, Container, Navbar, Form, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import FormComponent from './components/FormComponent';
import NoteCard from './components/NoteCard';

const App = () => {
  //ilk basta not ekleme formu gorunur degil
  const [formVisibility, setFormVisiblity] = useState(false);
  const [formData, setFormData] = useState({
    note: "",
    subject: "",
    title: ""
  });
  const [notes, setNotes] = useState([]);

  const noteChangeHandler = (event) => {

    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };
  const submitHandler = e => {
    //api a post request yapiliyor.
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    //console.log(jsonData);
    axios.post('http://localhost:8080/insert', jsonData, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        alert(response.data);
        // not ekleme formunu gorunmez hale getirdik.
        setFormVisiblity(false);
      }).catch(error => {
        console.log(error);
      });

  };
  const addNoteButtonHandler = () => {
    setFormVisiblity(!formVisibility);

  };


  useEffect(() => {
    // yan etki olarak her renderdan sonra notes degismisse calisir.
    axios.get('http://localhost:8080/read')
      .then((response) => {
        setNotes(response.data);
       
      }).catch(err => {
        alert('Fetch Error');
      });
  }, [notes]);

  return (
    <div>
      <header >
        <Navbar bg="dark" variant="dark">

          <Navbar.Brand >Basit Notlar Al </Navbar.Brand>
        </Navbar>
      </header>

      <Container className="p-3" >
        <Col>
          <Row className="justify-content-md-center">
            <h1 className="header">
              ---Notlar---
        </h1>
          </Row>

          <Row className="justify-content-md-center">
            {
              !formVisibility &&
              (<Button variant="success" onClick={addNoteButtonHandler}>
                +
              </Button>)
            }
            {
              formVisibility &&
              (<Button variant="danger" onClick={addNoteButtonHandler}>
                x
              </Button>)
            }
          </Row>
          <Row className="justify-content-md-center">
            {formVisibility &&
              <FormComponent
                submitHandler={submitHandler}
                noteChangeHandler={noteChangeHandler}
              />}
            <br></br>
          </Row>


          <Row className="justify-content-md-center">
            <NoteCard notes={notes} setFormVisiblity={setFormVisiblity} 
            noteChangeHandler={noteChangeHandler} formData={formData}/>

          </Row>
        </Col>
      </Container>

    </div>



  );
}

export default App;
