import React from 'react';
import './App.css';

import HeaderLat from './Components/HeaderLat/HeaderLat.jsx';
import HeaderMTP from './Components/HeaderMTP/HeaderMTP.jsx';

const App = () => {

    return (
        <div className="App">
            <HeaderLat/>
            <HeaderMTP/>
        </div>
    );
}

export default App;