import styled from 'styled-components'

export const BackButton = styled.a`
  font-family: var(--secondary-font-family);
  font-weight: bold;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: 12px 40px;
  text-transform: uppercase;
  cursor: pointer;
  clip-path: polygon(
    15px 0,
    100% 0,
    100% calc(100% - 15px),
    calc(100% - 15px) 100%,
    0 100%,
    0 15px
  );
  &:hover {
    filter: brightness(130%);
  }
`
