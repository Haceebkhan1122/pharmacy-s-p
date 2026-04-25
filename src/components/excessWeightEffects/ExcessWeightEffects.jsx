import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './ExcessWeightEffects.module.scss'
import gynecology from '../../assets/images/svg/gynecology.svg';
import Image from 'next/image';

const ExcessWeightEffects = () => {
  return (
    <div className={styles.excessWeightEffects}>
              <Container>
          <div className={styles.excessWeightEffectsContainer}>
              <div className={styles.titleExcess}>
                  <h1>
                    How excess weight affects your health
                  </h1>
                  <p>
                    Carrying extra weight can silently impact multiple organs and systems. Understanding these effects is the first step toward staying healthy.
                  </p>
              </div>
             <Row>
                 <Col lg={4}>
            <div className={styles.singleCard}>
              <Image width={60} height={60} src={gynecology} alt="" />
                              <div className={styles.singleCardDescription}>
                 <h4> Type 2 Diabetes </h4>
              <p>
                Blood sugar rises when insulin cannot be used properly, potentially damaging nerves, kidneys, & eyes.
              </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.singleCard}>
              <Image width={60} height={60} src={gynecology} alt="" />
                              <div className={styles.singleCardDescription}>
                 <h4> Obesity </h4>
              <p>
               Extra body fat strains organs and tissues, affecting metabolism and overall body function.
              </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.singleCard}>
              <Image width={60} height={60} src={gynecology} alt="" />
                              <div className={styles.singleCardDescription}>
                 <h4> Arthritis (Obesity Linked) </h4>
              <p>
                Extra weight increases pressure on joints, causing pain, stiffness, and reduced mobility.
              </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.singleCard}>
              <Image width={60} height={60} src={gynecology} alt="" />
                              <div className={styles.singleCardDescription}>
                 <h4> Cardiometabolic Risk </h4>
              <p>
               Increases blood pressure and cholesterol, raising risk of heart attack and stroke.
              </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.singleCard}>
              <Image width={60} height={60} src={gynecology} alt="" />
                              <div className={styles.singleCardDescription}>
                 <h4> Chronic Kidney Disease </h4>
              <p>
                Reduces kidney efficiency, making it harder to remove waste and maintain fluid balance.
              </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.singleCard}>
              <Image width={60} height={60} src={gynecology} alt="" />
                              <div className={styles.singleCardDescription}>
                 <h4> Depression</h4>
              <p>
                Obesity can affect mood, energy, and motivation, increasing risk of anxiety and depression.
              </p>
              </div>
            </div>
          </Col>
            </Row>
            <div className={styles.showMore}>
              <button>
                Show More
              </button>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default ExcessWeightEffects