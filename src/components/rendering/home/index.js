
import HeroBanner from "@/components/rendering/home/heroBanner";
import Services from "./services";
import Calculator from "./calculator";

export default function HomePage() {
    return (
        <main>
            <HeroBanner />
            <Services />
            <Calculator />
        </main>
    );
}
