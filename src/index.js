import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { ApiProvider } from './ApiProvider'

import { ChainId, DAppProvider } from '@usedapp/core'

import './i18n'
console.log('process.env.REACT_APP_MUMBAI_RPC', process.env.REACT_APP_MUMBAI_RPC)

const config = {
  readOnlyChainId: ChainId.Polygon,
  readOnlyUrls: {
    [ChainId.Polygon]: 'https://polygon-rpc.com',
    [ChainId.Mumbai]: process.env.REACT_APP_MUMBAI_RPC || '',
  },
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <ApiProvider>
          <App />
      </ApiProvider>
    </DAppProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
