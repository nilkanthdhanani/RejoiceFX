import Trading from "@/components/modules/trading";
import AiDevBanner from "./aiDevBanner";
import Boost from "./boost";
import Building from "./building";
import Process from "./process";
import RealTime from "./realTime";
import Transform from "./transform";

export default function AiDevPage() {
    return (
        <main>
            <AiDevBanner />
            <Transform />
            <RealTime />
            <Boost />
            <Process />
            <Building />
            <Trading/>
        </main>
    )
}
