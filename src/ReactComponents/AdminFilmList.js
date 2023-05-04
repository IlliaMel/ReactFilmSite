import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Card, Image} from "react-bootstrap";
import '../style/HorizontalList.css';
import FilmInfo from "./FilmInfo";
import FilmInput from "./FilmCreator";
import Cookies from 'js-cookie';
import {Outlet} from "react-router-dom";

export default function AdminFilmList () {

    const [films, setFilms] = useState([]);
    const [filmToUpdate, setFilmUpdate] = useState(null);
    const [addingFilm, setAddFilm] = useState(false);


    const [auth, setAuth] = useState(false);

    const token = Cookies.get('login-token');

    useEffect(() => {
        fetch('authorization/checkout', {
            headers: {"Authorization": `Bearer ${token}`},
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message)
                setAuth(data.message === "Authorized")
            })
            .catch(err => console.error(err));
    }, [token]);



    useEffect(() => {
            fetch('/films')
                .then(res => res.json())
                .then(data => setFilms(data))
                .catch(err => console.error(err));
    }, []);


    const addFilm = (newFilm) => {
        fetch('/films', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newFilm)
        })
            .then(res => res.json())
            .then(data => {
                setFilms([...films, data]);
                setAddFilm(false);
            })
            .catch(err => console.error(err));
    };

    const deleteFilm = (id) => {
        fetch(`/films/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => setFilms(films.filter((g) => g._id !== data._id)))
            .catch(err => console.error(err));
    };

    const updateFilm = (id, updates) => {
        fetch(`/films/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updates)
        })
            .then(res => res.json())
            .then(data => {
                const updatedFilm = films.map(g => {
                    if (g._id === data._id) return data;
                    else return g;
                });
                setFilms(updatedFilm);
                setFilmUpdate(null);
            })
            .catch(err => console.error(err));
    };

    const handleFilmUpdateSubmit = (film) => {
        updateFilm(filmToUpdate._id,film)
    };

    const handleFilmAddSubmit = (film) => {
        addFilm(film)
        setAddFilm(false);
    };

    const handleUpdateClose = () => {
        setFilmUpdate(null);
    };

    const handleAddClose = () => {
        setAddFilm(false);
    };


    const HorizontalList = ({ items }) => {
        return (
            <div className="horizontal-list">
                {items.map((item) => (
                    <div className="mx-2" style={{ minWidth: '18rem', maxWidth: '18rem' }}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <FilmInfo key={item.id} item={item} />
                            <div>
                                <button onClick={() => deleteFilm(item._id)} type="button" className="btn btn-sm btn-danger m-2">Delete</button>
                                <button onClick={() => setFilmUpdate(item)} type="button" className="btn btn-sm btn-success m-2">Update</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        );
    };
    if(!auth)
        return <div>You have no access to this page</div>;

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <HorizontalList items={films} />
            {filmToUpdate &&  <FilmInput onClose={handleUpdateClose} film={filmToUpdate} onSubmit={handleFilmUpdateSubmit} />}
            {addingFilm &&  <FilmInput onClose={handleAddClose} film={{
                "title" : "",
                "genre" : "",
                "author" : "",
                "img" : ""
            }} onSubmit={handleFilmAddSubmit} />}
            <button onClick={() => setAddFilm(true)} type="button" className="fixed-btn btn btn-sm btn-dark px-3 py-2">Add new</button>
        </div>

    );
};


