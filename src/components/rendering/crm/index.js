import Brokerage from "./brokerage";
import ClockWork from "./clockWork";
import CrmBanner from "./crmbanner";
import Developing from "./developing";

export default function CrmPage() {
    return (
        <main>
            <CrmBanner />
            <ClockWork />
            <Brokerage />
            <Developing />
        </main>
    )
}
