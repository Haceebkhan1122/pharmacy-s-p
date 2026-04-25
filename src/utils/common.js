import React from "react";
import dynamic from "next/dynamic";
import Cta from "@/components/mechanismActionComponents/cta/Cta";
import WhatIsSemo from "@/components/patientToolkit/whatIsSemo/WhatIsSemo";
import DoseCalculation from "@/components/doseCalculation/DoseCalculation";
import ProvenResultsStat from "@/components/provenDoseResultsStat/ProvenDoseResults";
import StorageCondition from "@/components/storageCondition/StorageCondition";
import RotationGuide from "@/components/rotationGuide/RotationGuide";
import DiseaseSlider from "@/components/patientToolkit/healthCondition/HealthCondition";
import AutoInjector from "@/components/patientToolkit/autoInjector/AutoInjector";
import DietGuidance from "@/components/patientToolkit/dietGuidance/DietGuidance";
import DietGuidanceDay from "@/components/patientToolkit/dietGuidance/DietGuidanceDay";
import CtaPatientTool from "@/components/patientToolkit/ctaPatientTool/CtaPatientTool";
const ProvenResults = dynamic(() => import('../components/provenDoseResults/ProvenDoseResults').then((module) => module.default));
const ResultsSection = dynamic(() => import('../components/provenResults/ProvenResults').then((module) => module.default));
const MechanismAction = dynamic(() => import('../components/doctorCompo/mechanism/Mechanism').then((module) => module.default));
const BannerDoctor = dynamic(() => import('../components/doctorCompo/bannerDoctor/BannerDoctor').then((module) => module.default));
const ResearchStudiesJournal = dynamic(() => import('../components/researchComponents/researchStudiesJournal/ResearchStudiesJournal').then((module) => module.default));
const SemPHero = dynamic(() => import('../components/homepage/semPHero/SemPHero').then((module) => module.default));
const TirzeePenBannerSection = dynamic(() => import('../components/homepage/tirzeePenBannerSection/TirzeePenBannerSection').then((module) => module.default));
const Citations = dynamic(() => import('../components/homepage/citations/Citations').then((module) => module.default));
const Faqs = dynamic(() => import('../components/homepage/faqs/Faqs').then((module) => module.default));
const Diabetologist = dynamic(() => import('../components/diabetologist/Diabetologist').then((module) => module.default));
const BannerVideo = dynamic(() => import('../components/videoLibraryComponents/banner/Banner').then((module) => module.default));
const VideoSection = dynamic(() => import('../components/videoSectionSemP/VideoSection').then((module) => module.default));
const BannerResearch = dynamic(() => import('../components/researchComponents/bannerResearch/BannerResearch').then((module) => module.default));
const ResearchStudies = dynamic(() => import('../components/doctorCompo/research/Research').then((module) => module.default));
const CtaResearch = dynamic(() => import('../components/researchComponents/ctaResearch/CtaResearch').then((module) => module.default));
const Banner = dynamic(() => import('../components/mechanismActionComponents/banner/Banner').then((module) => module.default));
const ReceptorsActive = dynamic(() => import('../components/mechanismActionComponents/receptorActivation/ReceptorActivation').then((module) => module.default));
const IntegratedEffects = dynamic(() => import('../components/mechanismActionComponents/IntegratedEffects/IntegratedEffects').then((module) => module.default));
const ClinicalEffects = dynamic(() => import('../components/mechanismActionComponents/clinicalEffect/ClinicalEffect').then((module) => module.default));
const DrugDelivery = dynamic(() => import('../components/mechanismActionComponents/drugDelivery/DrugDelivery').then((module) => module.default));
const CitationsMechanism = dynamic(() => import('../components/mechanismActionComponents/citations/Citations').then((module) => module.default));
const BannerPatient = dynamic(() => import('../components/patientToolkit/banner/Banner').then((module) => module.default));
const BannerProvenResults = dynamic(() => import('../components/provenResultComponents/banner/Banner').then((module) => module.default));
const TreatmentOptions = dynamic(() => import('../components/provenResultComponents/treatmentOptions/TreatmentOptions').then((module) => module.default));
const Slides = dynamic(() => import('../components/provenResultComponents/slides/Slides').then((module) => module.default));
const RaMedication = dynamic(() => import('../components/provenResultComponents/raMedication/RaMedication').then((module) => module.default));
const PatientSlider = dynamic(() => import('../components/provenResultComponents/patientProfiles/PatientProfiles').then((module) => module.default));
const BiosimilarityComparison = dynamic(() => import('../components/provenResultComponents/biosimilaritycomparison/Biosimilaritycomparison').then((module) => module.default));
const StorageConditionProven = dynamic(() => import('../components/provenResultComponents/storageCondition/StorageCondition').then((module) => module.default));
const CitationsProven = dynamic(() => import('../components/provenResultComponents/citations/Citations').then((module) => module.default));
const VideoJourneySlider = dynamic(() => import('../components/videoLibraryComponents/videoJourney/VideoJourney').then((module) => module.default));
const BmiCalculator = dynamic(() => import('../components/homepage/bmiCalculator/BmiCalculator').then((module) => module.default));
//health blogs
const BannerHealthBlog = dynamic(() => import('../components/bannerHealthBlog/BannerHealthBlog').then((module) => module.default));
const NutritionArticle = dynamic(() => import('../components/nutritionArticle/NutritionArticle').then((module) => module.default));
const CtaBlog = dynamic(() => import('../components/ctaBlog/CtaBlog').then((module) => module.default));
const NutritionReadArticle = dynamic(() => import('../components/nutritionReadArticle/NutritionReadArticle').then((module) => module.default));



export const renderWidget = (type, item, index) => {

    switch (type) {
        case 'web-call-by-reference-card-custom-v1':
            if (item?.card_type == "widget-1" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "home") {
                return (
                    <section>
                        <BannerDoctor widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-2" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "home") {
                return (
                    <section>
                        <SemPHero widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-3" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "home") {
                return (
                    <section>
                        {/* <TirzeePenBannerSection widgetData={item} /> */}
                        <MechanismAction widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-4" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "home") {
                return (
                    <section>
                        <ProvenResults widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-5" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "home") {
                return (
                    <section>
                        <TirzeePenBannerSection widgetData={item} />

                        {/* <ResultsSection widgetData={item} /> */}
                    </section>
                )
            }
            if (item?.card_type == "widget-6" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "home") {
                return (
                    <section>
                        {/* <OnceWeekly widgetData={item} /> */}
                        <ResultsSection resultsData={item}/>
                    </section>
                )
            }
            if (item?.card_type == "widget-10" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "home") {
                return (
                    <section>
                        {/* <ResearchStudiesJournal widgetData={item}/> */}
                        <BmiCalculator widgetData={item}/>
                    </section>
                )
            }
            if (item?.card_type == "widget-8" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "home") {
                return (
                    <section>
                        <Diabetologist widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-9" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "home") {
                return (
                    <section>
                       <Citations widgetData={item} />

                    </section>
                )
            }

             if (item?.card_type == "widget-1" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "video-listing") {
                return (
                    <section>
                       <BannerVideo widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-2" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "video-listing") {
                return (
                    <section>
                       <VideoSection widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-3" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "video-listing") {
                return (
                    <section>
                       <VideoJourneySlider widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-1" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "research-paper") {
                return (
                    <section>
                       <BannerResearch widgetData={item} />
                    </section>
                )
            }
             if (item?.card_type == "widget-2" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "research-paper") {
                return (
                    <section>
                       <ResearchStudies widgetData={item} />
                    </section>
                )
            }
             if (item?.card_type == "widget-3" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "research-paper") {
                return (
                    <section>
                       <CtaResearch widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-1" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "mechanism-action") {
                return (
                    <section>
                       <Banner widgetData={item} />
                    </section>
                )
            }

             if (item?.card_type == "widget-2" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "mechanism-action") {
                return (
                    <section>
                       <ReceptorsActive widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-3" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "mechanism-action") {
                return (
                    <section>
                       <IntegratedEffects widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-4" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "mechanism-action") {
                return (
                    <section>
                       <ClinicalEffects widgetData={item} />
                    </section>
                )
            }
             if (item?.card_type == "widget-5" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "mechanism-action") {
                return (
                    <section>
                       <DrugDelivery widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-6" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "mechanism-action") {
                return (
                    <section>
                       <Cta widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-7" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "mechanism-action") {
                return (
                    <section>
                       <CitationsMechanism widgetData={item} />
                    </section>
                )
            }

             if (item?.card_type == "widget-1" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "proven-result") {
                return (
                    <section>
                       <BannerProvenResults widgetData={item} />
                    </section>
                )
            }
              if (item?.card_type == "widget-2" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "proven-result") {
                return (
                    <section>
                       <Slides widgetData={item} />
                    </section>
                )
            }


            if (item?.card_type == "widget-3" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "proven-result") {
                return (
                    <section>
                       <TreatmentOptions widgetData={item} />
                    </section>
                )
            }

              if (item?.card_type == "widget-4" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "proven-result") {
                return (
                    <section>
                       <RaMedication widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-5" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "proven-result") {
                return (
                    <section>
                       <PatientSlider widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-6" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "proven-result") {
                return (
                    <section>
                       <BiosimilarityComparison widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-7" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "proven-result") {
                return (
                    <section>
                       <StorageConditionProven widgetData={item} />
                    </section>
                )
            }

             if (item?.card_type == "widget-8" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "proven-result") {
                return (
                    <section>
                       <CitationsProven widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-1" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "patient-toolkit") {
                return (
                    <section>
                        <BannerPatient widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-2" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "patient-toolkit") {
                return (
                    <section>
                        <WhatIsSemo widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-3" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "patient-toolkit") {
                return (
                    <section>
                        <DoseCalculation widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-4" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "patient-toolkit") {
                return (
                    <section>
                        <ProvenResults widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-5" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "patient-toolkit") {
                return (
                    <section>
                        <StorageCondition widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-6" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "patient-toolkit") {
                return (
                    <section>
                        <RotationGuide widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-7" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "patient-toolkit") {
                return (
                    <section>
                        <DiseaseSlider widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-8" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "patient-toolkit") {
                return (
                    <section>
                        <AutoInjector widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-9" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "patient-toolkit") {
                return (
                    <section>
                        <DietGuidance widgetData={item} />
                    </section>
                )
            }
            if (item?.card_type == "widget-10" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "patient-toolkit") {
                return (
                    <section>
                        <DietGuidanceDay widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-11" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "patient-toolkit") {
                return (
                    <section>
                        <CtaPatientTool widgetData={item} />
                        </section>
                        )
                }

            if (item?.card_type == "widget-1" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "blogs") {
                return (
                    <section>
                       <BannerHealthBlog widgetData={item} />
                    </section>
                )
            }

   if (item?.card_type == "widget-2" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "blogs") {
                return (
                    <section>
                       <NutritionArticle widgetData={item} />
                    </section>
                )
            }

            if (item?.card_type == "widget-3" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "blogs") {
                return (
                    <section>
                       <CtaBlog widgetData={item} />
                    </section>
                )
            }
             if (item?.card_type == "widget-4" && item?.key_type == 'web-call-by-reference-card-custom-v1' && item?.slug == "blogs") {
                return (
                    <section>
                       <NutritionReadArticle widgetData={item} />
                    </section>
                )
            }

        case 'web-faq-v1':
            if (item?.key_type == 'web-faq-v1' && (item?.slug == "home" || item?.slug == "mechanism-action")) {
                return (
                    <section>
                        <Faqs widgetData={item} />
                    </section>
                )
            }

        default:
            return null;
    }
};


