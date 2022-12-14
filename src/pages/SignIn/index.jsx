import "./style.scss"
import React from 'react';
import {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {login} from '../../redux/actions/auth';
import User from "../User/index.jsx";

const required = (value) => {
    if(!value) {
        return (
            <div className={"alert alert-danger"} role="alert">
                Ce champs est requis.
            </div>
        )
    }
}

function SignIn(props) {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(username, password))
                .then(() => {
                    navigate("/sign-in");
                    //window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/profile" replace={true} />;
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Form onSubmit={handleLogin} ref={form}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <Input type="mail" id="username" className={"form-control"} name={'username'} value={username} onChange={onChangeUsername} validations={[required]}/>
                    </div>
                    <div className="input-wrapper">
                        <div className="form-group">
                            <label htmlFor="password">Mot de passe</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required]}
                            />
                        </div>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
                    >Remember me</label
                    >
                    </div>

                    <div className="form-group">
                        <CheckButton className="btn btn-primary btn-block" disabled={loading} ref={checkBtn}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                        </CheckButton>
                    </div>

                </Form>
            </section>
        </main>
    )
}

export default SignIn;