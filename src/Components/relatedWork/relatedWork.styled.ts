import styled from 'styled-components'

export const RelatedWork = styled.div`
  position: relative;
  background: white;
  display: flex;
  justify-content: space-around;
  gap: 24px;
  padding-block: 50px;
  padding-inline: clamp(2.8125rem, -0.4018rem + 16.0714vw, 5.625rem);
  flex-wrap: wrap;
  overflow: hidden;
  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100px;
    left: 0;
    border: 3px solid ${({ theme }) => theme.colors.secondary};
    box-sizing: border-box;
    pointer-events: none;
  }

  &:before {
    top: 20px;
    left: -20px;
    border-bottom: 0;
    border-left: 0;
  }
  &:after {
    bottom: 20px;
    left: 20px;
    border-top: 0;
    border-right: 0;
  }
  div {
    h3 {
      margin-bottom: 15px;
      color: ${({ theme }) => theme.colors.deepBlack};
    }
    a {
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black};
      line-height: 22px;
      font-weight: 100;
      font-family: var(--secondary-font-family);
      cursor: pointer;
      &:hover,
      &:visited {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: underline;
      }
    }
  }
`
