import styled from 'styled-components'

interface SectionTitleProps {
  size?: 'big' | 'medium'
}

export const SectionTitle = styled.h3<SectionTitleProps>`
  position: relative;
  font-size: ${(props) =>
    props.size === 'medium' ? 'var(--medium-sub-title)' : 'var(--big-sub-title)'};
  line-height: ${(props) => (props.size === 'medium' ? '2.5' : '2')};
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
    top: -2px;
    left: 41px;
  }
  &:after {
    bottom: 4px;
    left: 0;
  }

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`

SectionTitle.defaultProps = {
  size: 'big',
}
