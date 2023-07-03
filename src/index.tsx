import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import GlobalStyles from './GlobalStyles/globals'
import React from 'react'
import ReactDOM from 'react-dom/client'
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
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
reportWebVitals()
