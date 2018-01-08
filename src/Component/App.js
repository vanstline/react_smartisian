import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./Header/header";
import Main from "./Main/main";
import Detail from './Detail/detail';

import './reset.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">

                    <Header/>

                    <div id="main">

                        {/*<Switch>*/}
                            {/*<Route path="/" exact component={Main} />*/}
                            {/*<Route path="/detail/:id" component={Detail} />*/}
                        {/*</Switch>*/}

                        <Route path="/" exact component={Main} />
                        <Route path="/detail/:id" exact component={Detail} />

                    </div>

                </div>
            </BrowserRouter>

        );
    }
}

export default App;
