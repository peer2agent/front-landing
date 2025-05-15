import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

import { Container, CommandsContainer, SocialContainer, SocialLink, Tooltip } from "./styles";

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
                <SocialLink href="https://github.com/peer2agent" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={25} color="#fff" />
                </SocialLink>
                <Tooltip>
                    <FaXTwitter size={25} color="#fff" />
                    <span>Coming soon</span>
                </Tooltip>
                <Tooltip>
                    <FaDiscord size={25} color="#fff" />
                    <span>Coming soon</span>
                </Tooltip>
            </SocialContainer>
        </Container>
    );
}
