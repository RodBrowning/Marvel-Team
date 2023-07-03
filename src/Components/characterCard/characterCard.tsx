import { Link } from 'react-router-dom'
import React from 'react'
import { StyledCard } from './characterCard.styled'
import { truncateString } from '../../utils/utils'

interface IProps {
  imgURL: string
  name: string
  id: number
  size?: 'regular' | 'small'
}

const CharacterCard: React.FC<IProps> = ({ name, imgURL, id, size }) => {
  return (
    <StyledCard size={size}>
      <Link to={`/character/${id}`}>
        <img src={imgURL} alt={`${name} image`} />
        <p>{truncateString(name, 16, '')}</p>
      </Link>
    </StyledCard>
  )
}

export default CharacterCard
