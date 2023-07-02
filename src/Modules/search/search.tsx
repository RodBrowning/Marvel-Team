import React, { useEffect, useRef } from 'react'

import { Cards } from './cards.styled'
import CharacterCard from '../../Components/characterCard/characterCard'
import { Loading } from '../../Components/loading/loading.styled'
import { SearchContainer } from './search.styled'
import { SectionTitle } from '../../Components/titles/sectionTitle.styled'
import { fetchData } from '../../fetchFunctions/fetchAxios'
import { useInfiniteQuery } from 'react-query'
import { useInfiniteScrollTrigger } from '../../Components/titles/hooks/useInfiniteScrollTrigger'

interface Hero {
  id: number
  name: string
  thumbnail: {
    path: string
    extension: string
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchHeros = async ({ queryKey, pageParam = 0 }: any) => {
  const [, apiEndPoint] = queryKey
  const data = await fetchData(apiEndPoint, { nameStartsWith: undefined, offset: pageParam })
  return data.data
}

const Search: React.FC = () => {
  const oneHour = 1 * 3600000
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['allHeroes', '/v1/public/characters'],
    queryFn: fetchHeros,
    staleTime: oneHour,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.offset + lastPage.count
      return nextPage < lastPage.total ? nextPage : null
    },
  })

  const sentinelRef = useInfiniteScrollTrigger(data, fetchNextPage, isFetchingNextPage)

  return (
    <SearchContainer>
      <SectionTitle>Characters</SectionTitle>
      <Cards>
        {data &&
          data?.pages.map((page) => {
            return page.results?.map((hero: Hero) => {
              let imgURL = `${hero.thumbnail.path}.${hero.thumbnail.extension}`
              const undefinedImg = imgURL.match('image_not_available')

              if (undefinedImg !== null) {
                imgURL = '/assets/images/unknown-char.jpg'
              }
              return <CharacterCard key={hero.id} name={hero.name} imgURL={imgURL} />
            })
          })}
        {hasNextPage && <div ref={sentinelRef} style={{ height: '10px' }}></div>}
      </Cards>
      {isFetchingNextPage && (
        <Loading>
          <h4>Loading...</h4>
        </Loading>
      )}
    </SearchContainer>
  )
}

export default Search
