import {
  BackButtonDiv,
  CharacterDiv,
  CharacterInfo,
  Comics,
  Description,
  ImageDiv,
} from './Character.styled'

import { BackButton } from '../../Components/buttons/backButton.styled'
import { LoadingStatus } from '../../Components/loadingStatus/loading.styled'
import React from 'react'
import { RelatedWork } from '../../Components/relatedWork/relatedWork.styled'
import RelatedWorkList from '../../Components/relatedWorkList/relatedWorkList'
import { SectionContainer } from '../../Components/sectionContainer/sectionContainer.styled'
import { fetchData } from '../../fetchFunctions/fetchAxios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
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
              <h1>{charData?.name}</h1>
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
                      let imgURL = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                      const undefinedImg = imgURL.match('image_not_available')

                      if (undefinedImg !== null) {
                        imgURL = '/assets/images/unknown-char.jpg'
                      }
                      return (
                        <img
                          key={comic.id}
                          src={imgURL}
                          alt={`${comic.title} image`}
                          title={comic.title}
                        />
                      )
                    })}
                  </div>
                </Comics>
              ) : (
                ''
              )}
            </CharacterInfo>
            <ImageDiv imgurl={`${charData?.thumbnail.path}.${charData?.thumbnail.extension}`}>
              <img
                src={`${charData?.thumbnail.path}.${charData?.thumbnail.extension}`}
                alt={`${charData?.name}`}
              />
            </ImageDiv>
          </CharacterDiv>
          {charData?.series.items.length > 0 ||
          charData?.series.items.length > 0 ||
          charData?.events.items.length > 0 ? (
            <RelatedWork>
              {charData?.comics.items.length > 0 ? (
                <RelatedWorkList data={charData.comics.items} title="Comics" path="comic" />
              ) : (
                ''
              )}

              {charData?.series.items.length > 0 ? (
                <RelatedWorkList data={charData.series.items} title="Series" path="serie" />
              ) : (
                ''
              )}
              {charData?.events.items.length > 0 ? (
                <RelatedWorkList data={charData.events.items} title="Events" path="event" />
              ) : (
                ''
              )}
            </RelatedWork>
          ) : (
            ''
          )}
          <BackButtonDiv>
            <BackButton onClick={() => navigate(-1)}>Back</BackButton>
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
