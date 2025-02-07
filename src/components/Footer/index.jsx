import { Container, Menu, ImageAndAbout } from "./styles";

import Text from "../ui/Text";

import logo from "../../assets/peer2agent_logo.png";

export default function Footer() {
    return (
        <Container>
            <ImageAndAbout>
                <img src={logo} alt="Peer2Agent" />

                <Text textSizing="extraSmall">
                    We strive to be the go‑to platform for comprehensive and
                    accessible financial management, helping our users achieve
                    their goals and secure their futures. Through innovation and
                    dedication, we aim to revolutionize the way people interact
                    with their finances, making financial success attainable for
                    all.
                </Text>
            </ImageAndAbout>

            <Menu>
                <div>
                    <h4>Quick menu</h4>

                    <h5>About</h5>
                    <h5>Pricing</h5>
                    <h5>Blog</h5>
                    <h5>Help</h5>
                </div>

                <div>
                    <h4> Resources</h4>

                    <h5>Community</h5>
                    <h5>Newsletter</h5>
                    <h5>Blog</h5>
                    <h5>API</h5>
                </div>
            </Menu>
        </Container>
    );
}
