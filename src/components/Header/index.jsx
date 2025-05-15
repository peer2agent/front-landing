import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

import { Container, SocialContainer, SocialLink, Tooltip } from "./styles";

import logo from "../../assets/peer2agent_logo.png";

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="Peer2Agent logo" />

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
