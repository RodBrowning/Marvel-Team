import { Header } from './Components/header/header.styled'
import { Logo } from './Components/header/header_logo.styled'
import React from 'react'

const App: React.FC = () => {
  return (
    <Header>
      <Logo src="/assest/images/logo.svg" alt="Logo" />
    </Header>
  )
}

export default App
