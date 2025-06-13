import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import reducers from './reducers/Reducers.tsx'
const store = createStore(reducers , compose(applyMiddleware(thunk)))
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>,
  </Provider>

)
