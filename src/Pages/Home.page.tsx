import { Hero } from '../Components/hero/hero.styled'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <Hero bgImage="/assets/images/hero.jpg">
        <h1>
          Marvel <span>characters</span>
        </h1>
        <p>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</p>
      </Hero>
      <section></section>
    </>
  )
}

export default Home
