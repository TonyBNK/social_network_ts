import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import logo from './images/logo.png'

function App() {
    return (
        <div className="app-wrapper">
            <Header logotype={logo}/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
