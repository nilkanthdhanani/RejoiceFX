import Trading from "@/components/modules/trading";
import AiDevBanner from "./aiDevBanner";
import Building from "./building";
import Empowring from "./empowring";
import Success from "./success";
import Transform from "./transform";

export default function MobileDevPage() {
    return (
        <main>
            <AiDevBanner />
            <Building />
            <Success />
            <Empowring />
            <Transform />
            <Trading />
        </main>
    )
}
