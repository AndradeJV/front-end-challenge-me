import React from 'react';

import './Addresses.css';

import imgSeta from '../images/seta.png';
import imgFax from '../images/fax.png';
import imgEmail from '../images/o-email.png';
import imgPhoneNumber from '../images/phone.png';
import imgLocalizacao from '../images/localizacao.png';
import imgUser from '../images/user.png';

const Addresses = () => {

    var resData = '';
    
    async function getContentHeaderNumber() {
        try {
            const res = await fetch("https://me-frontend-challenge-api.herokuapp.com/orders/1");
    
            resData = await res.json();
            
            showBlocoUm(resData);
            showBlocoDois(resData);
            showBlocoTres(resData);

        } catch (error){
            console.log("Erro: " + error);
        }
    }

    getContentHeaderNumber();

    const showBlocoUm = () => {
        document.getElementsByClassName("titleUm")[0].innerHTML = resData.addresses[0].label;
        document.getElementsByClassName("subtitleUm")[0].innerHTML = resData.addresses[0].name;
        document.getElementsByClassName("codeUm")[0].innerHTML = "- (" + resData.addresses[0].code + ")";
        document.getElementsByClassName("endUm")[0].innerHTML = resData.addresses[0].address;
        document.getElementsByClassName("clientUm")[0].innerHTML = resData.addresses[0].contact.name;
        document.getElementsByClassName("emailUm")[0].innerHTML = resData.addresses[0].contact.email;
        document.getElementsByClassName("numberUm")[0].innerHTML = resData.addresses[0].contact.phone;
        document.getElementsByClassName("faxUm")[0].innerHTML = resData.addresses[0].contact.fax;
    }

    const showBlocoDois = () => {
        document.getElementsByClassName("titleDois")[0].innerHTML = resData.addresses[1].label;
        document.getElementsByClassName("subtitleDois")[0].innerHTML = resData.addresses[1].name;
        document.getElementsByClassName("codeDois")[0].innerHTML = "- (" + resData.addresses[1].code + ")";
        document.getElementsByClassName("endDois")[0].innerHTML = resData.addresses[1].address;
        document.getElementsByClassName("clientDois")[0].innerHTML = resData.addresses[1].contact.name;
        document.getElementsByClassName("emailDois")[0].innerHTML = resData.addresses[1].contact.email;
        document.getElementsByClassName("numberDois")[0].innerHTML = resData.addresses[1].contact.phone;
        document.getElementsByClassName("faxDois")[0].innerHTML = resData.addresses[1].contact.fax;

    }
    const showBlocoTres = () => {
        document.getElementsByClassName("titleTres")[0].innerHTML = resData.addresses[2].label;
        document.getElementsByClassName("subtitleTres")[0].innerHTML = resData.addresses[2].name;
        document.getElementsByClassName("codeTres")[0].innerHTML = "- (" + resData.addresses[2].code + ")";
        document.getElementsByClassName("endTres")[0].innerHTML = resData.addresses[2].address;
        document.getElementsByClassName("clientTres")[0].innerHTML = resData.addresses[2].contact.name;
        document.getElementsByClassName("emailTres")[0].innerHTML = resData.addresses[2].contact.email;
        document.getElementsByClassName("numberTres")[0].innerHTML = resData.addresses[2].contact.phone;
        document.getElementsByClassName("faxTres")[0].innerHTML = resData.addresses[2].contact.fax;
    }

    return(
        <div className="Addresses">
            <div className="divBotao">
                <button className="botao">
                    <img className="seta" src={imgSeta} width="20"/>
                </button>
                <h1 className="index">Addresses</h1>
            </div>

            <div className="infosUm">
                <h2 className="titleUm"></h2>
                <h1 className="subtitleUm"></h1>

                <em>
                    <p className="codeUm"></p>
                </em>
                
                <br/>

                <img src={imgLocalizacao} width="15"/>
                <p className="endUm"></p>
                
                <br/>
                <img src={imgUser} width="15"/>
                <p className="clientUm"></p>
                
                <br/>
                <img src={imgEmail} width="15"/>
                <p className="emailUm"></p>
                
                <br/>
                <img src={imgPhoneNumber} width="15"/>
                <p className="numberUm"></p>
                <img src={imgFax} width="15" className="faxTres"/>
                <p className="faxUm"></p>
            </div>

            <div className="infosDois">
                <h2 className="titleDois"></h2>
                <h1 className="subtitleDois"></h1>

                <em>
                    <p className="codeDois"></p>
                </em>
                
                <br/>

                <img src={imgLocalizacao} width="15"/>
                <p className="endDois"></p>
                
                <br/>
                <img src={imgUser} width="15"/>
                <p className="clientDois"></p>
                
                <br/>
                <img src={imgEmail} width="15"/>
                <p className="emailDois"></p>
                
                <br/>
                <img src={imgPhoneNumber} width="15"/>
                <p className="numberDois"></p>
                <img src={imgFax} width="15" className="faxTres"/>
                <p className="faxDois"></p>
            </div>

            <div className="infosTres">
                <h2 className="titleTres"></h2>
                <h1 className="subtitleTres"></h1>

                <em>
                    <p className="codeTres"></p>
                </em>
                
                <br/>
                
                <img src={imgLocalizacao} width="15"/>
                <p className="endTres"></p>
                
                <br/>
                <img src={imgUser} width="15"/>
                <p className="clientTres"></p>
                
                <br/>
                <img src={imgEmail} width="15"/>
                <p className="emailTres"></p>
                
                <br/>
                <img src={imgPhoneNumber} width="15"/>
                <p className="numberTres"></p>
                
                <img src={imgFax} width="15" className="faxTres"/>
                <p className="faxTres"></p>
            </div>
        </div>
    );
}

export default Addresses;