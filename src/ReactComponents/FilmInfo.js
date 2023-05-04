import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Image} from "react-bootstrap";


const FilmInfo = ({ item }) => (
    <Card className="mx-2" style={{ minWidth: '18rem', maxWidth: '18rem' }}>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Genre: {item.genre}</Card.Subtitle>
            <Card.Text>Author: {item.author}</Card.Text>
            <Image src={item.img} alt="Sample" thumbnail />
        </Card.Body>
    </Card>
);

export default FilmInfo;