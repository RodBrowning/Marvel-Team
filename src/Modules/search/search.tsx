import { Cards } from './cards.styled'
import CharacterCard from '../../Components/characterCard/characterCard'
import React from 'react'
import { SearchContainer } from './search.styled'
import { SectionTitle } from '../../Components/titles/sectionTitle.styled'

const Search: React.FC = () => {
  return (
    <SearchContainer>
      <SectionTitle>Characters</SectionTitle>
      <Cards>
        <CharacterCard name="Iron Man" imgURL="/assets/images/heroimg.jpg" />
        <CharacterCard name="Iron Man" imgURL="/assets/images/heroimg.jpg" />
        <CharacterCard name="Iron Man" imgURL="/assets/images/heroimg.jpg" />
        <CharacterCard name="Iron Man" imgURL="/assets/images/heroimg.jpg" />
        <CharacterCard name="Iron Man" imgURL="/assets/images/heroimg.jpg" />
        <CharacterCard name="Iron Man" imgURL="/assets/images/heroimg.jpg" />
        <CharacterCard name="Iron Man" imgURL="/assets/images/heroimg.jpg" />
        <CharacterCard name="Iron Man" imgURL="/assets/images/heroimg.jpg" />
        <CharacterCard name="Iron Man" imgURL="/assets/images/heroimg.jpg" />
        <CharacterCard name="Iron Man" imgURL="/assets/images/heroimg.jpg" />
        <CharacterCard name="Iron Man" imgURL="/assets/images/heroimg.jpg" />
      </Cards>
    </SearchContainer>
  )
}

export default Search
