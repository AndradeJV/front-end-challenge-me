import React from 'react';
import './Body.css';

import imgPhone from '../images/phone.png';
import imgFax from '../images/fax.png';
import imgEnviar from '../images/enviar.png';
import imgUser from '../images/user.png';
import imgView from '../images/visualizar.png';

const Body = () => {

    var resData = '';

    async function getContentHeaderNumber() {
        try {
            const res = await fetch("https://me-frontend-challenge-api.herokuapp.com/orders/1");
    
            resData = await res.json();
            
            showCodeSupplierOne(resData);
            showCodeSupplierTwo(resData);
            showCodeSupplierThrees(resData);

        } catch (error){
            console.log("Erro: " + error);
        }
    }
	
    getContentHeaderNumber();

    const showCodeSupplierOne = () => {
        document.getElementsByClassName("client")[0].innerHTML = resData.supplier.name;
        document.getElementsByClassName("code")[0].innerHTML = "Code #" + resData.supplier.code;
        document.getElementsByClassName("cnpj")[0].innerHTML = resData.supplier.document.value;
        document.getElementsByClassName("addreses")[0].innerHTML = resData.supplier.address;
    }

    const showCodeSupplierTwo = () => {
        document.getElementsByClassName("name")[0].innerHTML = resData.supplier.contact.name + " -";
        document.getElementsByClassName("contato")[0].innerHTML = resData.supplier.contact.email;
        document.getElementsByClassName("telefone")[0].innerHTML = resData.supplier.contact.phone;
        document.getElementsByClassName("contatoDois")[0].innerHTML = resData.supplier.contact.fax;
    }

    const showCodeSupplierThrees = () => {
        document.getElementsByClassName("view")[0].innerHTML = "Read: " + resData.supplier.readAt;
        document.getElementsByClassName("historico")[0].innerHTML ="Last Reply: " + resData.supplier.lastReplyAt;
    }

    return (
        <div className="body">
            <div className="supplierOne">
                <h2 className="main">Supplier</h2>
                <h1 className="client"></h1>
                <p className="code"></p>
                <br/>
                <p className="cnpj"></p>
                <br/>
                <p className="addreses"></p>
            </div>

            <div className="supplierTwo">
                <img src={imgUser} width="15"/>
                <p className="name"></p>
                
                <p className="contato"></p>
                <br/>
                <img class="iconTelefone" src={imgPhone} width="15"/>
                
                <p className="telefone"></p>
                <img src={imgFax} width="15"/>
                <p className="contatoDois"></p>
            </div>

            <div className="supplierThree">
                <img src={imgView} width="15"/>
                <p className="view"></p>

                <br/>
                <img src={imgEnviar} width="15"/>
                <p className="historico"></p>
            </div>
        </div>
    );
}

export default Body;