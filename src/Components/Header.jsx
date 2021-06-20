import React from 'react';
import './Header.css';

import imglogo from '../images/favicon.png';
import imgFax from '../images/fax.png';
import imgGrupo from '../images/grupo.png';
import imgEmail from '../images/o-email.png';
import imgPhoneNumber from '../images/phone.png';
import imgInfo from '../images/sinal-de-informacao.png';

const Header = () => {

    var data = '';

    async function getContentHeaderNumber() {
        try {
            const res = await fetch("https://me-frontend-challenge-api.herokuapp.com/orders/1");
    
            data = await res.json(); 
            showHeaderNumberInfos(data);
            showHeaderCentralInfos(data);
            showHeaderValuesInfos(data);

        } catch (error){
            console.log("Erro: " + error);
        }
    }
	
    getContentHeaderNumber();

    const showHeaderNumberInfos = () => {
        document.getElementsByClassName("number")[0].innerHTML = data.header.number;
        document.getElementsByClassName("numberSerial")[0].innerHTML ="SerialME " + data.header.serial;
    }

    const showHeaderCentralInfos = () => {
        document.getElementsByClassName("buyer")[0].innerHTML = data.header.buyer;
        document.getElementsByClassName("name")[0].innerHTML = data.header.contact.name;
        document.getElementsByClassName("email")[0].innerHTML = data.header.contact.email;
        document.getElementsByClassName("phone")[0].innerHTML = data.header.contact.phone;
        document.getElementsByClassName("fax")[0].innerHTML = data.header.contact.fax;
    }

    const showHeaderValuesInfos = () => {
        document.getElementsByClassName("moeda")[0].innerHTML = data.header.currency;
        document.getElementsByClassName("value")[0].innerHTML = data.header.price;
        document.getElementsByClassName("status")[0].innerHTML = data.header.status;
        document.getElementsByClassName("created")[0].innerHTML = data.header.createdAt;
    }

    return (
        <div className="Header">
            <div className="infoLateralEsq">
                <h1 className="title">Purchase Order</h1>
                <p className="number"></p>
                <em><p className="numberSerial"></p></em>
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
                <div className="price">
                    <div className="moeda"></div>
                    <div className="value"></div>
                </div>
                <div className="status"></div>
                <div className="created"></div>
            </div>
        </div>
    );
}

export default Header;