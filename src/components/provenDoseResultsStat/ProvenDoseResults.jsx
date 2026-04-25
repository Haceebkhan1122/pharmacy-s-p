'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import Image from 'next/image';
import styles from './provenDoseResults.module.scss';

const ProvenResultsStat = ({ widgetData }) => {
  // We default the state to 'vial' but we'll match it against API heading
  const [activeTab, setActiveTab] = useState("vial");

  if (!widgetData || !widgetData.data) return null;

  // Find the data object that matches the current selection
  // API uses "SEM-P Vial" and "Pen"
  const currentData = widgetData.data.find(item =>
    item.heading.toLowerCase().includes(activeTab.toLowerCase())
  ) || widgetData.data[0];

  // Defining the steps to map through the API's card_X_icon structure
  const steps = [
    { key: "step1", head: currentData.card_1_head, icon: currentData.card_1_icon },
    { key: "step2", head: currentData.card_2_head, icon: currentData.card_2_icon },
    { key: "step3", head: currentData.card_3_head, icon: currentData.card_3_icon },
    { key: "step4", head: currentData.card_4_head, icon: currentData.card_4_icon },
    { key: "step5", head: currentData.card_5_head, icon: currentData.card_5_icon },
    { key: "step6", head: currentData.card_6_head, icon: currentData.card_6_icon },
    { key: "step7", head: currentData.card_7_head, icon: currentData.card_7_icon },
  ];

  return (
    <section className={`${styles.provenSection} ${activeTab === 'vial' ? styles.bgVialActive : ''}`}>
      <Container>
        <div className="text-center mb-5">
          {/* Main Widget Heading */}
          <h2 className="mb-4">{widgetData.heading}</h2>

          <Nav
            variant="pills"
            className="justify-content-center"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
          >
            {widgetData.data.map((item, idx) => (
              <Nav.Item key={idx}>
                <Nav.Link
                  eventKey={item.heading.toLowerCase().includes('vial') ? 'vial' : 'pen'}
                  className={styles.tabBtn}
                >
                  {item.heading}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <Tab.Container id="step-tabs" defaultActiveKey="step1">
          <div className="d-flex justify-content-center mb-5 overflow-auto">
            <Nav variant="pills" className={styles.stepNavvv}>
              {steps.map((step) => (
                step.head && (
                  <Nav.Item key={step.key}>
                    <Nav.Link eventKey={step.key}>{step.head}</Nav.Link>
                  </Nav.Item>
                )
              ))}
            </Nav>
          </div>

          <Tab.Content>
            {steps.map((step) => (
              step.icon && (
                <Tab.Pane eventKey={step.key} key={step.key}>
                  <Row className="justify-content-center g-4">
                    <Col lg={8}>
                      <Image
                        src={step.icon}
                        alt={step.head || "Step Image"}
                        width={800}
                        height={500}
                        priority={step.key === 'step1'}
                        style={{
                          objectFit: 'contain',
                          width: '100%',
                          height: 'auto'
                        }}
                      />
                    </Col>
                  </Row>
                </Tab.Pane>
              )
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default ProvenResultsStat;