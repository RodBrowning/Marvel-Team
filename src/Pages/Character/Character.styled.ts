import styled from 'styled-components'

export const CharacterDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: max-content;
  grid-gap: 20px;
  margin-top: 4rem;
  padding-bottom: 5rem;
`
export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 6;
  h6 {
    font-weight: 600;
  }
  h1 {
    position: relative;
    font-size: var(--big-title);
    color: ${({ theme }) => theme.colors.deepBlack};
    line-height: clamp(2.8rem, 2.3143rem + 2.4286vw, 4.5rem);
    margin-bottom: 30px;
    font-weight: 600;
    &:before,
    &:after {
      position: absolute;
      content: '';
      width: 4px;
      height: 25px;
      background-color: ${({ theme }) => theme.colors.secondary};
      transform-origin: 0% 100%;
      transform: rotate(45deg);
    }
    &:before {
      top: -18px;
      left: clamp(3.3125rem, 1.3125rem + 10vw, 5.5rem);
    }
    &:after {
      bottom: -12px;
      left: 0;
    }
  }
  h6 {
    font-size: var(--big-sub-title);
    color: ${({ theme }) => theme.colors.deepBlack};
    margin-bottom: 10px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    text-align: justify;
    line-height: 24px;
    font-family: var(--secondary-font-family);
  }

  @media (prefers-color-scheme: dark) {
    h1,
    h6,
    p {
      color: white;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    grid-column: 1/7;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    grid-column: 1/-1;
    order: 2;

    h1 {
      margin-top: 30px;
    }
  }
`
export const Description = styled.div`
  margin-bottom: 25px;
`
export const Comics = styled.div`
  margin-top: auto;
  h6 {
    font-size: var(--big-sub-title);
  }
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: clamp(0.1875rem, -8.3125rem + 17vw, 1.25rem);
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
      &:hover {
        filter: brightness(130%);
        scale: 1.01;
      }
    }
  }
`

interface ImageDivProps {
  imgurl: string
}
export const ImageDiv = styled.div<ImageDivProps>`
  background: url(${({ imgurl }) => imgurl});
  background-size: cover;
  background-position: center;
  grid-column: 6 / 13;
  height: 100%;
  min-height: 450px;
  clip-path: polygon(
    110px 0,
    100% 0,
    100% calc(100% - 110px),
    calc(100% - 110px) 100%,
    0 100%,
    0 110px
  );
  transition: all 0.25s ease-in-out;
  &:hover {
    filter: brightness(130%);
    scale: 1.01;
  }
  img {
    visibility: hidden;
    position: absolute;
    width: 0;
    height: 0;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    grid-column: 7/13;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    order: 1;
    grid-column: 1/-1;
    clip-path: polygon(
      70px 0,
      100% 0,
      100% calc(100% - 70px),
      calc(100% - 70px) 100%,
      0 100%,
      0 70px
    );
  }
`

export const BackButtonDiv = styled.div`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`
