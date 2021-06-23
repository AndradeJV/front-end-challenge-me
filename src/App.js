import React from 'react';
import './App.css';

import Header from './Components/Header.jsx';
import Body from './Components/Body.jsx';
import Addresses from './Components/Addresses.jsx';

const App = () => {

    return (
        <div className="App">
            <Header/>
            <Body/>
            <Addresses/>
        </div>
    );
}

export default App;