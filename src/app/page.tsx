import { Hero } from "@/components/hero";
import { TrustedPartner } from "@/components/trusted-partner";
import { Services } from "@/components/services";
import { Industries } from "@/components/industries";
import { Process } from "@/components/process";
import { Technologies } from "@/components/technologies";
import { DigitalProducts } from "@/components/digital-products";
import { FeaturedWork } from "@/components/featured-work";
import { WhyChooseUs } from "@/components/why-choose-us";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPartner />
      <Services />
      <Industries />
      <Process />
      <Technologies />
      <DigitalProducts />
      <FeaturedWork />
      <WhyChooseUs />
      <FAQ />
      <Contact />
    </>
  );
}
