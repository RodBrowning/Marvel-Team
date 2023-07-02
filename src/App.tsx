import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Header } from './Components/header/header.styled'
import Home from './Pages/Home.page'
import { Logo } from './Components/header/header_logo.styled'
import React from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/character/:id',
    element: <div>Character!</div>,
  },
  {
    path: '/*',
    element: <div>404</div>,
  },
])

const App: React.FC = () => {
  return (
    <div>
      <Header>
        <a href="/">
          <Logo src="/assets/images/logo.svg" alt="Logo" />
        </a>
      </Header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  )
}

export default App
