import {
  Author,
  BackButtonDiv,
  Cards,
  CardsTitle,
  DateDisplay,
  RelatedWorkDiv,
  RelatedWorkInfo,
  SideInfo,
} from './RelatedWorkData.styled'
import { getImgURL, getReadableData } from '../../utils/utils'
import { useNavigate, useParams } from 'react-router-dom'

import { BackButton } from '../../Components/buttons/backButton.styled'
import CharacterCard from '../../Components/characterCard/characterCard'
import { LoadingStatus } from '../../Components/loadingStatus/loading.styled'
import React from 'react'
import { SectionContainer } from '../../Components/sectionContainer/sectionContainer.styled'
import { SectionTitle } from '../../Components/titles/sectionTitle.styled'
import { fetchData } from '../../utils/fetchFunctions/fetchAxios'
import { useQuery } from 'react-query'

interface Props {
  apiRoute: string
}

const fetchRelatedWorkData = async ({ queryKey }: any) => {
  const [, apiEndPoint, , params = {}] = queryKey
  const data = await fetchData(`${apiEndPoint}`, { ...params })
  return data.data.results[0]
}
const fetchHeroData = async ({ queryKey }: any) => {
  const [, apiEndPoint, , params = {}] = queryKey
  const data = await fetchData(`${apiEndPoint}`, { ...params })
  return data.data
}

const RelatedWorkData: React.FC<Props> = ({ apiRoute }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const oneHour = 1 * 3600000

  const {
    data: relatedWorkData,
    isFetching: isRelatedWorkFetching,
    isLoading: isRelatedWorkLoading,
  } = useQuery({
    queryKey: ['RelatedWork', `/v1/public/${apiRoute}/${id}`, id],
    queryFn: fetchRelatedWorkData,
    staleTime: oneHour,
  })
  const {
    data: charData,
    isFetching: isCharFetching,
    isLoading: isCharLoading,
  } = useQuery({
    queryKey: ['Character', `/v1/public/${apiRoute}/${id}/characters`, id],
    queryFn: fetchHeroData,
    staleTime: oneHour,
  })

  return (
    <SectionContainer>
      {!isRelatedWorkFetching && !isRelatedWorkLoading && !isCharFetching && !isCharLoading ? (
        <RelatedWorkDiv>
          <img
            src={getImgURL(
              `${relatedWorkData.thumbnail.path}.${relatedWorkData.thumbnail.extension}`
            )}
            alt={relatedWorkData.title}
          />
          <RelatedWorkInfo>
            {relatedWorkData.format ? <h4>{relatedWorkData.format}</h4> : ''}
            {relatedWorkData.type ? <h4>{relatedWorkData.type}</h4> : ''}
            <h1>{relatedWorkData.title}</h1>
            {relatedWorkData.description && relatedWorkData.description !== '' ? (
              <p>{relatedWorkData.description}</p>
            ) : (
              <p>No description available.</p>
            )}
            <SideInfo>
              {relatedWorkData.dates && relatedWorkData.dates[0].type === 'onsaleDate' ? (
                <DateDisplay>
                  <p>
                    <span>Release</span>
                  </p>
                  <p>{getReadableData(relatedWorkData.dates[0].date)}</p>
                </DateDisplay>
              ) : (
                ''
              )}
              {relatedWorkData.startYear && relatedWorkData.endYear ? (
                <DateDisplay>
                  <p>
                    <span>Start / End Year</span>
                  </p>
                  <p>
                    {relatedWorkData.startYear} - {relatedWorkData.endYear}
                  </p>
                </DateDisplay>
              ) : (
                ''
              )}
              {relatedWorkData.start && relatedWorkData.end ? (
                <>
                  <DateDisplay>
                    <p>
                      <span>Start date</span>
                    </p>
                    <p>{getReadableData(relatedWorkData.start)}</p>
                  </DateDisplay>
                  <DateDisplay>
                    <p>
                      <span>End date</span>
                    </p>
                    <p>{getReadableData(relatedWorkData.end)}</p>
                  </DateDisplay>
                </>
              ) : (
                ''
              )}
              {relatedWorkData.creators.items.length > 0 &&
              relatedWorkData.creators.items.some(
                (item: any) => item.role.toLowerCase() === 'writer'
              ) ? (
                <Author>
                  <p>
                    <span>Author</span>
                  </p>
                  {relatedWorkData.creators.items.map((item: any) => {
                    if (item.role.toLowerCase() !== 'writer') return
                    return <p key={item.resourceURI}>{item.name}</p>
                  })}
                </Author>
              ) : (
                ''
              )}
            </SideInfo>
            <CardsTitle>Characters</CardsTitle>
            <Cards>
              {charData?.results.map((result: any) => {
                return (
                  <CharacterCard
                    key={result.id}
                    id={result.id}
                    name={result.name}
                    imgURL={getImgURL(`${result.thumbnail.path}.${result.thumbnail.extension}`)}
                    size="small"
                  />
                )
              })}
            </Cards>
          </RelatedWorkInfo>
        </RelatedWorkDiv>
      ) : (
        <LoadingStatus>
          <h1>Loading...</h1>
        </LoadingStatus>
      )}
      <BackButtonDiv>
        <BackButton onClick={() => navigate(-1)}>Back</BackButton>
      </BackButtonDiv>
    </SectionContainer>
  )
}

export default RelatedWorkData
