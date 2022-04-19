import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

ReactDOM.render(
    <React.StrictMode>
        <DevSupport
            ComponentPreviews={ComponentPreviews}
            useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>,
    document.getElementById('root')
)
