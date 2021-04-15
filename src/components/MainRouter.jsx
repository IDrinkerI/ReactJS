import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";

import Home from "./Home.jsx";
import Messenger from "./Messenger.jsx";
import Profile from "./Profile.jsx";
import Weather from "./Weather.jsx";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/chat/1">Chat</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/weather">Weather</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/chat/:chatId?">
                    <Messenger />
                </Route>

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route>
                    <Weather />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouter;