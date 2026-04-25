import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./raMedication.module.scss";
import parse from "html-react-parser";

const RaMedication = ({widgetData}) => {

  return (
    <section className={styles.wrapper}>
      <Container>
        {/* Header */}
        <Row className={styles.header}>
          <Col lg={9}>
            <h3 className={styles.title}>{widgetData && parse(widgetData?.description)}</h3>
          </Col>
        </Row>

        {/* Product Area */}
        <Row className="align-items-center">
          {/* Product Image */}
          <Col lg={12} className="text-center">
            <div className={styles.product}>
              <Image
                src={widgetData?.data[0]?.image}
                alt="Ra Medication Illustration"
                priority
                className="img-fluid"
                width={1290}
                height={706}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RaMedication;
