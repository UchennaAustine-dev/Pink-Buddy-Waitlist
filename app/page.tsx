import Header from "@/components/static/header";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import WaitlistForm from "@/components/sections/waitlist-form";
import CommunitySection from "@/components/sections/community-section";
import Footer from "@/components/sections/footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center pt-16 md:pt-20">
        <HeroSection />
        <AboutSection />
        <WaitlistForm />
        <CommunitySection />
        <Footer />
      </main>
    </>
  );
}
