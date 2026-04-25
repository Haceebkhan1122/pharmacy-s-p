import styles from "./page.module.scss";
import BannerArticle from "@/components/bannerArticle/BannerArticle";
import ArticleContentLeft from "@/components/articleContentLeft/ArticleContentLeft";
import Footer from "@/components/footer/Footer";
import NavSwitcher from "@/components/navswitcher/NavSwitcher";

const Page = async ({ params }) => {


  const { slug } = await params;

  let data = null;

  if (slug) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ARTICLE_BASE_URL}/article/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (res?.status == 200) {
      let apiData = await res.json()
      data = apiData?.data;

    } else {
      console.error("Failed to fetch article:", res.status);
    }
  } else {
    console.warn("Slug is undefined, API call skipped");
  }


  return (
    <div className={styles.articleDetailPage}>
      <NavSwitcher />
      <BannerArticle data={data} />
      <ArticleContentLeft data={data} />
      <Footer />
    </div>
  );
};

export default Page;
