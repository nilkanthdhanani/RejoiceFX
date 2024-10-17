import Brokerage from "./brokerage";
import ClockWork from "./clockWork";
import CrmBanner from "./crmbanner";
import Developing from "./developing";
import Projects1 from "./projects/projects1";

export default function CrmPage() {
    return (
        <main>
            <CrmBanner />
            <ClockWork />
            <Brokerage />
            <Developing />
            <Projects1 />
        </main>
    )
}
