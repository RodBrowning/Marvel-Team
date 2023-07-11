import { CenterButton, LoadMoreButton } from '../../Components/buttons/loadMoreButton.styled'

import { LoadingStatus } from '../../Components/loadingStatus/loading.styled'
import React from 'react'
import RelatedWorkList from '../../Components/relatedWorkList/relatedWorkList'
import { fetchData } from '../../utils/fetchFunctions/fetchAxios'
import { useInfiniteQuery } from 'react-query'

interface Props {
  id: string
  title: string
  linkPath: string
  apiPath: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchRelatedWorkList = async ({ queryKey, pageParam = 0 }: any) => {
  const [, id, apiPath, apiEndPoint] = queryKey

  const data = await fetchData(`${apiEndPoint}/${id}/${apiPath}`, {
    offset: pageParam,
  })
  return data.data
}

const RelatedWorkListModule: React.FC<Props> = ({ id, title, linkPath, apiPath }) => {
  const oneHour = 1 * 3600000
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['relatedWork', id, apiPath, `/v1/public/characters`],
    queryFn: fetchRelatedWorkList,
    staleTime: oneHour,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.offset + lastPage.count
      return nextPage < lastPage.total ? nextPage : null
    },
  })

  const items:
    | {
        resourceURI: string
        title: string
        id: number
      }[]
    | undefined = data?.pages
    .map((page) => {
      return page.results
    })
    .flat()

  return (
    <div>
      {items && items.length > 0 && (
        <RelatedWorkList data={items} title={title} linkPath={linkPath} />
      )}
      {hasNextPage && !isFetchingNextPage && (
        <CenterButton>
          <LoadMoreButton onClick={() => fetchNextPage()}>Load more</LoadMoreButton>
        </CenterButton>
      )}
      {isFetchingNextPage ? (
        <LoadingStatus size="medium" style={{ height: '75px' }}>
          <h5>Loading...</h5>
        </LoadingStatus>
      ) : (
        ''
      )}
    </div>
  )
}

export default RelatedWorkListModule
