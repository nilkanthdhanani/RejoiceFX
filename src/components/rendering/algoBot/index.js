import Trading from "@/components/modules/trading";
import Advantage from "./advantage";
import AlgoBotBanner from "./algoBotbanner";
import EcoSystem from "./ecoSystem";
import Hire from "./hire";
import Powerfull from "./powerfull";
import Tranding from "./tranding";

export default function AlgoBotPage() {
    return (
        <main>
            <AlgoBotBanner />
            <Tranding />
            <Advantage />
            <EcoSystem />
            <Hire />
            <Powerfull />
            <Trading />
        </main>
    )
}
