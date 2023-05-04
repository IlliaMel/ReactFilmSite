import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';
import '../style/FilmInput.css';

const FilmInput = ({ onSubmit, onClose , film }) => {
    const [title, setTitle] = useState(film.title);
    const [genre, setGenre] = useState(film.genre);
    const [author, setAuthor] = useState(film.author);
    const [img, setImg] = useState(film.img);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, genre, author, img });
    };

    return (


        <Card className="input-card" style={{ width: '18rem', margin: '1rem' }}>
            <Card.Header>
                <Button
                    variant="secondary"
                    size="sm"
                    className="float-right"
                    onClick={onClose}
                >
                    &times;
                </Button>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Genre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter image URL"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                        />
                    </Form.Group>
                    <Button  className="btn btn-sm btn-success mt-3" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default FilmInput;