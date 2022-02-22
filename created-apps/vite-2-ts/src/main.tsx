import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {DevSupport, Previews} from "@react-buddy/ide-toolbox";
import {ComponentPreviews} from "./dev/previews";
import {useInitial} from "./dev/hook";

ReactDOM.render(
  <React.StrictMode>
      <DevSupport ComponentPreviews={ComponentPreviews}
                  useInitialHook={useInitial}>
          <App />
      </DevSupport>
  </React.StrictMode>,
  document.getElementById('root')
)
