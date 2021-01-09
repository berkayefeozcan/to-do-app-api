import React from 'react';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
const FormComponent = props => {
    return (
        <Card>
            <Form onSubmit={props.submitHandler}>
                <Card.Header>
                    <Form.Control placeholder="Note Title" name="title" onChange={props.noteChangeHandler} />
                </Card.Header>

                <Card.Body>
                    <Form.Control placeholder="Subject" name="subject" onChange={props.noteChangeHandler} />
                   
                    <Form.Control as="textarea" rows={3} placeholder="Note" name="note" onChange={props.noteChangeHandler} />
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" type="submit">
                        Add New Note
                     </Button>
                </Card.Footer>

            </Form>
        </Card>

    );
}

export default FormComponent;