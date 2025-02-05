import { FaGithub, FaReddit } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

import { Container, CommandsContainer, SocialContainer } from "./styles";

import logo from "../../assets/peer2agent_logo.png";

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="Peer2Agent logo" />

            <CommandsContainer>
                <div>$P2A Token</div>
                <div>About us</div>
                <div>Roadmap</div>
                <div>Whitepaper</div>
            </CommandsContainer>

            <SocialContainer>
                <FaGithub size={25} color="#fff" />
                <FaXTwitter size={25} color="#fff" />
                <FaReddit size={25} color="#fff" />
                <FaDiscord size={25} color="#fff" />
            </SocialContainer>
        </Container>
    );
}
