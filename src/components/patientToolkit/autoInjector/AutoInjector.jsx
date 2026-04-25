import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./autoInjector.module.scss";

export default function AutoInjector({ widgetData }) {
  // Extract the main data object
  const sectionData = widgetData?.data?.[0];

  // Map the API fields to a more manageable array
  const features = [
    { desc: sectionData?.card_1_desc, icon: sectionData?.card_1_icon },
    { desc: sectionData?.card_2_desc, icon: sectionData?.card_2_icon },
    { desc: sectionData?.card_3_desc, icon: sectionData?.card_3_icon },
    { desc: sectionData?.card_4_desc, icon: sectionData?.card_4_icon },
  ].filter(item => item.desc); // Only show cards that have content

  return (
    <section className={styles.wrapper}>
      <Container fluid>
        <Row className="gx-0">
          <Col lg={6}>
            <img
              src={sectionData?.image || "/assets/images/png/semp16.png"}
              alt="Auto injector device"
              className={styles.image}
            />
          </Col>
          <Col lg={6} className={styles.right}>
            <h3 className={styles.title}>
              {widgetData?.heading || "Managing Side Effects"}
            </h3>

            <div className={styles.list}>
              {features.map((item, index) => (
                <div key={index} className={styles.card}>
                    <img src={item.icon} alt="icon" />
                  <div
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              ))}
            </div>

            {sectionData?.card_5_desc && (
              <div
                className={styles.belData}
                dangerouslySetInnerHTML={{ __html: sectionData.card_5_desc }}
              />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}