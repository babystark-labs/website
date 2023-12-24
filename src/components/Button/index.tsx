import { styled } from 'styled-components'

const Base = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.neutral1};
  cursor: pointer;
  padding: 12px 26px;
  width: auto;
  border-radius: 10px;
  outline: none;
  min-width: 96px;
`

const StyledPrimaryButton = styled(Base)`
  background: ${({ theme }) => theme.gradient1};
  border: none;
  position: relative;
  border: 0 solid ${({ theme }) => theme.accent1};

  &::before,
  & > span {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    border-radius: 11px;
  }

  &::before {
    background: ${({ theme }) => theme.gradient1};
    z-index: -1;
    filter: brightness(1.3);
  }

  & > span {
    background: ${({ theme }) => theme.accent1};
    opacity: 0;
    transition: 125ms;
  }

  &:hover > span {
    opacity: 1;
  }

  & > div {
    position: relative;
    z-index: 1;
  }
`

export const PrimaryButton = ({ children, ...props }: React.HTMLAttributes<HTMLButtonElement>) => (
  <StyledPrimaryButton {...props}>
    <div>{children}</div>
    <span />
  </StyledPrimaryButton>
)

export const SecondaryButton = styled(Base)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.neutral1};
  transition: 125ms;

  &:hover {
    background: ${({ theme }) => theme.neutral1};
    color: ${({ theme }) => theme.bg1};
  }
`
