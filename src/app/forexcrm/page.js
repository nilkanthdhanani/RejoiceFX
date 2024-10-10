"use client"

import Brokerage from "@/components/allpagecomponents/forexcrm/brokerage";
import ClockWork from "@/components/allpagecomponents/forexcrm/clockWork";
import Developing from "@/components/allpagecomponents/forexcrm/developing";
import CrmBanner from "@/components/allpagecomponents/forexcrm/herobanner";

export default function Forexcrm() {

  return (
    <>
      <CrmBanner />
      <ClockWork />
      <Brokerage />
      <Developing />
    </>
  );
}
