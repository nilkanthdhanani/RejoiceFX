import Trading from "@/components/modules/trading";
import LicenseAdvantage from "./licenseAdvantage";
import LicenseBanner from "./licensebanner";
import LicenseFormation from "./licenseFormation";
import LicenseInput from "./licenseInput";
import LicenseProcess from "./licenseProcess";
import LicenseProgress from "./licenseProgress";
import Marquee from "./marquee";

export default function LicensePage({ content }) {
  return (
    <main>
      <LicenseBanner
        bannerButton={content.bannerButton}
        bannerTitle={content.bannerTitle}
        bannerSubTitle={content.bannerSubTitle}
      />
      <LicenseFormation
        startImage={content.startImage}
        startButton={content.startButton}
        startTitle={content.startTitle}
        startSubTitle={content.startSubTitle}
      />
      <LicenseProgress
        progressHead={content.progressHead}
        proccesFirst={content.proccesFirst}
        proccesSecond={content.proccesSecond}
        proccesThird={content.proccesThird}
        proccesFourth={content.proccesFourth}
        proccesFifth={content.proccesFifth}
      />
      <LicenseProcess
        processHead={content.processHead}
        processPera={content.processPera}
      />
      <LicenseAdvantage />
      <Marquee />
      <LicenseInput />
      <Trading />
    </main>
  );
}
