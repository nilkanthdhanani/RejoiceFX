import Trading from "@/components/modules/trading";
import Brokerage from "./brokerage";
import ClockWork from "./clockWork";
import CrmBanner from "./crmbanner";
import Developing from "./developing";
import FAQ from "./faq";
import Plugged from "./plugged";
import Projects1 from "./projects/projects1";
import Projects2 from "./projects/projects2";
import Savings from "./savings";
import WhyChoose from "./whyChoose";

export default function CrmPage() {
    return (
        <main>
            <CrmBanner />
            <ClockWork />
            <Brokerage />
            <Developing />
            <Projects1 />
            <Projects2 />
            <WhyChoose />
            <Savings />
            <Plugged />
            <FAQ />
            <Trading />
        </main>
    )
}
