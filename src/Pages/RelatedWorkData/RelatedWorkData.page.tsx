import {
  Author,
  Cards,
  CardsTitle,
  ComicDiv,
  ComicInfo,
  DateDisplay,
  SideInfo,
} from './RelatedWorkData.styled'

import CharacterCard from '../../Components/characterCard/characterCard'
import React from 'react'
import { SectionContainer } from '../../Components/sectionContainer/sectionContainer.styled'

const RelatedWorkData: React.FC = () => {
  return (
    <SectionContainer>
      <ComicDiv>
        <img src="/assets/images/comic.jpg" alt="" />
        <ComicInfo>
          <h4>Comic</h4>
          <h1>Irom Man</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium facere dolores
            unde voluptate magni tenetur laboriosam obcaecati vero facilis, quaerat esse. Laborum
            temporibus quisquam dignissimos saepe aliquid! Quasi, laboriosam eligendi.
          </p>
          <SideInfo>
            <DateDisplay>
              <p>
                <span>Release</span>
              </p>
              <p>2012-11-28</p>
            </DateDisplay>
            <DateDisplay>
              <p>
                <span>Start / End Year</span>
              </p>
              <p>2012 - 2014</p>
            </DateDisplay>
            <DateDisplay>
              <p>
                <span>Start date</span>
              </p>
              <p>1989-12-10</p>
            </DateDisplay>
            <DateDisplay>
              <p>
                <span>End date</span>
              </p>
              <p>2008-01-04</p>
            </DateDisplay>
            <Author>
              <p>
                <span>Author</span>
              </p>
              <p>Chris Bachalo</p>
              <p>Petter David</p>
            </Author>
          </SideInfo>
          <CardsTitle>Characters</CardsTitle>
          <Cards>
            <CharacterCard id={0} name="heroimg" imgURL="/assets/images/heroimg.jpg" size="small" />
            <CharacterCard id={0} name="heroimg" imgURL="/assets/images/heroimg.jpg" size="small" />
            <CharacterCard id={0} name="heroimg" imgURL="/assets/images/heroimg.jpg" size="small" />
            <CharacterCard id={0} name="heroimg" imgURL="/assets/images/heroimg.jpg" size="small" />
            <CharacterCard id={0} name="heroimg" imgURL="/assets/images/heroimg.jpg" size="small" />
            <CharacterCard id={0} name="heroimg" imgURL="/assets/images/heroimg.jpg" size="small" />
            <CharacterCard id={0} name="heroimg" imgURL="/assets/images/heroimg.jpg" size="small" />
            <CharacterCard id={0} name="heroimg" imgURL="/assets/images/heroimg.jpg" size="small" />
          </Cards>
        </ComicInfo>
      </ComicDiv>
    </SectionContainer>
  )
}

export default RelatedWorkData
