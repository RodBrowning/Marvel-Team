import {
  BackButtonDiv,
  CharacterDiv,
  CharacterInfo,
  Comics,
  Description,
  ImageDiv,
} from './Character.styled'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { LoadingStatus } from '../../Components/loadingStatus/loading.styled'
import { ProfileTitle } from '../../Components/titles/profileTitle.styled'
import React from 'react'
import { RedButton } from '../../Components/buttons/redButton.styled'
import { RelatedWorkContainer } from '../../Components/relatedWorkContainer/relatedWorkContainer.styled'
import RelatedWorkListModule from '../../Modules/relatedWorkList/relatedWorkList.module'
import { SectionContainer } from '../../Components/sectionContainer/sectionContainer.styled'
import { fetchData } from '../../utils/fetchFunctions/fetchAxios'
import { getImgURL } from '../../utils/utils'
import { useQuery } from 'react-query'

const fetchHeroData = async ({ queryKey }: any) => {
  const [, apiEndPoint, , params = {}] = queryKey
  const data = await fetchData(`${apiEndPoint}`, { ...params })
  return data.data.results[0]
}
const fetchComicsData = async ({ queryKey }: any) => {
  const [, apiEndPoint, , params = {}] = queryKey
  const data = await fetchData(`${apiEndPoint}`, { ...params })
  return data.data
}

const Character: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const oneHour = 1 * 3600000
  const {
    data: charData,
    isFetching: isCharFetching,
    isLoading: isCharLoading,
  } = useQuery({
    queryKey: ['Character', `/v1/public/characters/${id}`, id],
    queryFn: fetchHeroData,
    staleTime: oneHour,
  })

  const {
    data: comicsData,
    isFetching: isComicsFetching,
    isLoading: isComicsLoading,
  } = useQuery({
    queryKey: ['Comics', `/v1/public/characters/${id}/comics`, id, { limit: 4 }],
    queryFn: fetchComicsData,
    staleTime: oneHour,
  })

  return (
    <SectionContainer>
      {!isCharFetching && !isCharLoading && !isComicsFetching && !isComicsLoading ? (
        <div>
          <CharacterDiv>
            <CharacterInfo>
              <ProfileTitle>{charData?.name}</ProfileTitle>
              <Description>
                <h6>Description</h6>
                <p>
                  {charData?.description !== ''
                    ? charData?.description
                    : 'No description available.'}
                </p>
              </Description>
              {comicsData?.results.length > 0 ? (
                <Comics>
                  <h6>Comics</h6>
                  <div>
                    {comicsData.results.map((comic: any) => {
                      const imgURL = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                      return (
                        <Link to={`/comic/${comic.id}`} key={comic.id}>
                          <img
                            src={getImgURL(imgURL)}
                            alt={`${comic.title} image`}
                            title={comic.title}
                          />
                        </Link>
                      )
                    })}
                  </div>
                </Comics>
              ) : (
                ''
              )}
            </CharacterInfo>
            <ImageDiv
              imgurl={getImgURL(`${charData?.thumbnail.path}.${charData?.thumbnail.extension}`)}
            >
              <img src="" alt={`${charData?.name}`} />
            </ImageDiv>
          </CharacterDiv>
          {charData?.comics.items?.length > 0 ||
          charData?.series.items?.length > 0 ||
          charData?.events.items?.length > 0 ? (
            <RelatedWorkContainer>
              {id && charData?.comics.items.length > 0 ? (
                <RelatedWorkListModule id={id} title="Comics" linkPath="comic" apiPath="comics" />
              ) : (
                ''
              )}
              {id && charData?.series.items.length > 0 ? (
                <RelatedWorkListModule id={id} title="Series" linkPath="serie" apiPath="series" />
              ) : (
                ''
              )}
              {id && charData?.events.items.length > 0 ? (
                <RelatedWorkListModule id={id} title="Events" linkPath="event" apiPath="events" />
              ) : (
                ''
              )}
            </RelatedWorkContainer>
          ) : (
            ''
          )}
          <BackButtonDiv>
            <RedButton onClick={() => navigate(-1)}>Back</RedButton>
          </BackButtonDiv>
        </div>
      ) : (
        <LoadingStatus>
          <h1>Loading...</h1>
        </LoadingStatus>
      )}
    </SectionContainer>
  )
}

export default Character
