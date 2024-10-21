
import HeroBanner from "@/components/rendering/home/heroBanner";
import Services from "./services";
import Calculator from "./calculator";
import Building from "./building";

export default function HomePage() {
    return (
        <main>
            <HeroBanner />
            <Building />
            <Services />
            <Calculator />
        </main>
    );
}
