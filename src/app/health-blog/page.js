import { renderWidget } from "@/utils/common";
import { blogs } from "@/utils/endpoints";
import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

export const dynamic = "force-dynamic";
async function getBlogWidgets() {

  const apiLocale = 1;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); 

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_PAGES}/${blogs}`,
      {
        method: "GET",
        headers: {
          platform: "web",
          locale: apiLocale.toString(),
        },
        cache: "no-store", 
        signal: controller.signal,
      },
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

export default async function LocalePage() {
  const blogWidgets = await getBlogWidgets();
  const widgets = Array.isArray(blogWidgets?.widgets)
    ? blogWidgets.widgets
    : [];

  return (
    <div>
      <section style={{ backgroundColor: "#fff" }}>
        <Suspense fallback={<Loader />}>
          {widgets?.map((item, index) => {
            if (!item || !item.key_type) return null;

            const key = item.id || index;

            return (
              <>
                <div key={key}>{renderWidget(item.key_type, item, index)}</div>
              </>
            );
          })}
        </Suspense>
      </section>
    </div>
  );
}
