import styled from 'styled-components'

interface HeroProps {
  bgimage: string
}

export const Hero = styled.div<HeroProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  gap: 16px;
  height: clamp(15rem, -3.586rem + 69.9708vw, 30rem);
  background: url(${({ bgimage }) => bgimage});
  background-size: cover;
  background-position: top;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: color;
  padding: var(--default-padding);

  color: white;

  h1 {
    font-weight: bold;
    font-size: var(--medium-title);
    text-transform: uppercase;
    -webkit-text-stroke: 3px;
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
