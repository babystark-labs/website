import ArrowsIcon from 'assets/arrows.svg'
import background from 'assets/background.png'
import logo from 'assets/logo.png'
import WalletIcon from 'assets/wallet.svg'
import YieldIcon from 'assets/yield.svg'
import { PrimaryButton } from 'components/Button'
import { Column, Row } from 'components/Flex'
import { transparentize } from 'polished'
import styled from 'styled-components'
import { ThemedText } from 'theme/components'

const Background = styled.span`
  z-index: -99;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  max-height: 1000px;
  background-image: url('${background}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      to bottom,
      ${({ theme }) => transparentize(0.3, theme.bg1)},
      ${({ theme }) => theme.bg1}
    );
  }
`

const Section = styled.section`
  width: 100%;
  padding: 16px 12px 96px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: -24px auto 0;

  @media only screen and (min-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    padding-top: 0;
  }
`

// First article

const FirstArticle = styled(Column)`
  gap: 50px;
  width: 100%;
`

const SocialButton = styled(PrimaryButton)`
  width: 156px;
`

const Logo = styled.img`
  width: 150px;
  height: 150px;
`

// Second article

const SecondArticle = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 150px;
  width: 100%;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`

const Card = styled(Column)`
  background: ${({ theme }) => theme.bg2};
  padding: 32px 24px 24px;
  gap: 16px;
  border-radius: 24px;
  text-align: center;
  max-width: 720px;

  @media only screen and (min-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    max-width: 380px;
  }
`

const CardIcon = styled(Row)<{ icon: string }>`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: linear-gradient(-45deg, #6c5abd, #57585e, #a6a7a9);
  position: relative;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    bottom: 2px;
    right: 2px;
    left: 2px;
    border-radius: 40px;
    background: linear-gradient(-45deg, #2f3038, #67676c);
  }

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    bottom: 20px;
    right: 20px;
    left: 20px;
    background: ${({ theme }) => theme.gradient2};
    -webkit-mask-image: url('${({ icon }) => icon}');
    mask-image: url('${({ icon }) => icon}');
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }

  & > svg {
    width: 40px;
    height: 40px;
  }
`

// Third article

const ThirdArticle = styled(Column)`
  margin-top: 180px;
  gap: 4px;
`

export default function HomePage() {
  return (
    <>
      <Background />

      <Section>
        <FirstArticle>
          <ThemedText.Hero textAlign="center">BabyStark</ThemedText.Hero>

          <Column gap={28}>
            <ThemedText.Hero textAlign="center">
              THE MEME COIN
              <br />
              YOU WILL LOVE TO HODL_
            </ThemedText.Hero>

            <ThemedText.HeadlineSmall textAlign="center" fontWeight={300}>
              #1 auto stacking memecoin : Every Holder, Every Transaction, always Earning
            </ThemedText.HeadlineSmall>

            <Row gap={28}>
              <SocialButton>Twitter</SocialButton>
              <Logo src={logo} />
              <SocialButton>Telegram</SocialButton>
            </Row>
          </Column>

          <ThemedText.HeadlineSmall textAlign="center" fontWeight={300} lineHeight={1.8}>
            system anti bot
            <br />
            No website or interface is required to get reward
            <br />
            UX UI
          </ThemedText.HeadlineSmall>
        </FirstArticle>

        <SecondArticle>
          <Card>
            <CardIcon icon={ArrowsIcon} />

            <ThemedText.HeadlineLarge>True Decentralization</ThemedText.HeadlineLarge>

            <ThemedText.BodySecondary lineHeight={1.5}>
              The RFI smart contract was fully developed and operational from the start. It did not undergo an Initial
              Coin Offering (ICO), pre-sale, or any form of fundraising. All features have been incorporated, with no
              additional features pending. The value of RFI does not depend on any individual or team
            </ThemedText.BodySecondary>
          </Card>

          <Card>
            <CardIcon icon={YieldIcon} />

            <ThemedText.HeadlineLarge>Yield Capability</ThemedText.HeadlineLarge>

            <ThemedText.BodySecondary lineHeight={1.5}>
              the RFI smart contract introduces several new methods that enable staking contracts to accurately
              calculate the fees accrued by each holder over any given period, even when their funds are combined. This
              significant advancement makes it possible to directly stake RFI.
            </ThemedText.BodySecondary>
          </Card>

          <Card>
            <CardIcon icon={WalletIcon} />

            <ThemedText.HeadlineLarge>Improve ROI</ThemedText.HeadlineLarge>

            <ThemedText.BodySecondary lineHeight={1.5}>
              As a result, holders of the token receive 100% of the generated fees. The proportion of fees you earn is
              determined by your share of RFI ownership among all holders. This system results in significantly higher
              yields than would otherwise be achievable.
            </ThemedText.BodySecondary>
          </Card>
        </SecondArticle>

        <ThirdArticle>
          <ThemedText.HeadlineLarge fontWeight={900}>DISCLAIMER</ThemedText.HeadlineLarge>
          <ThemedText.HeadlineMedium textAlign="center" fontWeight={300}>
            $BabyStark is a meme coin with no intrinsic value or expectation of financial return. There is no formal
            team or roadmap. The coin is completely useless and for entertainment purposes only.
          </ThemedText.HeadlineMedium>
        </ThirdArticle>
      </Section>
    </>
  )
}
