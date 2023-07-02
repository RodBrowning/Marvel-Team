import React from 'react'
import { StyledCard } from './characterCard.styled'
import { truncateString } from '../../utils/utils'

interface IProps {
  imgURL: string
  name: string
  id: number
}

const CharacterCard: React.FC<IProps> = ({ name, imgURL, id }) => {
  return (
    <StyledCard>
      <a href={`/character/${id}`}>
        <img src={imgURL} alt={`${name} image`} />
        <p>{truncateString(name, 20, '')}</p>
      </a>
    </StyledCard>
  )
}

export default CharacterCard
