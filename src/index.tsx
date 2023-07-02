import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import GlobalStyles from './GlobalStyles/globals'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ResetStyles from './GlobalStyles/reset'
import Theme from './GlobalStyles/theme'
import { ThemeProvider } from 'styled-components'
import reportWebVitals from './reportWebVitals'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <App />
        <ResetStyles />
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
