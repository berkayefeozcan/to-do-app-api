import React, { useState } from 'react';
import { Button, Form, Row, Col, Container, Card } from 'react-bootstrap';
import CardView from './CardView';
import EditCard from './EditCard';

const NoteCard = props => {
    const [isVisible, setIsVisible] = useState(false);
    const visiblityHandler = () =>{
        setIsVisible(!isVisible);
    };
   
    return (

        props.notes.map(note => {
            return (
                <Card style={{ margin: 10 }} className="text-center" >
                {isVisible==false ? <CardView note ={note} setIsVisible={visiblityHandler}/> : 
                <EditCard setIsVisible={visiblityHandler}
                 note={note}/>}

                </Card>

            );
        }));
}

export default NoteCard;