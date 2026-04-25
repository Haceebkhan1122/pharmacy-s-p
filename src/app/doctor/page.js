import BannerDoctor from "@/components/doctorCompo/bannerDoctor/BannerDoctor";
import DailyDoseDoctor from "@/components/doctorCompo/dailyDoseDoctor/DailyDoseDoctor";
import MechanismAction from "@/components/doctorCompo/mechanism/Mechanism";
import DiabetologistDoctor from '@/components/doctorCompo/diabetologistDoctor/DiabetologistDoctor';
import ResearchStudies from "@/components/doctorCompo/research/Research";
import CitationsDoctor from "@/components/doctorCompo/citationsDoctor/CitationsDoctor";
import Footer from "@/components/footer/Footer";
import FaqSemoEverything from "@/components/doctorCompo/faqSemoEverything/FaqSemoEverything";
import NavSwitcher from "@/components/navswitcher/NavSwitcher";
import TirzeePenBannerSection from "@/components/tirzeePenBannerSection/TirzeePenBannerSection";
import ResultsSection from "@/components/provenResults/ProvenResults";
import PageLoaderWrapper from "@/components/pageLoaderWrapper/PageLoaderWrapper";
import YourPathSliderSection from "@/components/yourPathSliderSection/YourPathSliderSection";
export const dynamic = "force-static";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ur" }];
}

export default async function LocalePage({ params }) {

  const { locale = "en" } = params || {};

  let data;
  if (locale === "ur") {
    data = (await import("@/app/data/ur.json")).default;
  } else {
    data = (await import("@/app/data/en.json")).default;
  }

  return (
    <PageLoaderWrapper>
    <div className="">
      <NavSwitcher data={data} />
      <section id="whatIs">
        <BannerDoctor data={data} />
      </section>
      <section id="dailyDose">
        <DailyDoseDoctor data={data} />
      </section>
      <section id="mechanism">
        <MechanismAction />
      </section>
      <section id="mechanism">
        <TirzeePenBannerSection />
      </section>
      <section id="mechanism">
        <ResultsSection />
        </section>
        <section id="ResearchStudies">
          <ResearchStudies />
        </section>
      <section id="mechanism">
        <DiabetologistDoctor />
      </section>
      
        <section id="ResearchStudies">
          <YourPathSliderSection />
        </section>
      <section id="faqSemoEverything">
        <FaqSemoEverything data={data} />
      </section>
      <section id="citations">
        <CitationsDoctor data={data} />
      </section>
      {/* <Footer /> */}
    </div>
    </PageLoaderWrapper>
  );
}
