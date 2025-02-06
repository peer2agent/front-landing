import { Container } from "./styles";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Partners from "../../components/Partners";
import Info from "../../components/Info";

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

            <Title>Our features</Title>

            <Info
                imagePath={chart}
                title="Investment-Like Expense Tracking"
                description="Easily monitor your spending habits with detailed categorization and analysis, empowering you to make informed financial decisions and stay within your budget ."
            />

            <Divider />
            <Divider />

            <Info
                imagePath={portfolio}
                title="Enjoy risk free investments!"
                description="Our guiding principle is simple: We do what's best for you. We prioritize your financial well-being above all else. With our unwavering commitment to your success, trust FinTrack to be your steadfast partner on your journey towards financial empowerment ."
                reverse={true}
            />

            <Title>FAQ's</Title>
        </Container>
    );
}
