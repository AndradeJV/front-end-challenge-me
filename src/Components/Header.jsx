import React from 'react';
import './Header.css';

import imglogo from '../images/favicon.png';

const Header = () => {

    //const number = document.querySelector("#number");

    async function getContentHeaderNumber() {
        try {
            const res = await fetch("https://me-frontend-challenge-api.herokuapp.com/orders/1");
    
            const data = await res.json(); 

            console.log("Chamando no try " + data);
            showHeaderNumber(data);
            
        } catch (error){
            console.log("Erro: " + error);
        }
    }
	
    getContentHeaderNumber();

    function showHeaderNumber (users) {

        let output = '';

        for(var user in users){
            output += `<p>${user.header}</p>`;
            console.log("Output " + output);
        }

        document.querySelector('p').innerHTML = user.header;
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

export default Header;