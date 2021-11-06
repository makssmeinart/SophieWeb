import React from 'react';
// Theme
import styled, {ThemeProvider} from "styled-components";
import light from "./themes/light"

export const App = () => {
    return (
        <ThemeProvider theme={light}>
            <div className={"work"}>
                Hello
            </div>
        </ThemeProvider>
    )
}
