import React from 'react';
// Theme
import styled, {ThemeProvider} from "styled-components";
import light from "./themes/light"
// Styles
import cl from "./app.module.css"
import {GlobalStyle} from "./globalStyles";
import {Switch, Route, Redirect} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {ServicesPage} from "./pages/ServicesPage";
import {AboutUsPage} from "./pages/AboutUsPage";
import {FeedbackPage} from "./pages/FeedbackPage";
import {HeaderContainer} from "./containers/HeaderContainer";

export const App = () => {

    return (
        <>
        <ThemeProvider theme={light}>
            <GlobalStyle/>
            {/* Header */}
            <HeaderContainer />
            <div className={cl.wrapper}>
                <Switch>
                    <Route exact path={"/home"} >
                    <HomePage/>
                </Route>
                <Route exact path={"/services"}>
                    <ServicesPage/>
                </Route>
                <Route exact path={"/aboutUs"}>
                    <AboutUsPage/>
                </Route>
                <Route exact path={"/feedback"}>
                    <FeedbackPage/>
                </Route>
            </Switch>
        </div>
        </ThemeProvider>

</>

)
}
