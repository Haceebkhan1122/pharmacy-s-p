"use client";
import React, { useState, useMemo } from "react";
import { Container, Nav } from "react-bootstrap";
import styles from "./dietGuidance.module.scss";

const DietGuidance = ({ widgetData }) => {
  const [activeDay, setActiveDay] = useState(
    widgetData?.data?.[0]?.heading || ""
  );
  const days = useMemo(() => widgetData?.data || [], [widgetData]);
  const activeDayItem = days.find((day) => day.heading === activeDay);

  return (
    <div className={`${styles.DietGuidance} DietGuidance`}>
       <div className={styles.compoDays}>
      <Container>
        {/* Day Tabs */}
        <div className={styles.tabContainer}>
          <Nav
            variant="pills"
            activeKey={activeDay}
            onSelect={(selected) => setActiveDay(selected || days?.[0]?.heading)}
            className={styles.navPills}
          >
            {days?.map((day) => (
              <Nav.Item key={day.id}>
                <Nav.Link eventKey={day.heading} className={styles.dayLink}>
                  {day.heading}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        {/* Active Day Image */}
        {activeDayItem?.image && (
          <div className="my-4 text-center">
            <img
              src={activeDayItem.image}
              alt={activeDayItem.heading}
              className={styles.dayImage}
            />
          </div>
        )}
      </Container>
      </div>
    </div>
  );
};

export default DietGuidance;