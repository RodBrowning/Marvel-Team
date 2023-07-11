import { Hero } from '../Components/hero/hero.styled'
import React from 'react'
import Search from '../Modules/search/search.module'
import { SectionContainer } from '../Components/sectionContainer/sectionContainer.styled'

const Home: React.FC = () => {
  return (
    <>
      <Hero bgimage="/assets/images/hero.jpg">
        <h1>
          Marvel <span>characters</span>
        </h1>
        <p>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</p>
      </Hero>
      <SectionContainer>
        <Search />
      </SectionContainer>
    </>
  )
}

export default Home
