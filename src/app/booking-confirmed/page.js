"use client";

import Image from "next/image";
import styles from "./booking-confirmed.module.css";
import { Col, Row } from "react-bootstrap";
import BookingConfirmedImage from "../../assets/images/svg/BookingConfirmedImage.svg"

export default function Page() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <main className="flex-1 flex items-center justify-center p-6">
        <section className="">
          <div className={styles.outerFrame}>
            <div className={styles.container}>
              <Row className="mx-auto justify-content-center align-items-center">
                <Col lg={5} className="pe-0">
                  {/* LEFT: image / illustration area (hidden on small screens) */}
                  <aside className={styles.left}>
                    <div className={styles.leftInner}>
                      <div className={styles.imageMask}>
                        <Image
                          src={BookingConfirmedImage}
                          alt="doctor with patient"
                          width={548}
                          height={650}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </aside>
                </Col>
                <Col lg={5} className={`${styles.cardContainer}`}>
                  {/* RIGHT: white card with form */}
                  <article className={styles.card}>
                    <h1 className={styles.cardTitle}>Health &amp; Fitness</h1>

                    <p className={styles.cardDescription}>
                      We are an Artificial Intelligence medical company and
                      require some details to help ensure the security and
                      confidentiality of your data.
                    </p>

                    <h2 className={styles.detailsTitle}>Enter your details</h2>

                    <form
                      className={styles.formSection}
                      onSubmit={handleSubmit}
                    >
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter Name"
                        className={styles.inputField}
                      />

                      <div
                        style={{ display: "flex" }}
                        className={styles.numberField}
                      >
                        <div className={styles.country_code_hk}>
                          <div className={styles.number__code}>
                            <img src="/pk.svg" className="img-fluid"></img>

                            <input
                              type="tel"
                              placeholder="+92"
                              readOnly
                              className={styles.number__code_input}
                            />
                          </div>
                        </div>

                        <input
                          className={styles.input_number}
                          placeholder="Enter Mobile Number*"
                          type="tel"
                          pattern="[0-9]*"
                          maxLength={10}
                          name="number"
                          // value={instantPhoneNumber}
                          // onChange={instantPhoneChange}
                          onKeyDown={(evt) =>
                            ["e", "E", "+", "-", "."].includes(evt.key) &&
                            evt.preventDefault()
                          }
                          style={{ width: "100%" }}
                        />
                      </div>

                      <button type="submit" className={styles.submitButton}>
                        Start Consultation
                      </button>
                    </form>
                  </article>
                </Col>
              </Row>
            </div>
            <div className={styles.footerSection}>
              <p>
                By verifying your number you agree to the terms and conditions
                of our website
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
