import React from 'react'
import styles from './obesityBlogs.module.scss'
import BannerObesity from '@/components/bannerObesity/BannerObesity'
import bannerObesityblogs from '../../assets/images/png/obesityblogsbanner.png'
import ObesityArticles from '@/components/obesityArticles/ObesityArticles'
import StartConsultation from '@/components/startConsultation/StartConsultation'
import ListArticleTool from '@/components/listArticleTool/ListArticleTool'
import RelatedListArticles from '@/components/relatedListArticles/RelatedListArticles'
import NavSwitcher from '@/components/navswitcher/NavSwitcher'

const page = () => {
  return (
    <>
      <NavSwitcher />
    <div className={styles.obesityImapct}>
         <BannerObesity bannerObesity={bannerObesityblogs} heading={'Insights for a Healthier Tomorrow'}/>
         <ObesityArticles/>
          <StartConsultation/>
          <RelatedListArticles/>
        </div>
    </>
  )
}

export default page