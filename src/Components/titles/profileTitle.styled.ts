import styled from 'styled-components'

export const SectionTitle = styled.h1`
  position: relative;
  font-size: var(--big-title);
  color: ${({ theme }) => theme.colors.deepBlack};
  line-height: 1.5;
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
    top: 0;
    left: 70px;
  }
  &:after {
    bottom: 4px;
    left: 0;
  }
`
