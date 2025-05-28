import HeroSection from "./components/HeroSection";
import WhyAktivSection from "./components/WhyAktivSection";
import FAQSection from "./components/FAQSection";
import NotifyEarlyAccessSection from "./components/NotifyEarlyAccessSection";

export default function Home() {
  return (
    <div className="px-4 md:px-10 lg:px-[80px]">
      <HeroSection />
      <WhyAktivSection />
      <FAQSection />
      <NotifyEarlyAccessSection />

      <section className="relative">
        {/* <div className="absolute left-0 top-0 -z-10 mt-[-80px]">
          <BgShape2 />
          <BgShape3 className="mt-[-280px]" />
        </div> */}
      </section>
    </div>
  );
}
