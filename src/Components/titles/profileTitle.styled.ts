import styled from 'styled-components'

export const ProfileTitle = styled.h1`
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
`
