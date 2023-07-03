import styled from 'styled-components'

interface SectionTitleProps {
  size?: 'small' | 'medium'
}

export const SectionTitle = styled.h3<SectionTitleProps>`
  position: relative;
  font-size: ${(props) =>
    props.size === 'medium' ? 'var(--small-title)' : 'var(--medium-sub-title)'};
  line-height: ${(props) =>
    props.size === 'medium' ? 'clamp(2.5rem, 1.6667rem + 4.1667vw, 3.125rem)' : '32px'};
  font-weight: 600;
  margin-bottom: 30px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.deepBlack};
  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 2px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform-origin: 0% 100%;
    transform: rotate(45deg);
  }

  &:before {
    top: -10px;
    left: ${(props) =>
      props.size === 'medium'
        ? 'clamp(2.5rem, 1.6667rem + 4.1667vw, 3.125rem);'
        : 'clamp(2.4rem, 2.2667rem + 0.6667vw, 2.5rem)'};
  }
  &:after {
    bottom: -5px;
    left: 0;
  }

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`

SectionTitle.defaultProps = {
  size: 'small',
}
