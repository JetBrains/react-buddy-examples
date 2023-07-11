import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const ThemeContext = React.createContext(themes.light);

ReactDOM.render(
    <React.StrictMode>
        <ThemeContext.Provider value={themes.dark}>
            <DevSupport
                ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </ThemeContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
