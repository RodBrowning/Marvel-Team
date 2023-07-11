import React from 'react'
import { SectionTitle } from '../titles/sectionTitle.styled'

interface Props {
  title: string
  data: {
    resourceURI: string
    title: string
    id: number
  }[]
  linkPath: string
}

const RelatedWorkList: React.FC<Props> = ({ title, data, linkPath }) => {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      {data.map((item) => {
        return (
          <a key={item.resourceURI} href={`/${linkPath}/${item.id}`}>
            {item.title}
          </a>
        )
      })}
    </div>
  )
}

export default RelatedWorkList
