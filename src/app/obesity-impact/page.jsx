import React from 'react'
import styles from './obesity.module.scss'
import BannerObesity from '@/components/bannerObesity/BannerObesity'
import AsideObesity from '@/components/asideObesity/AsideObesity'
import ExcessWeightEffects from '@/components/excessWeightEffects/ExcessWeightEffects'
import UnderstandingObesity from '@/components/understandingObesity/UnderstandingObesity'
import StartConsultation from '@/components/startConsultation/StartConsultation'
import bannerObesity from '../../assets/images/png/bannerObesity.png'

const page = () => {
  return (
    <div className={styles.obesityImapct} >
        <BannerObesity  bannerObesity={bannerObesity} heading={'Obesity awareness starts with understanding.'}/>
        <AsideObesity/>
        <ExcessWeightEffects/>
        <UnderstandingObesity/>
        <StartConsultation/>
    </div>
  )
}

export default page