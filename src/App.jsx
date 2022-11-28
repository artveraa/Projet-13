import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import {Routes, Route} from "react-router-dom";
import React from 'react';
import {useSelector} from "react-redux";

function App() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/sign-in" element={<SignIn/>}/>
                <Route exact path="/profile" element={isLoggedIn ? <User/> : <SignIn/>}/>
                </Routes>

                <Footer/>
        </div>
);
                }

export default App;
