import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./Header/header";
import Main from "./Main/main";

import './reset.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Route to="/" exact component={Main} />
                    {/*<Main/>*/}
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
