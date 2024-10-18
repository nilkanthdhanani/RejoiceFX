import Advantage from "./advantage";
import AlgoBotBanner from "./algoBotbanner";
import EcoSystem from "./ecoSystem";
import Hire from "./hire";
import Powerfull from "./powerfull";
import Trading from "./trading";

export default function AlgoBotPage() {
    return (
        <main>
            <AlgoBotBanner />
            <Trading />
            <Advantage />
            <EcoSystem />
            <Hire />
            <Powerfull />
        </main>
    )
}
