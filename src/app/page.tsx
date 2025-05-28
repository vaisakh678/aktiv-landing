import BgShape2 from "@/assets/images/shape-2.svg";
import BgShape3 from "@/assets/images/shape-3.svg";
import HeroSection from "./components/HeroSection";
import WhyAktivSection from "./components/WhyAktivSection";
import FAQSection from "./components/FAQSection";
import NotifyEarlyAccessSection from "./components/NotifyEarlyAccessSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />

      <WhyAktivSection />

      <section className="relative">
        <div className="absolute left-0 top-0 -z-10 mt-[-80px]">
          <BgShape2 />
          <BgShape3 className="mt-[-280px]" />
        </div>

        <FAQSection />
        <NotifyEarlyAccessSection />
      </section>
    </div>
  );
}
