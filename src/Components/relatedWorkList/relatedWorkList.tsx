import React from 'react'
import { SectionTitle } from '../titles/sectionTitle.styled'

interface Props {
  title: string
  data: {
    resourceURI: string
    name: string
  }[]
}

const RelatedWorkList: React.FC<Props> = ({ title, data }) => {
  return (
    <div>
      <SectionTitle size="medium">{title}</SectionTitle>
      {data.map((item) => {
        return (
          <a key={item.resourceURI} href={`#${item.name}`}>
            {item.name}
          </a>
        )
      })}
    </div>
  )
}

export default RelatedWorkList
