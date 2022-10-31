import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import {Routes, Route} from "react-router-dom";
import React from 'react';

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/profile" element={<SignIn/>}/>
                <Route exact path="/user" element={<User/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
