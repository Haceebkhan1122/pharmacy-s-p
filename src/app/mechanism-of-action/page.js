import { renderWidget } from "@/utils/common";
import { Suspense } from "react";
import Loader from "@/components/loader/Loader";
import axios from "axios";
import { mechanismPaperPage } from "@/utils/endpoints";

async function getHomePageWidgets() {

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_PAGES}/${mechanismPaperPage}`);

    if (!res?.data || res.status !== 200) {
      console.warn(`API fetch failed with status: ${res?.status}`);
      return {};
    }

    const response = res.data;
    return response?.data || {};
  } catch (err) {
    console.error("Error fetching home page widgets:", err?.message || err);
    return {};
  }
}

export default async function LocalePage({ params }) {
  const homePageWidgets = await getHomePageWidgets();
  const widgets = Array.isArray(homePageWidgets?.widgets) ? homePageWidgets.widgets : [];

  return (
    <div>
      <section style={{ backgroundColor: "#fff" }}>
        <Suspense fallback={<Loader />}>
          {widgets.map((item, index) => {
            if (!item || !item.key_type) return null;
            const key = item.id || index;
            return (
              <>
                <div key={key}>
                  {renderWidget(
                    item.key_type,
                    item,
                    index,
                  )}
                </div>
              </>
            );
          })}
        </Suspense>
      </section>
    </div>
  );
}


// {/* <PageLoaderWrapper>
//   <div className="">
//     <section id="whatIs">
//       <BannerMechanism data={data} />
//     </section>
//     {/* <section id="whatIs">
//           <DailyDosePad data={data} />
//         </section> */}
//     <section id="whatIs">
//       <ImpactSection data={data} />
//     </section>
//     <section id="whatIs">
//       <IntegratedClinical />
//     </section>
//     <section id="whatIs">
//       <DrugDelivery />
//     </section>
//     <section id="whatIs">
//       <CtaMechanism />
//     </section>
//     {/* <section id="whatIs">
//           <FaqSemoEverything />
//         </section> */}
//     {/* <section id="whatIs">
//           <ReferenceMechanism />
//         </section> */}
//     <Footer />
//   </div>
// </PageLoaderWrapper> */}