import styled from 'styled-components'

export const StyledSearchBar = styled.div`
  position: absolute;
  height: 30px;
  right: 0;
  top: 8px;
  margin-bottom: 8px;
  border: 3px solid ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  &:before {
    content: '';
    position: absolute;
    border: 3px solid ${({ theme }) => theme.colors.secondary};
    width: 100%;
    height: 100%;
    left: 3px;
    bottom: -7px;
    border-top: 0;
    border-left: 0;
    pointer-events: none;
  }
  &:hover {
    button {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }

  input {
    background: transparent;
    border: 0;
    outline: transparent;
    width: 230px;
    font-family: var(--secondary-font-family);
    color: ${({ theme }) => theme.colors.black};
    font-size: var(--regular-text);
    padding-inline: 20px;
  }
  button {
    background: transparent;
    border: 0;
    padding: 0;
    width: 40px;
    height: 100%;
    cursor: pointer;

    transition: all 0.15s ease-in;
    svg path {
      fill: ${({ theme }) => theme.colors.black};
    }
    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (prefers-color-scheme: dark) {
    border-color: white;
    input,
    ::placeholder {
      color: white;
    }
    button {
      svg path {
        fill: white;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakPoints.tabletSm}) {
    position: relative;
    input {
      width: 100%;
    }
    button {
      width: 50px;
    }
  }
`
