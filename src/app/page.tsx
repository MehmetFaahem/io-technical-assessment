import HeroSection from "./sections/homepage/hero";
import OurTeamSection from "./sections/homepage/our-team";
import TestimonialSection from "./sections/homepage/testimonial";
import Footer from "./sections/homepage/footer";

export default function Index() {
  return (
    <>
      <HeroSection />
      <OurTeamSection />
      <TestimonialSection />
      <Footer />
    </>
  );
}
