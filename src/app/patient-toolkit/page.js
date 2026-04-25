// import DoseCalculation from "@/components/doseCalculation/DoseCalculation";
import { renderWidget } from "@/utils/common";
import { patientToolkitPage, provenResults } from "@/utils/endpoints";
import { Suspense } from "react";
import Loader from "@/components/loader/Loader";
import axios from 'axios';

export const dynamic = "force-dynamic";

async function getProvenResults() {
    const apiLocale = 1;
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_PAGES}/${patientToolkitPage}`, {
            headers: {
                platform: "web",
                locale: apiLocale.toString(),
            },
            // Axios mein timeout directly config mein pass hota hai (milliseconds mein)
            timeout: 5000,
            // Next.js mein fetch ki 'no-store' cache handling ke liye hum headers use karte hain
            headers: {
                'platform': 'web',
                'locale': apiLocale.toString(),
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });

        // Axios automatic JSON parse karta hai aur status 200-299 ko success maanta hai
        return res.data?.data || {};

    } catch (err) {
        // Axios errors mein 'response' object hota hai agar server ne respond kiya ho
        if (err.code === 'ECONNABORTED') {
            console.warn("API request timed out");
        } else {
            console.error("Error fetching home page widgets:", err.response?.status || err.message);
        }

        return {}; // fallback
    }
}

export default async function LocalePage({ params }) {
    // Fetch widgets from API
    const provenResults = await getProvenResults();
    const widgets = Array.isArray(provenResults?.widgets) ? provenResults.widgets : [];
    return (
        <div>
            <section style={{ backgroundColor: "#fff" }}>
                <Suspense fallback={<Loader />}>
                    {widgets.map((item, index) => {
                        if (!item || !item.key_type) return null; // skip invalid items
                        const key = item.id || index; // use id if available
                        return (
                            <div key={key}>
                                {renderWidget(
                                    item.key_type,
                                    item,
                                    index,
                                )}
                            </div>
                        );
                    })}
                </Suspense>
            </section>
        </div>

        // </PageLoaderWrapper>
    );
}




// {/* <PageLoaderWrapper>
//     <NavSwitcher />
//     <div className="">
//         <section id="whatIs">
//             <Banner data={data} />
//         </section>
//         <section id="dailyDose">
//             <WhatIsSemo data={data} />
//         </section>
//         <section id="dailyDose">
//             <DoseCalculation data={data} />
//         </section>
//         <section id="dailyDose">
//             <ProvenResultsStat data={data} />
//         </section>
//         <section id="dailyDose">
//             <StorageCondition data={data} />
//         </section>
//         <section id="bmiCalculatorSemo">
//             <RotationGuide data={data} />
//         </section>
//         <section id="bmiCalculatorSemo">
//             <DiseaseSlider data={data} />
//         </section>
//         <section id="bmiCalculatorSemo">
//             <AutoInjector data={data} />
//         </section>
//         <section id="dailyDose">
//             <DietGuidance data={data} />
//         </section>
//         <section id="dailyDose">
//             <CtaPatientTool data={data} />
//         </section>

//         {/* <Footer /> */}
//     </div>
// </PageLoaderWrapper> */}