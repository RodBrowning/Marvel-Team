import styled from 'styled-components'

interface HeroProps {
  bgImage: string
}

export const Hero = styled.div<HeroProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  gap: 24px;
  height: clamp(20.3125rem, 16.7898rem + 17.6136vw, 30rem);
  background: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  padding: var(--default-padding);

  color: white;

  h1 {
    font-weight: bold;
    font-size: var(--big-title);
    text-transform: uppercase;
    -webkit-text-stroke: clamp(0.1875rem, 0.1518rem + 0.1786vw, 0.3125rem);
    line-height: 1.2;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  p {
    font-size: var(--medium-sub-title);
    line-height: 1.3;
    text-wrap: balance;
  }
`
