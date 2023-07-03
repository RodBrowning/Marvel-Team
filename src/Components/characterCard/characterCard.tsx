import { Link } from 'react-router-dom'
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
      <Link to={`/character/${id}`}>
        <img src={imgURL} alt={`${name} image`} />
        <p>{truncateString(name, 20, '')}</p>
      </Link>
    </StyledCard>
  )
}

export default CharacterCard
