import React from 'react'
import { StyledCard } from './characterCard.styled'
import { truncateString } from '../../utils/utils'

interface IProps {
  imgURL: string
  name: string
}

const CharacterCard: React.FC<IProps> = ({ name, imgURL }) => {
  return (
    <StyledCard>
      <img src={imgURL} alt={`${name} image`} />
      <p>{truncateString(name, 20, '')}</p>
    </StyledCard>
  )
}

export default CharacterCard
