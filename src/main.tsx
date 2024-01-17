import React from 'react'
import ReactDOM from 'react-dom/client'

// // react-redux
// import { Provider } from 'react-redux'

// // Store
// import store from './redux-saga/store'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
)
