import React from 'react'
import { StyledCard } from './characterCard.styled'

interface IProps {
  imgURL: string
  name: string
}

const CharacterCard: React.FC<IProps> = ({ name, imgURL }) => {
  return (
    <StyledCard>
      <img src={imgURL} alt={`${name} image`} />
      <p>{name}</p>
    </StyledCard>
  )
}

export default CharacterCard
