import React, { useState, useEffect } from 'react';
import '../style/HorizontalList.css';
import {Card, Image} from "react-bootstrap";
import FilmInfo from "./FilmInfo";

const AllFilmList = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('/films')
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(err => console.error(err));
    }, []);

    const HorizontalList = ({ items }) => {
        return (
            <div className="horizontal-list">
                {items.map((item) => (
                    <FilmInfo key={item.id} item={item} />
                ))}
            </div>
        );
    };

    return (
        <div className="App">
            <HorizontalList items={films} />
        </div>
    );
};

export default AllFilmList;