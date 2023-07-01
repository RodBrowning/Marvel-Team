import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Header } from './Components/header/header.styled'
import { Logo } from './Components/header/header_logo.styled'
import React from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
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
        <Logo src="/assets/images/logo.svg" alt="Logo" />
      </Header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  )
}

export default App
