import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Container, AccordionQuestion, AccordionAnswer } from "./styles";

export default function Accordion() {
    const questions = [
        {
            question: "What is FinTrack?",
            answer: "FinTrack is an expense tracking app that helps you monitor your spending habits with detailed categorization and analysis, empowering you to make informed financial decisions and stay within your budget.",
        },
        {
            question: "How does FinTrack work?",
            answer: "FinTrack works by allowing you to input your expenses and categorize them. You can then view detailed analysis of your spending habits and make informed financial decisions.",
        },
        {
            question: "Is FinTrack free?",
            answer: "Yes, FinTrack is free to use.",
        },
        {
            question: "How do I get started with FinTrack?",
            answer: "You can get started with FinTrack by signing up for an account and inputting your expenses.",
        },
        {
            question: "How can I contact FinTrack?",
            answer: "You can contact FinTrack by emailing us at",
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
