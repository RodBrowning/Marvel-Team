import styled from 'styled-components'

export const LoadMoreButton = styled.button`
  font-family: var(--secondary-font-family);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  background: transparent;
  border: 0;
  border-bottom: 1px dotted ${({ theme }) => theme.colors.black};
  margin-block: 12px;
  padding: 0;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
export const CenterButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
