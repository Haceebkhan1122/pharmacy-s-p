// import DoseCalculation from "@/components/doseCalculation/DoseCalculation";
import { renderWidget } from "@/utils/common";
import { mechanismAction } from "@/utils/endpoints";
import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

async function getMechanismActions() {
  const apiLocale = 1;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_PAGES}/${mechanismAction}`,
      {
        method: "GET",
        headers: {
          platform: "web",
          locale: apiLocale.toString(),
        },
        cache: "no-store", // always fresh on server
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    if (!res || res.status !== 200) {
      console.warn(`API fetch failed with status: ${res?.status}`);
      return {}; // fallback
    }

    const json = await res.json();
    return json?.data || {};
  } catch (err) {
    console.error("Error fetching home page widgets:", err?.message || err);
    return {};
  }
}

export default async function LocalePage({ params }) {
  // Fetch widgets from API
  const mechanismActionWidgets = await getMechanismActions();

  const widgets = Array.isArray(mechanismActionWidgets?.widgets) ? mechanismActionWidgets.widgets : [];
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


