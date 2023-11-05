import React, { useState } from 'react';
import Placeholder from './img/placeholder.jpg'
import Binny from './img/binnyVersion1.png'
import {
    Link
  } from "react-router-dom";
import './App.css';

function IdentifyWaste() {

    // gets the waste name from the url and makes it into a string
    var url = window.location.pathname;
    let wasteUrlString = url.split('/').pop()
    let wasteName = decodeURI(wasteUrlString)


    return (
        <div className="App">
            <h3 className="WasteTittle">{wasteName}</h3>
            <img src={Placeholder} alt="Placeholder" className="IdentifyWasteImage" /><br />

            <div className="circular-sb-identify">
                Is your waste some of these:
                <li>Fruit peels</li>
                <li>Spindle of the fruit</li>
                <li> Rotten fruit or vegetable?</li>
                <br />
                It goes in the bio waste (<span className='binText'>red bin</span>). Let’s see where the bin is!
            </div>
            <img src={Binny} alt="trash can" className='identifyWaste-binny' />
            <Link to="/map">
            <button className='Yes-button'>Yes &#9989;</button>
            </Link>
            <Link to="/ask-binny-app">
                <button className='No-button'>No &#10060;</button>
            </Link>
            <div className='footer'>Available in TAMK C-building</div>
        </div >
    );
}
export default IdentifyWaste;