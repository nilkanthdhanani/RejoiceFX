"use client"

import MauritiusBanner from "@/components/allpagecomponents/mauritiusCompo/herobanner";
import MauritiusFormation from "@/components/allpagecomponents/mauritiusCompo/mauritiusFormation";
import MauritiusProgress from "@/components/allpagecomponents/mauritiusCompo/mauritiusProgress";
import MauritiusProcess from "@/components/allpagecomponents/mauritiusCompo/mauritiusProcess";
import MauritiusAdvantage from "@/components/allpagecomponents/mauritiusCompo/mauritiusAdvantage";
import Marquee from "@/components/allpagecomponents/mauritiusCompo/marquee";
import MauritiusInput from "@/components/allpagecomponents/mauritiusCompo/mauritiusInput";

import mauritiusFormation from "@/assets/crmpageImage/mauritiusFormation.png";

export default function ForexLicenceVincent() {
    return (
        <>
            <MauritiusBanner
                bannerButton="Mauritius Forex License"
                bannerTitle="Company Formation & Mauritius Forex License"
                bannerSubTitle="Start your forex business in Mauritius with simple regulatory regime"
            />
            <MauritiusFormation
                startImage={mauritiusFormation}
                startButton="Mauritius Company Formation"
                startTitle="Start your forex broking business in Mauritius"
                startSubTitle="Mauritius offers amazing business experience with affordable capital requirements, fine banking services, payment service provider support, and easy application process for Mauritius forex license. The minimum paid-up capital requirement is MUR 700,000. Mauritius is the best destination for you, get a Mauritius Forex License! With PheasanTech, you get total support for Mauritius FSC and Mauritius forex company formation process. Contact us if you want to know more about company formation."
            />
            <MauritiusProgress
                progressHead="Forex in Mauritius Easy process to obtain Forex Broker License"
                proccesFirst="Register a Global Business Company in Mauritius"
                proccesSecond="Apply for Mauritius Forex Broker License"
                proccesThird="Meet the GBC – I requirements set by FSC"
                proccesFourth="Start Forex Broking Business in the world"
                proccesFifth="3 - 4 Weeks"
            />
            <MauritiusProcess
                processHead="MUR 700,000"
                processPera="The company must be registered in Mauritius and have a registered office in Mauritius. Starting forex business in Mauritius is low cost, as there are strict confidentiality laws and flexible incorporation regulations."
            />
            <MauritiusAdvantage />
            <Marquee />
            <MauritiusInput />
        </>
    );
}

