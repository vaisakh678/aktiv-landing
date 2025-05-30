import HeroSection from "./components/HeroSection";
import WhyAktivSection from "./components/WhyAktivSection";
import FAQSection from "./components/FAQSection";
import NotifyEarlyAccessSection from "./components/NotifyEarlyAccessSection";
import BgShape1 from "@/assets/images/shape-1.svg";
import BgShape2 from "@/assets/images/shape-2.svg";
import BgShape3 from "@/assets/images/shape-3.svg";
import BgShape4 from "@/assets/images/shape-4.svg";

export default function Home() {
  return (
    <div className="relative px-4 md:px-10 lg:px-[80px]">
      <HeroSection />
      <div className="">
        <BgShape1 className="absolute right-0 -z-10" />
        <WhyAktivSection />
      </div>
      <FAQSection />
      <NotifyEarlyAccessSection />

      <div className="absolute bottom-0 left-0 -z-10 mt-[-80px]">
        <BgShape2 />
        <BgShape3 className="mt-[-280px]" />
      </div>

      <div className="absolute -bottom-28 right-0 -z-10">
        <BgShape4 />
      </div>
    </div>
  );
}
