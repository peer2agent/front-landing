import {
    Container,
    GradientText,
    ButtonsContainer,
    Button,
    BlurContainer,
    BlueBlur,
    GreenBlur,
} from "./styles";

export default function Main() {
    return (
        <Container>
            <h1>Multiply Your Earnings in an</h1>
            <br />
            <GradientText>AI Agents Powered DeFi Ecosystem</GradientText>

            <p>
                Experience next‑level decentralized investing with powerful AI
                Agents on the Solana blockchain. Harness real‑time signals to
                replicate winning strategies, stake tokens for advanced
                insights, and take your DeFi trading to unprecedented heights.
            </p>

            <ButtonsContainer>
                <Button>Whitepaper</Button>
                <Button>Get Started</Button>
            </ButtonsContainer>

            <BlurContainer>
                <BlueBlur />
                <GreenBlur />
            </BlurContainer>
        </Container>
    );
}
