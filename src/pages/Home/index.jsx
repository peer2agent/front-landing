import { Container } from "./styles";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Partners from "../../components/Partners";
import Info from "../../components/Info";
import Faq from "../../components/FAQ";
import Footer from "../../components/Footer";

import Title from "../../components/ui/Title";
import Divider from "../../components/ui/Divider";

import chart from "../../assets/chart.png";
import portfolio from "../../assets/portfolio.png";

export default function Home() {
    return (
        <Container>
            <Header />

            <Main />

            <Partners />

            <Divider />
            <Divider />

            <Title>Our features</Title>

            <Info
                imagePath={portfolio}
                title="Automated Wallet Tracking"
                description="Seamlessly connect your Solana wallet and let our platform replicate your trades in real time. Never miss a profitable opportunity—our AI ensures that every winning move is copied instantly."
                reverse={true}
            />

            <Divider />
            <Divider />

            <Info
                imagePath={chart}
                title="Trader & Strategy Marketplace"
                description="Find expert traders with proven track records or showcase your own winning approach. Earn fees when others follow you, or easily replicate top performers to boost your own returns."
            />

            <Divider />
            <Divider />

            <Info
                imagePath={portfolio}
                title="AI‑Powered Social Agents"
                description="Harness the power of artificial intelligence to analyze social signals, market trends, and sentiment data. Make smarter, faster decisions backed by real‑time insights."
                reverse={true}
            />

            <Divider />
            <Divider />

            <Info
                imagePath={portfolio}
                title="Stake with $P2A"
                description="Fuel the ecosystem with our native $P2A token. Stake to unlock premium AI features, receive exclusive benefits, and contribute to a sustainable, high‑speed trading environment."
            />

            <Divider />
            <Divider />

            <Info
                imagePath={portfolio}
                title="Sustainable Ecosystem for All"
                description="Our platform rewards both Traders and Trackers—everyone gains from a decentralized, collaborative marketplace. With secure on‑chain transactions, transparency and trust are guaranteed."
                reverse={true}
            />

            <Divider />

            <Title>FAQ's</Title>

            <Faq />

            <Divider />
            <Divider />
            <Divider />

            <Footer />
        </Container>
    );
}
