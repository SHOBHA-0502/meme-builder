import React from 'react';
import App from '../App';
import './App.css'

export default function Header(){
    return (
        <header className="header">
        <img src="./images/Troll-Face.png" className="header--image"/>
            <h2 className="header--title" >Meme Builder</h2>
            <h4  className="header--project"></h4>
        </header>
       
    )
}