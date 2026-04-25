import Image from "next/image";
import styles from "./drugDelivery.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import parse from "html-react-parser";

const DrugDelivery  = ({ widgetData }) => {

  return (
    <div>
      <main className="flex-1 flex justify-center p-6" id="whatissemp">
        <section className="">
          <div className={styles.outerFrameSemP}>
            <Container className={styles.containerSemP}>
              <Row className="mx-auto justify-content-center">
                <Col lg={6} sm={6} md={6} className="pe-0 ps-sm-0 my-auto">
                  <aside className={styles.leftSemP}>
                    <div className={styles.leftInnerSemP}>
                      <div className={styles.imageMaskSemP}>
                        <Image
                          src={widgetData?.data[0]?.image}
                          alt="hero image"
                          className="object-contain"
                          priority
                          width={630}
                          height={570}
                        />
                      </div>
                    </div>
                  </aside>
                </Col>
                <Col
                  lg={5}
                  sm={6}
                  md={5}
                  className={`${styles.cardContainerSemP} my-auto ms-auto`}
                >
                  <article className={styles.cardSemP}>
                    <p className={styles.cardTitleSemP}>
                      {widgetData && parse(widgetData?.heading)}
                    </p>
                    <p className={styles.cardDescriptionSemP}>
                     {widgetData && parse(widgetData?.description)}
                    </p>
                  </article>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </main>
    </div>
  );
}


export default DrugDelivery;
