import { renderWidget } from "@/utils/common";
import { provenResults } from "@/utils/endpoints";
import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

async function getProvenResults() {
  const apiLocale = 1;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_PAGES}/${provenResults}`,
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
  );
}


