import React, { useState } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import axios from 'axios';
const EditCard = (props) => {
    const [formData, setFormData] = useState({
        note: props.note.note,
        subject: props.note.subject,
        title: props.note.title
      });
      const noteChangeHandler = (event) => {

        setFormData(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value
        }));
      };
    const updateNoteHandler = () => {
        axios.post('http://localhost:8080/update', { "_id": props.note._id ,
        "_title" : formData.title , "_subject": formData.subject,"_note":formData.note}, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                alert(response.data);
                // not ekleme formunu gorunmez hale getirdik.
                props.setIsVisible();
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <Container fluid>
            <Form onSubmit={() => { }}>
                <Card.Header>
                    <Form.Control value={formData.title} name="title" onChange={noteChangeHandler} />
                </Card.Header>

                <Card.Body>
                    <Form.Control value={formData.subject} name="subject" onChange={noteChangeHandler} />

                    <Form.Control as="textarea" rows={3} value={formData.note} name="note" onChange={noteChangeHandler} />
                </Card.Body>
                <Card.Footer>
                    <Button variant="success" onClick={props.setIsVisible} >
                        Back to Note
                 </Button>
                    <Button variant="primary" type="submit" onClick={updateNoteHandler}>
                        Update Note
                 </Button>
                </Card.Footer>

            </Form>
        </Container>
    );
};
export default EditCard;