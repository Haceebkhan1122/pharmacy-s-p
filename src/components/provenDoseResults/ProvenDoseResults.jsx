"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Image from "next/image";
import styles from "./provenDoseResults.module.scss";

const ProvenResults = ({ widgetData }) => {
  const tabsData = widgetData?.data || [];

  // Default tab = first heading
  const [activeTab, setActiveTab] = useState(
    tabsData?.[0]?.heading || ""
  );
  // Default step
  const [activeStep, setActiveStep] = useState("card_1");

  // Current selected tab object
  const currentTab = useMemo(() => {
    return tabsData.find((t) => t.heading === activeTab);
  }, [activeTab, tabsData]);

  // Build steps dynamically from API
  const steps = useMemo(() => {
    if (!currentTab) return [];

    const result = [];
    for (let i = 1; i <= 7; i++) {
      const head = currentTab[`card_${i}_head`];
      const icon = currentTab[`card_${i}_icon`];

      if (head && icon) { 
        result.push({
          key: `card_${i}`,
          head,
          icon,
        });
      }
    }
    return result;
  }, [currentTab]);

  // Reset step when tab changes
  useEffect(() => {
    setActiveStep("card_1");
  }, [activeTab]);

  // Active step data
  const activeStepData = steps.find(
    (step) => step.key === activeStep
  );

  return (
    <section
      className={`${styles.provenSection} ${
        activeTab?.toLowerCase()?.includes("vial")
          ? styles.bgVialActive
          : ""
      }`}
    >
      <Container>
        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="mb-4">{widgetData?.heading}</h2>

          {/* TAB NAV */}
          <Nav
            variant="pills"
            className="justify-content-center"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
          >
            {tabsData?.map((tab, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  eventKey={tab.heading}
                  className={styles.tabBtn}
                >
                  {tab.heading}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        {/* STEPS NAV */}
        <Tab.Container activeKey={activeStep}>
          <div className="d-flex justify-content-center mb-5 overflow-auto">
            <Nav variant="pills" className={styles.stepNavvv}>
              {steps?.map((step) => (
                <Nav.Item key={step.key}>
                  <Nav.Link
                    eventKey={step.key}
                    onClick={() => setActiveStep(step.key)}
                  >
                    {step.head}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>

          {/* STEP CONTENT */}
          <Tab.Content>
            <Tab.Pane eventKey={activeStep}>
              <Row className="justify-content-center g-4">
                <Col lg={12}>
                  {activeStepData?.icon && (
                    <Image
                      src={activeStepData?.icon || null}
                      alt={activeStepData?.head}
                      width={600}
                      height={400}
                      priority
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  )}
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default ProvenResults;
