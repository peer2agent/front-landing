import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Container, AccordionQuestion, AccordionAnswer } from "./styles";

export default function Accordion() {
    const questions = [
        {
            question: "How do I become a Trader on Peer2Agent?",
            answer: "Simply connect your Solana wallet and enable “Trader Mode.” Our system automatically streams your trades for Trackers to follow. Each time someone replicates your strategy, you earn fees in SOL—transforming your expertise into a consistent revenue stream.",
        },
        {
            question: "Are my funds safe on Peer2Agent?",
            answer: "Absolutely. We leverage Solana’s high‑throughput and secure blockchain technology alongside robust encryption protocols. Your wallet keys remain yours alone, and all transactions are executed on‑chain for maximum transparency and security.",
        },
        {
            question: "What fees do Trackers pay?",
            answer: "Trackers pay a small fee in SOL to replicate real‑time trades from their chosen Trader. A portion of that fee goes directly to the Trader, incentivizing top‑tier performance and accurate signals.",
        },
        {
            question: "Is $P2A token required to use the platform?",
            answer: "You can start as a Trader or Tracker without holding $P2A. However, staking $P2A unlocks advanced AI features, premium analytics, and reduced fees, giving you a competitive edge in the marketplace.",
        },
        {
            question: "Can I link multiple Solana wallets to my account?",
            answer: "Yes! Our platform supports multiple wallets, allowing you to monitor various portfolios in one place. Add each wallet address to your profile, and our AI seamlessly tracks and replicates trades across all of them.",
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);

    function toggleAccordion(index) {
        setOpenIndex((prev) => (prev === index ? null : index));
    }

    return (
        <Container>
            {questions.map((question, index) => (
                <>
                    <AccordionQuestion>
                        <h3>{question.question}</h3>
                        <MdKeyboardArrowDown
                            size={30}
                            color="#fff"
                            onClick={() => toggleAccordion(index)}
                        />
                    </AccordionQuestion>
                    {openIndex === index && (
                        <AccordionAnswer>
                            <h3>{question.answer}</h3>
                        </AccordionAnswer>
                    )}
                </>
            ))}
        </Container>
    );
}
