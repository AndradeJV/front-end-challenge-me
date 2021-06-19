import React from 'react';
import './Header.css';

import imglogo from '../../images/favicon.png';

const HeaderLat = () => {

    var data = '';

    async function getContentHeaderNumber() {
        try {
            const res = await fetch("https://me-frontend-challenge-api.herokuapp.com/orders/1");
    
            data = await res.json(); 
            showHeaderNumber(data);
            
        } catch (error){
            console.log("Erro: " + error);
        }
    }
	
    getContentHeaderNumber();

    const showHeaderNumber = () => {
        document.getElementsByClassName("number")[0].innerHTML = data.header.number;
        document.getElementsByClassName("numberSerial")[0].innerHTML = data.header.serial;
    }

    return (
        <div className="Header">
            <div className="infoLateral">
                <h1 className="title">Purchase Order</h1>
                <p id="number" className="number"></p>
                <p className="numberSerial"><em></em></p>
                <div className="imgLogo">
                    <img src={imglogo} alt="icon ME" width="40px" className="logoIcon"/>
                </div>
            </div>

        </div>
    )
}

export default HeaderLat;