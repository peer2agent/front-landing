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
            <GradientText>A Fast Blockchain.</GradientText>
            <br />
            <h1>Scalable AI.</h1>

            <p>
                Our technology performing fast blockchain (120K TPS) and it has
                guaranteed AI-based data security. Proof of Stake, its consensus
                algorithm enables unlimited speeds.
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
