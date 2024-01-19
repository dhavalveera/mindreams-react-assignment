import React from 'react'
import ReactDOM from 'react-dom/client'

// react-redux
import { Provider } from 'react-redux'

// Layout
import Layout from './layout/index.tsx'

// Store
import store from './reduxStore/store'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>,
)
