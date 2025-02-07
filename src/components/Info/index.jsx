import Subtitle from "../ui/Subtitle";
import Text from "../ui/Text";

import { Container } from "./styles";

export default function Info({
    imagePath,
    title,
    description,
    reverse = false,
}) {
    return (
        <Container reverse={reverse}>
            <img src={imagePath} alt={title} />

            <div>
                <Subtitle align={reverse ? "left" : "right"}>{title}</Subtitle>
                <Text align={reverse ? "left" : "right"}>{description}</Text>
            </div>
        </Container>
    );
}
