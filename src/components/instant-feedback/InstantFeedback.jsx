import React from 'react'
import styles from './InstantFeedback.module.scss';
import Image from 'next/image';
import ClockSvg from '../../assets/images/svg/clockSvg.svg';
import DoctorPng from '../../assets/images/png/doctor.png';

const InstantFeedbackComp = () => {
  return (
    <div className={styles.instantFeedbackWrapper}>
      <div className={styles.main_page}>
        <div className={styles.box_dialog}>
          <p className={styles.para}> Your consultation has ended with </p>
          <div className={styles.imgWrapper}>
            <Image src={DoctorPng} alt='' />
            <Image src={ClockSvg} alt='' />
          </div>
          <h3> Dr. Mawish Saad </h3>
          <h5>General Physician</h5>
          <span>M.B.B.S., F.C.P.S.</span>
          <button> Download Prescription </button>
        </div>
      </div>
    </div>
  )
}

export default InstantFeedbackComp;
