import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: clamp(2rem, -2.8571rem + 18.2857vw, 4rem);
  padding-bottom: 2.5rem;
  > h3 {
    margin-bottom: clamp(0rem, -2.2768rem + 8.5714vw, 0.9375rem);
  }
`
export const SearchNameDisplay = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
  h4 {
    font-size: var(--big-sub-title);
    text-transform: capitalize;
    font-weight: 100;
  }

  @media (prefers-color-scheme: dark) {
    svg path {
      fill: white;
    }
    h4 {
      color: white;
    }
  }
`
