import React from 'react';
import './Header.css';

import imglogo from '../images/favicon.png';
import imgFax from '../images/fax.png';
import imgGrupo from '../images/grupo.png';
import imgEmail from '../images/o-email.png';
import imgPhoneNumber from '../images/phone.png';
import imgInfo from '../images/sinal-de-informacao.png';

const Header = () => {

    var resData = '';

    const data = new Date();

    const day = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();

    async function getContentHeaderNumber() {
        try {
            const res = await fetch("https://me-frontend-challenge-api.herokuapp.com/orders/1");
    
            resData = await res.json(); 

            showHeaderNumberInfos(resData);
            showHeaderCentralInfos(resData);
            showHeaderValuesInfos(resData);

        } catch (error){
            console.log("Erro: " + error);
        }
    }
    
    getContentHeaderNumber();

    const showHeaderNumberInfos = () => {
        document.getElementsByClassName("number")[0].innerHTML = resData.header.number;
        document.getElementsByClassName("numberSerial")[0].innerHTML ="SerialME " + resData.header.serial;
    }

    const showHeaderCentralInfos = () => {
        document.getElementsByClassName("buyer")[0].innerHTML = resData.header.buyer;
        document.getElementsByClassName("nameInfos")[0].innerHTML = resData.header.contact.name;
        document.getElementsByClassName("email")[0].innerHTML = resData.header.contact.email;
        document.getElementsByClassName("phone")[0].innerHTML = resData.header.contact.phone;
        document.getElementsByClassName("fax")[0].innerHTML = resData.header.contact.fax;
    }

    const setData = day + '/' + month + '/' + year;

    const showHeaderValuesInfos = () => {
        document.getElementsByClassName("moeda")[0].innerHTML = resData.header.currency + " " + resData.header.price;
        document.getElementsByClassName("status")[0].innerHTML = resData.header.status;
        document.getElementsByClassName("created")[0].innerHTML = "Created on " + setData;
    }

    return (
        <div className="Header">
            <div className="infoLateralEsq">
                <h1 className="title">Purchase Order</h1>
                <p className="number"></p>
                <em>
                    <p className="numberSerial"></p>
                </em>
                <div className="imgLogo">
                    <img src={imglogo} alt="icon ME" width="40px" className="logoIcon"/>
                </div>
            </div>

            <div className="infoCentral">    
                <div className="icons">
                    <h1 className="buyer"></h1>
                    
                    <div className="infos">
                        <img src={imgGrupo} alt="icon Grupo" className="iconGrupo"/>
                        <div className="nameInfos"></div>
                        <img src={imgInfo} alt="icon Info" className="iconInfo"/>
                    </div>
                    
                    <img src={imgEmail} alt="icon Email" className="iconEmail"/>            
                    <div className="email"></div>
                    
                    <img src={imgPhoneNumber} alt="icon Phone" className="iconPhone"/>
                    <div className="phone"></div>

                    <img src={imgFax} alt="icon fax" className="iconFax"/>
                    <div className="fax"></div>                               
                </div>
            </div>

            <div className="infoLateralDir">
                <div className="infoValue">
                    <h1 className="moeda"></h1>
                    <h1 className="value"></h1>
                </div>
                
                <div className="status"></div>
                <div className="created"></div>
            </div>
        </div>
    );
}

export default Header;