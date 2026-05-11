import { HomeAbout } from "@/components/home/home-about";
import { HomeClosingCta, HomeTrustBand } from "@/components/home/home-cta-band";
import { HomeHero } from "@/components/home/home-hero";
import { HomeManufacturerStrip } from "@/components/home/home-manufacturer-strip";
import { HomeServiceAreas } from "@/components/home/home-service-areas";
import { HomeServices } from "@/components/home/home-services";
import { HomeTestimonials } from "@/components/home/home-testimonials";
import { HomeWhoWeServe } from "@/components/home/home-who-we-serve";

export default function Home() {
  return (
    <main
      id="main-content"
      className="flex-1 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0"
    >
      <HomeHero />
      <HomeTrustBand />
      <HomeAbout />
      <HomeServices />
      <HomeWhoWeServe />
      <HomeTestimonials />
      <HomeManufacturerStrip />
      <HomeServiceAreas />
      <HomeClosingCta />
    </main>
  );
}
