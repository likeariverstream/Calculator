import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { Provider } from 'react-redux'
import { App } from './components/app/app'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
