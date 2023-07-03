import styled from 'styled-components'

export const LoadingStatus = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: var(--small-title);
    opacity: 0.2;
    animation: pulse 1s linear infinite alternate;
  }
  @keyframes pulse {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`
