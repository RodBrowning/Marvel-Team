import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { AppContainer } from './Components/appContainer/appContainer.styled'
import Character from './Pages/Character/Character.page'
import { Header } from './Components/header/header.styled'
import Home from './Pages/Home.page'
import { Logo } from './Components/header/header_logo.styled'
import React from 'react'
import RelatedWorkData from './Pages/RelatedWorkData/RelatedWorkData.page'
import { ScrollToTop } from './utils/utils'

const App: React.FC = () => {
  return (
    <AppContainer>
      <Router>
        <Header>
          <Link to="/">
            <Logo src="/assets/images/logo.svg" alt="Logo" />
          </Link>
        </Header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:heroName" element={<Home />} />
            <Route path="/character/:id" element={<Character />} />
            <Route path="/comic/:id" element={<RelatedWorkData apiRoute="comics" />} />
            <Route path="/serie/:id" element={<RelatedWorkData apiRoute="series" />} />
            <Route path="/event/:id" element={<RelatedWorkData apiRoute="events" />} />
            <Route path="/*" element={<div>404</div>} />
          </Routes>
        </main>
        <ScrollToTop />
      </Router>
    </AppContainer>
  )
}

export default App
