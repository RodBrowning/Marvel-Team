import React, { useState } from 'react'
import { SearchContainer, SearchNameDisplay } from './search.styled'

import { Cards } from './cards.styled'
import CharacterCard from '../../Components/characterCard/characterCard'
import { FetchStatus } from '../../Components/fetchStatus/fetchStatus.styled'
import SearchBar from '../../Components/searchBar/searchBar'
import { SectionTitle } from '../../Components/titles/sectionTitle.styled'
import { fetchData } from '../../fetchFunctions/fetchAxios'
import { useInfiniteQuery } from 'react-query'
import { useInfiniteScrollTrigger } from '../../utils/hooks/useInfiniteScrollTrigger'

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
  const [, nameStartsWith, apiEndPoint] = queryKey
  const searchName = nameStartsWith !== '' ? nameStartsWith : undefined

  const data = await fetchData(apiEndPoint, {
    nameStartsWith: searchName,
    offset: pageParam,
  })
  return data.data
}

const Search: React.FC = () => {
  const [nameStartsWith, setNameStartsWith] = useState<string>('')
  const oneHour = 1 * 3600000
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['allHeroes', nameStartsWith, '/v1/public/characters'],
    queryFn: fetchHeros,
    staleTime: oneHour,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.offset + lastPage.count
      return nextPage < lastPage.total ? nextPage : null
    },
  })

  const sentinelRef = useInfiniteScrollTrigger(data, fetchNextPage, isFetchingNextPage)

  return (
    <SearchContainer>
      <SectionTitle>Characters</SectionTitle>
      <SearchBar searchCallback={setNameStartsWith} />
      {nameStartsWith !== '' ? (
        <SearchNameDisplay>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.8125 2.5001C11.3209 2.5001 12.7676 3.09932 13.8342 4.16593C14.9008 5.23254 15.5 6.67918 15.5 8.1876C15.5 9.69602 14.9008 11.1427 13.8342 12.2093C12.7676 13.2759 11.3209 13.8751 9.8125 13.8751C8.30408 13.8751 6.85744 13.2759 5.79083 12.2093C4.72422 11.1427 4.125 9.69602 4.125 8.1876C4.125 6.67918 4.72422 5.23254 5.79083 4.16593C6.85744 3.09932 8.30408 2.5001 9.8125 2.5001ZM17.25 8.1876C17.2499 7.00162 16.9662 5.83286 16.4225 4.77882C15.8789 3.72479 15.091 2.81606 14.1247 2.12843C13.1584 1.44081 12.0417 0.994233 10.8677 0.825969C9.69373 0.657706 8.49652 0.77263 7.37599 1.16116C6.25545 1.54968 5.24408 2.20054 4.42624 3.05943C3.6084 3.91832 3.00782 4.96034 2.6746 6.09855C2.34138 7.23676 2.28518 8.43815 2.5107 9.60249C2.73622 10.7668 3.23691 11.8604 3.971 12.7919L0.775499 15.9873C0.616112 16.1524 0.527916 16.3734 0.529909 16.6028C0.531904 16.8322 0.623926 17.0517 0.786158 17.2139C0.948389 17.3762 1.16785 17.4682 1.39727 17.4702C1.62669 17.4722 1.84772 17.384 2.01275 17.2246L5.20825 14.0291C6.30496 14.8936 7.6229 15.4319 9.01124 15.5823C10.3996 15.7328 11.8022 15.4893 13.0587 14.8798C14.3151 14.2703 15.3746 13.3194 16.1158 12.1359C16.857 10.9524 17.2501 9.58407 17.25 8.1876ZM10.6875 5.1251C10.6875 4.89304 10.5953 4.67048 10.4312 4.50638C10.2671 4.34229 10.0446 4.2501 9.8125 4.2501C8.76821 4.2501 7.76669 4.66494 7.02827 5.40337C6.28984 6.14179 5.875 7.14331 5.875 8.1876C5.875 8.41966 5.96719 8.64222 6.13128 8.80632C6.29537 8.97041 6.51793 9.0626 6.75 9.0626C6.98206 9.0626 7.20462 8.97041 7.36872 8.80632C7.53281 8.64222 7.625 8.41966 7.625 8.1876C7.625 7.60744 7.85547 7.05104 8.2657 6.6408C8.67594 6.23057 9.23234 6.0001 9.8125 6.0001C10.0446 6.0001 10.2671 5.90791 10.4312 5.74382C10.5953 5.57972 10.6875 5.35716 10.6875 5.1251Z"
              fill="#393939"
            />
          </svg>
          <h4>{nameStartsWith}</h4>
        </SearchNameDisplay>
      ) : (
        ''
      )}
      <Cards>
        {data &&
          data?.pages.map((page) => {
            if (page.results?.length == 0) {
              return (
                <FetchStatus key="0">
                  <h4>Nothing found.</h4>
                </FetchStatus>
              )
            }
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
        <FetchStatus>
          <h4>Loading...</h4>
        </FetchStatus>
      )}
    </SearchContainer>
  )
}

export default Search
