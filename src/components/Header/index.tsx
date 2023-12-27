import { PrimaryButton, SecondaryButton } from 'components/Button'
import { Row } from 'components/Flex'
import { styled } from 'styled-components'

const StyledHeader = styled(Row)`
  top: 0;
  z-index: 1000;
  padding: 20px 24px;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  justify-content: flex-end;
`

export default function Header() {
  return (
    <StyledHeader>
      <Row gap={12}>
        <SecondaryButton>Chart</SecondaryButton>
        <PrimaryButton>Buy</PrimaryButton>
      </Row>
    </StyledHeader>
  )
}
