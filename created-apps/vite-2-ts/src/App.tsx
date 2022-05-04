import {MouseEvent, useState} from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cefError, setCefError] = useState<string|null>(null)

  function onButtonClick(event: MouseEvent<HTMLButtonElement>) {
    // @ts-ignore
    window.cefQuery(
      {
        request: (count+1).toString(),
        onFailure: function(errorCode: any, errorMessage: any) {
          setCefError(` error code: ${errorCode} error message: ${errorMessage}`)
        }
      }
    )
    setCount(count => {
      return count+1;
    });

  }

  // @ts-ignore
  const typeofCef = typeof window.cefQuery;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={onButtonClick}>
            Trigger query
          </button>
        </p>
        <p>
          {count}
        </p>
        <p color={'red'}>
          {cefError}
        </p>
        <p>
          cefQuery: {typeofCef}
        </p>

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
