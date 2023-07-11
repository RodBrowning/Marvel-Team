import styled from 'styled-components'

interface loadingProps {
  size?: 'big' | 'medium' | 'small'
}

const sizes = {
  big: 'var(--small-title)',
  medium: 'var(--big-sub-title)',
  small: 'var(--medium-sub-title)',
}

const LoadingStatus = styled.div<loadingProps>`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => (size ? sizes[size] : sizes.big)};
  opacity: 0.2;
  animation: pulse 1s linear infinite alternate;
  @keyframes pulse {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
  @media (prefers-color-scheme: dark) {
    h1 {
      color: white;
    }
  }
`

LoadingStatus.defaultProps = {
  size: 'big',
}

export { LoadingStatus }
