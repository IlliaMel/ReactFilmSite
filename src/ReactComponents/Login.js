import '../style/Login.css';
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {Link, useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';
import {Button} from "react-bootstrap";

export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await fetch('authorization/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            })
            const data = await res.json();
            if (
                data.token != null
            ) {
                Cookies.set('login-token',  data.token, { secure: true, expires: 7 });
                navigate("/adminFilms");
            } else {
                alert("Invalid username or password");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="login-box">
            <div className="login-tittle-box">
                <h1>LOGIN</h1>
                <h2>Welcome to Admin Panel</h2>
            </div>
            <Form className="login-form" onSubmit={handleSubmit}>
                <Form.Group className="login-form-group" size="lg">
                    <Form.Label>USERNAME</Form.Label>
                    <Form.Control
                        id="control-email-id"
                        autoFocus
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Form.Group  >
                <Form.Group className="login-form-group" size="lg">
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control
                        id="control-password-id"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </Form.Group>
                <Button id="formButton" type="submit" disabled={!validateForm()}>
                    LOGIN
                </Button>
            </Form>
            <div id="allFilmsComponent">
                <Link to="/allFilms">
                    <button id="allFilmsButton">
                        All Films
                    </button>
                </Link>
            </div>
        </div>
    );
}


/*


 */