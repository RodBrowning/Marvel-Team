import React from 'react'
import { SectionTitle } from '../titles/sectionTitle.styled'

interface Props {
  title: string
  data: {
    resourceURI: string
    name: string
  }[]
  path: string
}

const RelatedWorkList: React.FC<Props> = ({ title, data, path }) => {
  return (
    <div>
      <SectionTitle size="small">{title}</SectionTitle>
      {data.map((item) => {
        const itemIndex = item.resourceURI.lastIndexOf('/') + 1
        const itemID = item.resourceURI.substring(itemIndex)
        return (
          <a key={item.resourceURI} href={`/${path}/${itemID}`}>
            {item.name}
          </a>
        )
      })}
    </div>
  )
}

export default RelatedWorkList
