
import Banner from "@/components/banner/Banner";
import Slides from "@/components/slides/Slides";
import Howitworks from "@/components/howitworks/Howitworks";
import Faqs from "@/components/faqs/Faqs";
import Cta from "@/components/cta/Cta";
import Footer from "@/components/footer/Footer";
import BloodSugarSection from "@/components/bloodSugarSection/BloodSugarSection";
import SemPHero from "@/components/semPHero/SemPHero";
import OnceWeekly from "@/components/onceWeekly/OnceWeekly";
import VideoSection from "@/components/videoSectionSemP/VideoSection";
import NavSwitcher from "@/components/navswitcher/NavSwitcher";
import PageLoaderWrapper from "@/components/pageLoaderWrapper/PageLoaderWrapper";
import StorageCondition from "@/components/storageCondition/StorageCondition";
import BmiCalculator from "@/components/bmiCalculator/BmiCalculator";
import Citations from "@/components/citations/Citations";
import ResultsSection from "@/components/provenResults/ProvenResults";
import TirzeePenBannerSection from "@/components/tirzeePenBannerSection/TirzeePenBannerSection";

export const dynamic = "force-static";

export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "ur" }];
}

export default async function LocalePage({ params }) {
    // ✅ Don't await params — it's already available
    const { locale } = params;

    // ✅ Load JSON based on locale (static import path)
    const data =
        locale === "ur"
            ? (await import("@/app/data/ur.json")).default
            : (await import("@/app/data/en.json")).default;


    return (
        <PageLoaderWrapper>
            <div className="page_semp_wrapper">
                <NavSwitcher data={data} />
                <Banner data={data} />
                <Slides data={data} />
                <SemPHero data={data} />
                {/* <Howitworks data={data} /> */}
          <TirzeePenBannerSection />
                <ResultsSection />
                <OnceWeekly data={data} />
                <StorageCondition data={data} />
                <VideoSection />
                <BmiCalculator data={data} />
                <Cta data={data} />
                <Faqs data={data} />
                <Citations data={data} />
                <Footer data={data} />
            </div >
        </PageLoaderWrapper>
    );
}
