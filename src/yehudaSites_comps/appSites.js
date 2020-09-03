import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './header';
import Main from './main';
function AppSites(props) {
    return (
        <div >
            {/* <Router> */}
                <Header />
                <Main />
            {/* </Router> */}
        </div>
    )
}

export default AppSites
