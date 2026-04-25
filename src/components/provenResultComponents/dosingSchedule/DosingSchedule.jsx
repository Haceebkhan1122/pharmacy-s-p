// components/DosingSchedule/DosingSchedule.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./dosingSchedule.module.scss";
import DosagePenImage from "../../../assets/images/svg/dosagePen.svg";
import dosageBg from "../../../assets/images/png/dosageBG.png";
import Image from "next/image";
import { isMobile } from "react-device-detect";

const DosingSchedule = () => {
  const dosingData = [
    {
      dose: "Initiate with 0.25 mg",
      frequency: "Once weekly",
      duration: "Continue for 4 weeks",
    },
    {
      dose: "Escalate & Maintain to 0.5 mg",
      frequency: "Once weekly",
      duration: "Continue for 4 weeks",
    },
    {
      dose: "Escalate & Maintain to 1.0 mg",
      frequency: "Once weekly",
      duration: "Continue till doctor prescription",
    },
    {
      dose: "Maintain at 2.0 mg",
      frequency: "Once weekly",
      duration: "Continue till doctor prescription",
    },
  ];

  const splitDose = (text) => {
    const m = text.match(/^(.*?)(\d+(\.\d+)?\s*mg)$/i);
    if (m) return { label: m[1].trim(), mg: m[2].trim() };
    return { label: text, mg: "" };
  };

  return (
    <div className={styles.dosingScheduleSection}
    >
      <Container>
        {/* Header */}
        <Row>
          <Col>
            <h2 className={styles.mainHeading}>Dosing Schedule</h2>
            {/* <p className={styles.subHeading}>
              Patients starting on oral semaglutide at a low dose of 3 mg
              experienced noticeable improvements in blood sugar and weight as
              their dose was gradually increased.
            </p> */}
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={12} className="p-0">
            <div
              className={styles.dosingCard}
              style={{
                backgroundImage: `url(${dosageBg.src})`,
              }}
            >
              {/* INNER wrapper — this is centered and constrained to 10 cols */}
              <div className={styles.cardInner}>
                <Row className="justify-content-center">
                  <Col lg={10}>
                    <Row>
                      {/* Left: Pen Image */}
                      <Col xl={4} lg={5} md={12} className={styles.leftSection}>
                        <div className={styles.penImageContainer}>
                          <Image
                            src={DosagePenImage}
                            alt="Dosage pen"
                            priority
                          />
                        </div>
                      </Col>

                      {/* Right: Table */}
                      <Col xl={8} lg={7} md={12} className={styles.rightSection}>
                        <div className={styles.tableContainer}>
                          <table
                            className={styles.dosingTable}
                            aria-label="Dosing schedule"
                          >
                            <thead>
                              <tr>
                                <th>Dose</th>
                                <th>Frequency</th>
                                <th>Duration</th>
                              </tr>
                            </thead>

                            <tbody>
                              {dosingData?.map((item, idx) => {
                                const { label, mg } = splitDose(item.dose);
                                return (
                                  <tr key={idx}>
                                    <td>
                                      <div className={styles.doseCell}>
                                        <span className="label">{label}</span>
                                        {mg && <strong>{mg}</strong>}
                                      </div>
                                    </td>
                                    <td>{item.frequency}</td>
                                    <td>{item.duration}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row className="justify-content-center">
          <Col lg={12} xl={12} xs={12}>
            <div
              className={styles.contactCard}
              style={{
                backgroundImage: `url(${dosageBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className={styles.contactText}>
                If you need more information contact us:{" "}
                <a href="tel:021-111-455-455" className={styles.contactLink}>
                  021-111-455-455
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DosingSchedule;
