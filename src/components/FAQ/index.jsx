import { Container } from "./styles";

import Accordion from "../ui/Accordion";

import diagram from "../../assets/diagram.png";

export default function Faq() {
    return (
        <Container>
            <Accordion />

            <img src={diagram} alt="diagram" />
        </Container>
    );
}
