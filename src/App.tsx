import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AppContainer } from './Components/appContainer/appContainer.styled'
import Character from './Pages/Character/Character.page'
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
    element: <Character />,
  },
  {
    path: '/*',
    element: <div>404</div>,
  },
])

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header>
        <a href="/">
          <Logo src="/assets/images/logo.svg" alt="Logo" />
        </a>
      </Header>
      <main>
        <RouterProvider router={router} />
      </main>
    </AppContainer>
  )
}

export default App
