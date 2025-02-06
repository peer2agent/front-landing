import { Container } from "./styles";

import Text from "../ui/Text";
import Divider from "../ui/Divider";

import solana from "../../assets/solana.png";
import jupiter from "../../assets/jupiter.png";
import helius from "../../assets/helius.png";

export default function Partners() {
    return (
        <Container>
            <Text align="center">
                Over 40k companies have collaborated with us
            </Text>

            <Divider />

            <div>
                <img src={solana} alt="Solana" />
                <img src={jupiter} alt="Jupiter" />
                <img src={helius} alt="Helius" />
            </div>
        </Container>
    );
}
