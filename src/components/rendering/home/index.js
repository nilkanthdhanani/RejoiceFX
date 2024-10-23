
import HeroBanner from "@/components/rendering/home/heroBanner";
import Services from "./services";
import Calculator from "./calculator";
import Building from "./building";
import Trading from "@/components/modules/trading";

export default function HomePage() {
    return (
        <main>
            <HeroBanner />
            <Building />
            <Services />
            <Calculator />
            <Trading/>
        </main>
    );
}
