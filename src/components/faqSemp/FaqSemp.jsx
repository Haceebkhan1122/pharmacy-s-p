"use client";
import React, { useState } from "react";
import styles from "./faqSemp.module.scss";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import parse from "html-react-parser";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

import stepImgOne from '../../assets/images/png/stepOne1.png';
import stepImgTwo from '../../assets/images/png/stepOne2.png';
import stepImgThree from '../../assets/images/png/stepOne3.png';
import stepImgFour from '../../assets/images/png/stepOne4.png';
import stepImgFive from '../../assets/images/png/stepOne5.png';

import step2ImgOne from '../../assets/images/png/stepTwo1.png';
import step2ImgTwo from '../../assets/images/png/stepTwo2.png';

import step3ImgOne from '../../assets/images/png/stepThree1.png';
import step3ImgTwo from '../../assets/images/png/stepThree2.png';
import step3ImgThree from '../../assets/images/png/stepThree3.png';
import step3ImgFour from '../../assets/images/png/stepThree4.png';

import step4ImgOne from '../../assets/images/png/stepFour1.png';
import step4ImgTwo from '../../assets/images/png/stepFour2.png';
import step4ImgThree from '../../assets/images/png/stepFour3.png';

import sempVial1 from '../../assets/images/png/sempviall11.png';
import sempVial2 from '../../assets/images/png/sempVial2.png';
import sempVial3 from '../../assets/images/png/sempVial3.png';
import sempVial4 from '../../assets/images/png/sempVial4.png';
import sempVial5 from '../../assets/images/png/sempVial5.png';
import sempVial6 from '../../assets/images/png/sempVial6.png';
import sempVial7 from '../../assets/images/png/sempVial7.png';
import sempVial8 from '../../assets/images/png/sempVial8.png';
import sempVial9 from '../../assets/images/png/sempVial9.png';
import sempVial10 from '../../assets/images/png/sempVial10.png';
import sempVial11 from '../../assets/images/png/sempVial11.png';
import sempVial12 from '../../assets/images/png/sempVial12.png';
import sempVial13 from '../../assets/images/png/sempVial13.png';

const FaqsPage = ({ data }) => {
    const [activeTabId, setActiveTabId] = useState("preFilled");

    return (    
        <>
            <section className={`${styles.faqSectionNew} faqSectionNew pt-100  pb-100`}>
                <Container>
                    <Col lg={12}>
                        <div className={styles.wraper_heading}>  
                            <h1> SEM-P (Semaglutide) </h1>
                            <p> Pre-filled Pen and Vial - 4mg/3ml & 2mg/1.5ml   </p>
                        </div>
                        <Row>
                            <Tabs
                                id="proven-results-tabs"
                                activeKey={activeTabId}
                                onSelect={(k) => setActiveTabId(k)}
                                className={`${styles.customTabsFaq} customTabsFaq`}
                            >
                                <Tab
                                    eventKey="preFilled"
                                    title="SEM-P Pre-Filled Pen"
                                >
                                    <div className={styles.wraperSingleContent}>
                                        <Accordion defaultActiveKey="0" className={`accordianCustomFaq ${styles.accordianCustom}`}>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}>DESCRIPTION</p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    Sem-P (Semaglutide) Injection, for subcutaneous use, contains Semaglutide, a human GLP-1 receptor agonist (or GLP-1 analog). The main protraction mechanism of Semaglutide is albumin binding, facilitated by modification of position 26 lysine with a hydrophilic spacer and a C18 fatty di-acid. Furthermore, Semaglutide is modified in position 8 to provide stabilization against degradation by the enzyme dipeptidyl-peptidase 4 (DPP-4). A minor modification was made in position 34 to ensure the attachment of only one fatty di-acid. Its molecular formula is C187H291N45O59.
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> QUALITATIVE AND QUANTITATIVE COMPOSITION</p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p> Sem-P (Semaglutide) Solution for Injection is available for subcutaneous administration as: </p>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <h4> Sem-P Solution for Injection 2mg/1.5mL </h4>
                                                            <p> Each 1.5mL cartridge contains: Semaglutide… 2mg (1.5mL cartridge in disposable pen) </p>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <h4> Sem-P Solution for Injection 4mg/3mL </h4>
                                                            <p> Each 3mL cartridge contains: Semaglutide… 4mg (3mL cartridge in disposable pen) </p>
                                                        </Col>
                                                    </Row>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> CLINICAL PHARMACOLOGY</p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h5> Mechanism of Action </h5>
                                                            <p> Semaglutide is a GLP-1 analogue with 94% sequence homology to human GLP-1. Semaglutide acts as a GLP-1 receptor agonist that selectively binds to and activates the GLP-1 receptor, the target for native GLP-1. GLP-1 is a physiological hormone that has multiple actions on glucose, mediated by the GLP-1 receptors. The principal mechanism of protraction resulting in the long half-life of Semaglutide is albumin binding, which results in decreased renal clearance and protection from metabolic degradation. Furthermore, Semaglutide is stabilized against degradation by the DPP-4 enzyme. Semaglutide reduces blood glucose through a mechanism where it stimulates insulin secretion and lowers glucagon secretion, both in a glucose-dependent manner. Thus, when blood glucose is high, insulin secretion is stimulated and glucagon secretion is inhibited. The mechanism of blood glucose lowering also involves a minor delay in gastric emptying in the early postprandial phase. </p>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h6> Pharmacokinetics </h6>
                                                            <h5> Absorption </h5>
                                                            <p> Absolute bioavailability of Semaglutide is 89%. Maximum concentration of Semaglutide is reached 1 to 3 days post dose. Similar exposure is achieved with subcutaneous administration of Semaglutide in the abdomen, thigh, or upper arm. In patients with type 2 diabetes, Semaglutide exposure increases in a dose-proportional manner for once-weekly doses of 0.5mg and 1mg. Steady-state exposure is achieved following 4-5 weeks of once-weekly administration. In patients with type 2 diabetes, the mean population-PK estimated steady-state concentrations following once weekly subcutaneous administration of 0.5mg and 1mg Semaglutide were approximately 65.0ng/mL and 123.0ng/mL, respectively. </p>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h5> Distribution </h5>
                                                            <p>
                                                                The mean apparent volume of distribution of Semaglutide following subcutaneous administration in patients with type 2 diabetes is approximately 12.5L. Semaglutide is extensively bound to plasma albumin (&gt;99%).
                                                            </p>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h5> Metabolism </h5>
                                                            <p> The primary route of elimination for Semaglutide is metabolism following proteolytic cleavage of the peptide backbone and sequential beta-oxidation of the fatty acid sidechain. </p>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h5> Elimination </h5>
                                                            <p> The apparent clearance of Semaglutide in patients with type 2 diabetes is approximately 0.05L/h. With an elimination half-life of approximately 1 week, Semaglutide will be present in the circulation for about 5 weeks after the last dose. The primary excretion routes of Semaglutide-related material is via the urine and feces. Approximately 3% of the dose is excreted in the urine as intact Semaglutide. </p>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h5> Special Population </h5>
                                                            <p> The exposure of Semaglutide decreases with an increase in body weight. However, Semaglutide doses of 0.5mg and 1mg provide adequate systemic exposure over the body weight range of 40-198kg. </p>
                                                        </Row>
                                                    </Col>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> THERAPEUTIC INDICATIONS </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p> Sem-P (Semaglutide) is indicated: </p>
                                                    <ul>
                                                        <li> As an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus. </li>
                                                        <li> To reduce the risk of major adverse cardiovascular events (cardiovascular death, non-fatal myocardial infarction or non-fatal stroke) in adults with type 2 diabetes mellitus and established cardiovascular disease. </li>
                                                        <li> As monotherapy when metformin is considered inappropriate due to intolerance or contraindications. </li>
                                                        <li> In addition to other medicinal products for the treatment of diabetes.  </li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> DOSAGE AND ADMINISTRATION </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <h4> Recommended Dosage </h4>
                                                    <ul>
                                                        <li> Each mL contains 1.34mg of Semaglutide. </li>
                                                        <li> Initiate Sem-P (Semaglutide) with a dosage of 0.25mg injected subcutaneously once weekly for 4 weeks. The 0.25mg dosage is intended for treatment initiation and is not effective for glycemic control. </li>
                                                        <li> After 4 weeks on the 0.25mg dosage, increase the dosage to 0.5mg once weekly. </li>
                                                        <li> If additional glycemic control is needed after at least 4 weeks on the 0.5mg dosage, the dosage may be increased to 1mg once weekly.  </li>
                                                        <li> If additional glycemic control is needed after at least 4 weeks on the 1mg dosage, the dosage may be increased to 2mg once weekly. The maximum recommended dosage is 2mg once weekly. </li>
                                                        <li> The day of weekly administration can be changed if necessary as long as the time between two doses is at least 2 days (48 hours). </li>
                                                        <li> If a dose is missed, administer Sem-P (Semaglutide) as soon as possible within 5 days after the missed dose. If more than 5 days have passed, skip the missed dose and administer the next dose on the regularly scheduled day. In each case, patients can then resume their regular once weekly dosing schedule. </li>
                                                        
                                                    </ul>
                                                    <h5> Sem-P (Semaglutide) Solution for Injection should be administered by using Sem-P Disposable Pen that has a dose counter with specific markings in mg for dosing convenience and accuracy. </h5>
                                                    <div className={styles.table_Wraper}>
                                                        <table bordered responsive>  
                                                            <thead>
                                                                <tr>
                                                                    <th> Instructions </th>
                                                                    <th> Dose in mg</th>
                                                                    <th> Dose Frequency</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td> Start </td>
                                                                    <td> 0.25mg </td>
                                                                    <td> Once weekly for at least 4 weeks </td>
                                                                </tr>
                                                                <tr>
                                                                    <td> Increase the dose & continue </td>
                                                                    <td> 0.5mg </td>
                                                                    <td> Once weekly for at 
least 4 weeks </td>
                                                                </tr>
                                                                <tr>
                                                                    <td> Increase the dose if needed & continue </td>
                                                                    <td> 1.0mg </td>
                                                                    <td> Once weekly for at 
least 4 weeks </td>
                                                                </tr>
                                                                <tr>
                                                                    <td> Increase the dose if needed & continue </td>
                                                                    <td> 2.0mg </td>
                                                                    <td> Once a week </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <h5> Important Administration Instructions </h5>
                                                    <ul>
                                                        <li> Inspect Sem-P (Semaglutide) visually before use. It should appear clear and colorless. Do not use Sem-P (Semaglutide) if particulate matter and coloration is seen. </li>
                                                        <li> Administer Sem-P (Semaglutide) once weekly, on the same day each week, at any time of the day, with or without meals. </li>
                                                        <li> Inject Sem-P (Semaglutide) subcutaneously to the abdomen, thigh, or upper arm. Instruct patients to use a different injection site each week when injecting in the same body region. </li>
                                                        <li> When using Sem-P (Semaglutide) with insulin, instruct patients to administer as separate injections and to never mix the products. It is acceptable to inject Sem-P (Semaglutide) and insulin in the same body region, but the injections should not be adjacent to each other.  </li>
                                                        <li> When Semaglutide is added to existing metformin and/or thiazolidinedione therapy or to a sodium-glucose cotransporter 2 (SGLT2) inhibitor, the current dose of metformin and/or thiazolidinedione or SGLT2 inhibitor can be continued unchanged. </li>
                                                        <li> When Semaglutide is added to existing therapy of sulfonylurea or insulin, a reduction in the dose of sulfonylurea or insulin should be considered to reduce the risk of hypoglycemia. </li>
                                                        <li> Self-monitoring of blood glucose is not needed in order to adjust the dose of Semaglutide. Blood glucose self-monitoring is necessary to adjust the dose of sulfonylurea and insulin, particularly when Semaglutide is started and insulin is reduced. A stepwise approach to insulin reduction is recommended. </li>
                                                    </ul>

                                                    <h5> Special Population </h5>

                                                    <p className={styles.headWithno}> Patients with hepatic or renal impairment </p>
                                                    <p className={styles.headWithPara}>  No dose adjustment is required for patients with hepatic or renal impairment.</p>
                                                    
                                                    <p className={styles.headWithno}> Pediatric population </p>
                                                    <p className={styles.headWithPara}>  Safety and efficacy of Sem-P (Semaglutide) have not been established in pediatric patients (younger than 18 years). </p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> ADVERSE REACTIONS </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p className={styles.headWithno}> Very Common </p>
                                                    <p className={styles.headWithPara}>  Hypoglycemia when used with insulin or sulfonylurea, nausea and diarrhea. </p>
                                                    
                                                    <p className={styles.headWithno}> Common </p>
                                                    <p className={styles.headWithPara}>  Hypoglycemia when used with other oral antidiabetics (OAD), decreased appetite, dizziness, diabetic retinopathy complications, vomiting, abdominal pain, abdominal distension, constipation, dyspepsia, gastritis, gastroesophageal reflux disease, eructation, flatulence, cholelithiasis, fatigue, increased lipase, increased amylase and weight decreased. </p>

                                                    <p className={styles.headWithno}> Uncommon </p>
                                                    <p className={styles.headWithPara}>  Hypersensitivity, dysgeusia, increased heart rate, acute pancreatitis, delayed gastric emptying and injection site reactions. </p>

                                                    <p className={styles.headWithno}> Rare </p>
                                                    <p className={styles.headWithPara}>  Anaphylactic reaction, intestinal obstruction and angioedema. </p>

                                                    <h6> “To report SUSPECTED ADVERSE REACTIONS to Getz Pharma’s Pharmacovigilance Section, please contact at dsafety@getzpharma.com or +92-21-38636363” </h6>


                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> CONTRAINDICATIONS </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p> Semaglutide is contraindicated in patients with: </p>
                                                    <ul>
                                                        <li> Hypersensitivity to active substance and to any of the excipient of the product. </li>
                                                        <li> A personal or family history of medullary thyroid carcinoma (MTC) or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> PRECAUTIONS </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <h4> WARNING: RISK OF THYROID C-CELL TUMORS </h4>
                                                    <ul>
                                                        <li> In rodents, Semaglutide causes dose-dependent and treatment-duration-dependent thyroid C-cell tumors at clinically relevant exposures. It is unknown whether Semaglutide causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans as human relevance of Semaglutide-induced rodent thyroid C-cell tumors has not been determined. </li>
                                                        <li> Semaglutide is contraindicated in patients with a personal or family history of MTC or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Counsel patients regarding the potential risk for MTC with the use of Semaglutide and inform them of symptoms of thyroid tumors (e.g. a mass in the neck, dysphagia, dyspnea, persistent hoarseness). Routine monitoring of serum calcitonin or using thyroid ultrasound is of uncertain value for early detection of MTC in patients treated with Semaglutide. </li>
                                                    </ul>
                                                    <p className={styles.headWithno}> General </p>
                                                    <p className={styles.headWithPara}>  Semaglutide should not be used in patients with type 1 diabetes mellitus or for the treatment of diabetic ketoacidosis. Semaglutide is not a substitute for insulin. Diabetic ketoacidosis has been reported in insulin-dependent patients whom had rapid discontinuation or dose reduction of insulin when treatment with a GLP-1 receptor agonist is started. </p>

                                                    <p className={styles.headWithno}> Risk of Thyroid C-Cell Tumors </p>
                                                    <p className={styles.headWithPara}>  Semaglutide is contraindicated in patients with a personal or family history of MTC or in patients with MEN 2. Counsel patients regarding the potential risk for MTC with the use of Semaglutide and inform them of symptoms of thyroid tumors (e.g. a mass in the neck, dysphagia, dyspnea, persistent hoarseness). If serum calcitonin is measured and found to be elevated, the patient should be further evaluated. Patients with thyroid nodules noted on physical examination or neck imaging should also be further evaluated. </p>

                                                    <p className={styles.headWithno}> Pancreatitis </p>
                                                    <p className={styles.headWithPara}>  After initiation of Semaglutide, observe patients carefully for signs and symptoms of pancreatitis (including persistent severe abdominal pain, sometimes radiating to the back and which may or may not be accompanied by vomiting). If pancreatitis is suspected, Semaglutide should be discontinued and appropriate management initiated; if confirmed, Semaglutide should not be restarted </p>

                                                    <p className={styles.headWithno}> Hypoglycemia with Concomitant Use of Insulin Secretagogues or Insulin </p>
                                                    <p className={styles.headWithPara}>  Patients receiving Semaglutide in combination with an insulin secretagogue (e.g., sulfonylurea) or insulin may have an increased risk of hypoglycemia, including severe hypoglycemia. The risk of hypoglycemia is increased when Semaglutide is used in combination with insulin secretagogues (e.g., sulfonylureas) or insulin. Patients may require a lower dose of the secretagogue or insulin to reduce the risk of hypoglycemia. </p>

                                                    <p className={styles.headWithno}> Acute Kidney Injury </p>
                                                    <p className={styles.headWithPara}>  There have been postmarketing reports of acute kidney injury and worsening of chronic renal failure, which may sometimes require hemodialysis, in patients treated with GLP-1 receptor agonists. A majority of the reported events occurred in patients who had experienced nausea, vomiting, diarrhea, or dehydration. Monitor renal function when initiating or escalating doses of Semaglutide in patients reporting severe adverse gastrointestinal reactions. </p>

                                                    <p className={styles.headWithno}> Hypersensitivity </p>
                                                    <p className={styles.headWithPara}>  Serious hypersensitivity reactions (e.g., anaphylaxis, angioedema) have been reported with GLP-1 receptor agonists. If hypersensitivity reactions occur, discontinue use of Semaglutide; treat promptly per standard of care, and monitor until signs and symptoms resolve. Do not use in patients with a previous hypersensitivity to Semaglutide. Anaphylaxis and angioedema have been reported with other GLP-1 receptor agonists. Use caution in a patient with a history of angioedema or anaphylaxis with another GLP-1 receptor agonist because it is unknown whether such patients will be predisposed to anaphylaxis with Semaglutide. </p>

                                                    <p className={styles.headWithno}> Acute Gallbladder Disease </p>
                                                    <p className={styles.headWithPara}>  Acute events of gallbladder disease such as cholelithiasis or cholecystitis have been reported. If cholelithiasis is suspected, gallbladder studies and appropriate clinical follow-up are indicated. </p>

                                                    <p className={styles.headWithno}> Aspiration in association with general anesthesia or deep sedation </p>
                                                    <p className={styles.headWithPara}>  Cases of pulmonary aspiration have been reported in patients receiving GLP-1 receptor agonists undergoing general anesthesia or deep sedation. Therefore, the increased risk of residual gastric content due to delayed gastric emptying should be considered prior to performing procedures with general anesthesia or deep sedation.  </p>

                                                    <p className={styles.headWithno}> Gastrointestinal effects </p>
                                                    <p className={styles.headWithPara}>  Use of GLP-1 receptor agonists may be associated with gastrointestinal adverse reactions. This should be considered when treating patients, with impaired renal function as nausea, vomiting, and diarrhea may cause dehydration which could cause a deterioration of renal function. </p>

                                                    <p className={styles.headWithno}> Diabetic Retinopathy </p>
                                                    <p className={styles.headWithPara}>  In patients with diabetic retinopathy treated with insulin and Semaglutide, an increased risk of developing diabetic retinopathy complications has been observed. Caution should be exercised when using Semaglutide in patients with diabetic retinopathy treated with insulin. Patients with a history of diabetic retinopathy should be monitored for worsening and treated according to clinical guidelines. </p>

                                                    <p className={styles.headWithno}> Heart Failure </p>
                                                    <p className={styles.headWithPara}>  There is no therapeutic experience in patients with congestive heart failure therefore, use of Semaglutide is not recommended in these patients. </p>

                                                    <p className={styles.headWithno}> Use in hepatic impairment </p>
                                                    <p className={styles.headWithPara}>  Experience with the use of Semaglutide in patients with severe hepatic impairment is limited. Caution should be exercised when treating these patients with Semaglutide. </p>

                                                    <p className={styles.headWithno}> Use in renal impairment </p>
                                                    <p className={styles.headWithPara}>  Experience with the use of Semaglutide in patients with severe (CrCL30 mL/min) renal impairment is limited. Semaglutide is not recommended for use in patients with end-stage renal disease. </p>

                                                    <p className={styles.headWithno}> Effects on ability to drive and use machines </p>
                                                    <p className={styles.headWithPara}>  Semaglutide has no or negligible influence on the ability to drive or use machines. When it is used in combination with a sulfonylurea or insulin, patients should be advised to take precautions to avoid hypoglycemia while driving and using machines. </p>

                                                    <h5> Pregnancy </h5>
                                                    <p> Semaglutide should not be used during pregnancy. Women of childbearing potential are recommended to use contraception when treated with Semaglutide. If a patient wishes to become pregnant, or pregnancy occurs, Semaglutide should be discontinued. Semaglutide should be discontinued at least 2 months before a planned pregnancy due to the long half-life.  </p>

                                                    <h5> Nursing Mothers </h5>
                                                    <p> Semaglutide was excreted in milk. As a risk to a breast-fed child cannot be excluded, Semaglutide should not be used during breast-feeding. </p>

                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="9">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> DRUG INTERACTIONS </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p className={styles.headWithno}> Concomitant Use with an Insulin Secretagogue (e.g., Sulfonylurea) or with Insulin </p>
                                                    <p className={styles.headWithPara}>  Semaglutide stimulates insulin release in the presence of elevated blood glucose concentrations. Patients receiving Semaglutide in combination with an insulin secretagogue (e.g., sulfonylurea) or insulin may have an increased risk of hypoglycemia, including severe hypoglycemia. When initiating Semaglutide, consider reducing the dose of concomitantly administered insulin secretagogue (such as sulfonylureas) or insulin to reduce the risk of hypoglycemia. </p>

                                                    <p className={styles.headWithno}> Oral Medications</p>
                                                    <p className={styles.headWithPara}>  Semaglutide delays gastric emptying and has the potential to impact the rate of absorption of concomitantly administered oral medicinal products. Semaglutide should be used with caution in patients receiving oral medicinal products that require rapid gastrointestinal absorption. </p>

                                                    <p className={styles.headWithno}> Warfarin and other coumarin derivatives </p>
                                                    <p className={styles.headWithPara}>  Cases of decreased INR have been reported during concomitant use of acenocoumarol and Semaglutide. Upon initiation of Semaglutide treatment in patients on warfarin or other coumarin derivatives, frequent monitoring of INR is recommended. </p>

                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="10">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> OVERDOSAGE </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    Overdoses of up to 4mg in a single dose, and up to 4mg in a week have been reported in clinical trials. The most commonly reported adverse reaction was nausea. All patients recovered without complications. There is no specific antidote for overdose with Semaglutide. In the event of overdose, appropriate supportive treatment should be initiated according to the patient’s clinical signs and symptoms. A prolonged period of observation and treatment for these symptoms may be necessary, taking into account the long half-life of Semaglutide of approximately 1 week.
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="11">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> STORAGE </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p>Store in refrigerator at 2°C-8°C. Keep the pen cap on when not in use. Protect from excessive heat and sunlight. Do not freeze. After first use of the Sem-P Pen, the pen can be used upto 06 weeks when stored below 30°C or in refrigerator at 2°C-8°C. </p>
                                                    <p> The expiration date refers to the product correctly stored at the required conditions. </p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="12">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> HOW SUPPLIED </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p>  Sem-P (Semaglutide) Solution for Injection in Prefilled Pen 2mg/1.5mL is available in pack of 1’s. </p>
                                                    <p>  Sem-P (Semaglutide) Solution for Injection in Prefilled Pen 4mg/3mL is available in pack of 1’s. </p>
                                                    <h5> Keep out of reach of children. To be sold on prescription of a registered medical practitioner only.  </h5>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="13">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> INSTRUCTION MANUAL </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p className={styles.headWithno}> Wash your hand with soap and water. </p>
                                                    <p className={styles.headWithPara}> Check the name and label of your pen, to make sure that it contains required strength of Sem-P. </p>

                                                    <h6> STEP 1: Checking the Sem-P Pen </h6>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={stepImgOne} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> Pull off the pen cap. </p>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={stepImgTwo} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> Check that Sem-P injection in your pen is clear and colorless. If Sem-P injection looks cloudy or contains particles, do not use the pen. </p>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={stepImgThree} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> Take a new needle, and tear o the paper tab. Keep the needle straight and screw it onto the pen until fix. Do not over tightened. </p>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={stepImgFour} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> Pull off the needle cap and keep it for later use. </p>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={stepImgFive} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> Make sure that there is no any air bubble into the Sem-P injection. </p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <h6> STEP 2: Select your Dose </h6>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={step2ImgOne} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> Select the dose you need to inject by turning the dose selector until your required dose (0.25mg or 0.5mg or 1mg) lines up with the dose pointer. </p>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={step2ImgTwo} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> If you select a diff erent dose than you need, simply turn back the dose selector until the correct dose lines up with the dose pointer. Only doses of 0.25mg & 0.5mg can be selected with the dose selector for the Sem-P 2mg/1.5mL pen & 1mg can be selected for 4mg/3mL pen. </p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <h6> STEP 3: Making your Injection </h6>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={step3ImgOne} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> Choose your injection site. Sem-P Solution for Injection can be injected under the skin (subcutaneously) of your stomach area (abdomen) or thighs, and with the help of someone else, in the back of the upper arm. </p>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={step3ImgTwo} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> To inject, press the injection button completely in needle under the skin for at least 10 seconds. is delivered. Withdraw the needle. Sem-P dose has been delivered </p>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={step3ImgThree} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> in, until you hear or feel a click. Leave the This ensures that the selected Sem-P dose   completed your injection and the selected  The dose selector display will show ‘0’.</p>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={step3ImgFour} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> After you have withdrawn the needle, a few droplets of Sem-P injection may appear at the needle tip. This is normal and has no e ffect on the dose delivered. </p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <h6> STEP 4: Replacing used Needle Immediately after the injection </h6>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={step4ImgOne} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> Carefully replace the needle cap onto the needle. </p>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={step4ImgTwo} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> Hold the Pen holder and unscrew the needle. Dispose o  the needle properly as instructed by your healthcare professional. </p>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={step4ImgThree} alt="" />
                                                                </div>
                                                                <p className={styles.imageCaption}> Always firmly replace the pen cap after use. </p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                        <h5 className={styles.impoText}> Important Instructions for Use </h5>
                                        <ul>
                                            <li>Change (rotate) your injection site within the area you choose for each dose to reduce your risk of getting lipodystrophy (pits in skin or thickened skin) and localized cutaneous amyloidosis (skin with lumps) at the injection sites.  </li>
                                            <li> Do not inject where the skin has pits, is thickened, or has lumps. </li>
                                            <li> Do not inject where the skin is tender, bruised, scaly or hard, or into scars or damaged skin. </li>
                                            <li> If you see blood after you take the needle out of your skin, press the injection site lightly. Do not rub the area. </li>
                                            <li> Do not share and reuse your needle or your Sem-P pen with other people. Never use a bent or damaged needle. </li>
                                            <li> After first use of Sem-P Pen, the pen can be used upto 06 weeks when stored below 30°C or in refrigerator at 2°C-8°C. </li>
                                            <li> Do not freeze (if frozen, do not use the pen). </li>
                                            <li> Discard any unused solution after 06 weeks from the initial use. </li>
                                        </ul>
                                    </div>
                                </Tab>
                                <Tab
                                    eventKey="sempVial"
                                    title="SEM-P Vial"
                                >
                                    <div className={`${styles.wraperSingleContent} wraperSingleContent`}>
                                        <Accordion defaultActiveKey="0" className={` ${styles.accordianCustom} accordianCustomFaq`}>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}>DESCRIPTION</p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    Sem-P (Semaglutide) Injection, for subcutaneous use, contains Semaglutide, a human GLP-1 receptor agonist (or GLP-1 analog). The main protraction mechanism of Semaglutide is albumin binding, facilitated by modification of position 26 lysine with a hydrophilic spacer and a C18 fatty di-acid. Furthermore, Semaglutide is modified in position 8 to provide stabilization against degradation by the enzyme dipeptidyl-peptidase 4 (DPP-4). A minor modification was made in position 34 to ensure the attachment of only one fatty di-acid. Its molecular formula is C187H291N45O59.
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> QUALITATIVE AND QUANTITATIVE COMPOSITION</p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p> Sem-P (Semaglutide) Solution for Injection is available for subcutaneous administration as: </p>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <h4> Sem-P (Semaglutide) Solution 
for Injection 2mg/1.5mL </h4>
                                                            <p> Each 1.5mL vial contains: 
Semaglutide… 2mg </p>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <h4> Sem-P (Semaglutide) Solution
                                                                for Injection 4mg/3mL </h4>
                                                            <p> Each 3mL vial contains: 
Semaglutide… 4mg </p>
                                                        </Col>
                                                    </Row>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> CLINICAL PHARMACOLOGY</p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h5> Mechanism of Action </h5>
                                                            <p> Semaglutide is a GLP-1 analogue with 94% sequence homology to human GLP-1. Semaglutide acts as a GLP-1 receptor agonist that selectively binds to and activates the GLP-1 receptor, the target for native GLP-1. GLP-1 is a physiological hormone that has multiple actions on glucose, mediated by the GLP-1 receptors. The principal mechanism of protraction resulting in the long half-life of Semaglutide is albumin binding, which results in decreased renal clearance and protection from metabolic degradation. Furthermore, Semaglutide is stabilized against degradation by the DPP-4 enzyme. Semaglutide reduces blood glucose through a mechanism where it stimulates insulin secretion and lowers glucagon secretion, both in a glucose-dependent manner. Thus, when blood glucose is high, insulin secretion is stimulated and glucagon secretion is inhibited. The mechanism of blood glucose lowering also involves a minor delay in gastric emptying in the early postprandial phase. </p>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h6> Pharmacokinetics </h6>
                                                            <h5> Absorption </h5>
                                                            <p> Absolute bioavailability of Semaglutide is 89%. Maximum concentration of Semaglutide is reached 1 to 3 days post dose. Similar exposure is achieved with subcutaneous administration of Semaglutide in the abdomen, thigh, or upper arm. In patients with type 2 diabetes, Semaglutide exposure increases in a dose-proportional manner for once-weekly doses of 0.5mg and 1mg. Steady-state exposure is achieved following 4-5 weeks of once-weekly administration. In patients with type 2 diabetes, the mean population-PK estimated steady-state concentrations following once weekly subcutaneous administration of 0.5mg and 1mg Semaglutide were approximately 65.0ng/mL and 123.0ng/mL, respectively. </p>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h5> Distribution </h5>
                                                            <p>
                                                                The mean apparent volume of distribution of Semaglutide following subcutaneous administration in patients with type 2 diabetes is approximately 12.5L. Semaglutide is extensively bound to plasma albumin (&gt;99%).
                                                            </p>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h5> Metabolism </h5>
                                                            <p> The primary route of elimination for Semaglutide is metabolism following proteolytic cleavage of the peptide backbone and sequential beta-oxidation of the fatty acid sidechain. </p>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h5> Elimination </h5>
                                                            <p> The apparent clearance of Semaglutide in patients with type 2 diabetes is approximately 0.05L/h. With an elimination half-life of approximately 1 week, Semaglutide will be present in the circulation for about 5 weeks after the last dose. The primary excretion routes of Semaglutide-related material is via the urine and feces. Approximately 3% of the dose is excreted in the urine as intact Semaglutide. </p>
                                                        </Row>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Row>
                                                            <h5> Special Population </h5>
                                                            <p> The exposure of Semaglutide decreases with an increase in body weight. However, Semaglutide doses of 0.5mg and 1mg provide adequate systemic exposure over the body weight range of 40-198kg. </p>
                                                        </Row>
                                                    </Col>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> THERAPEUTIC INDICATIONS </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p> Sem-P (Semaglutide) is indicated: </p>
                                                    <ul>
                                                        <li> As an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus. </li>
                                                        <li> To reduce the risk of major adverse cardiovascular events (cardiovascular death, non-fatal myocardial infarction or non-fatal stroke) in adults with type 2 diabetes mellitus and established cardiovascular disease. </li>
                                                        <li> As monotherapy when metformin is considered inappropriate due to intolerance or contraindications. </li>
                                                        <li> In addition to other medicinal products for the treatment of diabetes.  </li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> DOSAGE AND ADMINISTRATION </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <h4> Recommended Dosage </h4>
                                                    <ul>
                                                        <li> Each mL contains 1.34mg of Semaglutide. </li>
                                                        <li> Initiate Sem-P (Semaglutide) with a dosage of 0.25mg injected subcutaneously once weekly for 4 weeks. The 0.25mg dosage is intended for treatment initiation and is not effective for glycemic control. </li>
                                                        <li> After 4 weeks on the 0.25mg dosage, increase the dosage to 0.5mg once weekly. </li>
                                                        <li> If additional glycemic control is needed after at least 4 weeks on the 0.5mg dosage, the dosage may be increased to 1mg once weekly.  </li>
                                                        <li> If additional glycemic control is needed after at least 4 weeks on the 1mg dosage, the dosage may be increased to 2mg once weekly. The maximum recommended dosage is 2mg once weekly. </li>
                                                        <li> The day of weekly administration can be changed if necessary as long as the time between two doses is at least 2 days (48 hours). </li>
                                                        <li> If a dose is missed, administer Sem-P (Semaglutide) as soon as possible within 5 days after the missed dose. If more than 5 days have passed, skip the missed dose and administer the next dose on the regularly scheduled day. In each case, patients can then resume their regular once weekly dosing schedule. </li>

                                                    </ul>
                                                    <h5> Sem-P (Semaglutide) Solution for Injection should be administered by using Sem-P Disposable Syringe that has specific markings both in mg and mL for dosing convenience
                                                        and accuracy. </h5>
                                                    <div className={styles.table_Wraper}>
                                                        <table bordered responsive>
                                                            <thead>
                                                                <tr>
                                                                    <th> Instructions </th>
                                                                    <th> Dose in mg</th>
                                                                    <th> Dose in mL</th>
                                                                    <th> Dose Frequency </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td> Start </td>
                                                                    <td> Increase the dose & continue </td>
                                                                    <td> Increase the dose if needed & continue </td>
                                                                    <td> Increase the dose if needed & continue </td>
                                                                </tr>
                                                                <tr>
                                                                    <td> 0.25mg </td>
                                                                    <td> 0.5mg </td>
                                                                    <td> 1.0mg </td>
                                                                    <td> 2.0mg </td>
                                                                </tr>
                                                                <tr>
                                                                    <td> 0.188mL </td>
                                                                    <td>0.375mL </td>
                                                                    <td> 0.75mL</td>
                                                                    <td> 1.5mL </td>

                                                                </tr>
                                                                <tr>
                                                                    <td> Once weekly for at least 4 weeks </td>
                                                                    <td> Once weekly for at 
least 4 weeks </td>

                                                                    <td> Once weekly for at 
least 4 weeks </td>
                                                                    <td> Once a week </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <h5> Important Administration Instructions </h5>
                                                    <ul>
                                                        <li> Inspect Sem-P (Semaglutide) visually before use. It should appear clear and colorless. Do not use Sem-P (Semaglutide) if particulate matter and coloration is seen. </li>
                                                        <li> Administer Sem-P (Semaglutide) once weekly, on the same day each week, at any time of the day, with or without meals. </li>
                                                        <li> Inject Sem-P (Semaglutide) subcutaneously to the abdomen, thigh, or upper arm. Instruct patients to use a different injection site each week when injecting in the same body region. </li>
                                                        <li> When using Sem-P (Semaglutide) with insulin, instruct patients to administer as separate injections and to never mix the products. It is acceptable to inject Sem-P (Semaglutide) and insulin in the same body region, but the injections should not be adjacent to each other.  </li>
                                                        <li> When Semaglutide is added to existing metformin and/or thiazolidinedione therapy or to a sodium-glucose cotransporter 2 (SGLT2) inhibitor, the current dose of metformin and/or thiazolidinedione or SGLT2 inhibitor can be continued unchanged. </li>
                                                        <li> When Semaglutide is added to existing therapy of sulfonylurea or insulin, a reduction in the dose of sulfonylurea or insulin should be considered to reduce the risk of hypoglycemia. </li>
                                                        <li> Self-monitoring of blood glucose is not needed in order to adjust the dose of Semaglutide. Blood glucose self-monitoring is necessary to adjust the dose of sulfonylurea and insulin, particularly when Semaglutide is started and insulin is reduced. A stepwise approach to insulin reduction is recommended. </li>
                                                    </ul>

                                                    <h5> Special Population </h5>

                                                    <p className={styles.headWithno}> Patients with hepatic or renal impairment </p>
                                                    <p className={styles.headWithPara}>  No dose adjustment is required for patients with hepatic or renal impairment.</p>

                                                    <p className={styles.headWithno}> Pediatric population </p>
                                                    <p className={styles.headWithPara}>  Safety and efficacy of Sem-P (Semaglutide) have not been established in pediatric patients (younger than 18 years). </p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="6">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> ADVERSE REACTIONS </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p className={styles.headWithno}> Very Common </p>
                                                    <p className={styles.headWithPara}>  Hypoglycemia when used with insulin or sulfonylurea, nausea and diarrhea. </p>

                                                    <p className={styles.headWithno}> Common </p>
                                                    <p className={styles.headWithPara}>  Hypoglycemia when used with other oral antidiabetics (OAD), decreased appetite, dizziness, diabetic retinopathy complications, vomiting, abdominal pain, abdominal distension, constipation, dyspepsia, gastritis, gastroesophageal reflux disease, eructation, flatulence, cholelithiasis, fatigue, increased lipase, increased amylase and weight decreased. </p>

                                                    <p className={styles.headWithno}> Uncommon </p>
                                                    <p className={styles.headWithPara}>  Hypersensitivity, dysgeusia, increased heart rate, acute pancreatitis, delayed gastric emptying and injection site reactions. </p>

                                                    <p className={styles.headWithno}> Rare </p>
                                                    <p className={styles.headWithPara}>  Anaphylactic reaction, intestinal obstruction and angioedema. </p>

                                                    <h6> “To report SUSPECTED ADVERSE REACTIONS to Getz Pharma’s Pharmacovigilance Section, please contact at dsafety@getzpharma.com or +92-21-38636363” </h6>


                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="7">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> CONTRAINDICATIONS </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p> Semaglutide is contraindicated in patients with: </p>
                                                    <ul>
                                                        <li> Hypersensitivity to active substance and to any of the excipient of the product. </li>
                                                        <li> A personal or family history of medullary thyroid carcinoma (MTC) or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="8">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> PRECAUTIONS </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <h4> WARNING: RISK OF THYROID C-CELL TUMORS </h4>
                                                    <ul>
                                                        <li> In rodents, Semaglutide causes dose-dependent and treatment-duration-dependent thyroid C-cell tumors at clinically relevant exposures. It is unknown whether Semaglutide causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans as human relevance of Semaglutide-induced rodent thyroid C-cell tumors has not been determined. </li>
                                                        <li> Semaglutide is contraindicated in patients with a personal or family history of MTC or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Counsel patients regarding the potential risk for MTC with the use of Semaglutide and inform them of symptoms of thyroid tumors (e.g. a mass in the neck, dysphagia, dyspnea, persistent hoarseness). Routine monitoring of serum calcitonin or using thyroid ultrasound is of uncertain value for early detection of MTC in patients treated with Semaglutide. </li>
                                                    </ul>
                                                    <p className={styles.headWithno}> General </p>
                                                    <p className={styles.headWithPara}>  Semaglutide should not be used in patients with type 1 diabetes mellitus or for the treatment of diabetic ketoacidosis. Semaglutide is not a substitute for insulin. Diabetic ketoacidosis has been reported in insulin-dependent patients whom had rapid discontinuation or dose reduction of insulin when treatment with a GLP-1 receptor agonist is started. </p>

                                                    <p className={styles.headWithno}> Risk of Thyroid C-Cell Tumors </p>
                                                    <p className={styles.headWithPara}>  Semaglutide is contraindicated in patients with a personal or family history of MTC or in patients with MEN 2. Counsel patients regarding the potential risk for MTC with the use of Semaglutide and inform them of symptoms of thyroid tumors (e.g. a mass in the neck, dysphagia, dyspnea, persistent hoarseness). If serum calcitonin is measured and found to be elevated, the patient should be further evaluated. Patients with thyroid nodules noted on physical examination or neck imaging should also be further evaluated. </p>

                                                    <p className={styles.headWithno}> Pancreatitis </p>
                                                    <p className={styles.headWithPara}>  After initiation of Semaglutide, observe patients carefully for signs and symptoms of pancreatitis (including persistent severe abdominal pain, sometimes radiating to the back and which may or may not be accompanied by vomiting). If pancreatitis is suspected, Semaglutide should be discontinued and appropriate management initiated; if confirmed, Semaglutide should not be restarted </p>

                                                    <p className={styles.headWithno}> Hypoglycemia with Concomitant Use of Insulin Secretagogues or Insulin </p>
                                                    <p className={styles.headWithPara}>  Patients receiving Semaglutide in combination with an insulin secretagogue (e.g., sulfonylurea) or insulin may have an increased risk of hypoglycemia, including severe hypoglycemia. The risk of hypoglycemia is increased when Semaglutide is used in combination with insulin secretagogues (e.g., sulfonylureas) or insulin. Patients may require a lower dose of the secretagogue or insulin to reduce the risk of hypoglycemia. </p>

                                                    <p className={styles.headWithno}> Acute Kidney Injury </p>
                                                    <p className={styles.headWithPara}>  There have been postmarketing reports of acute kidney injury and worsening of chronic renal failure, which may sometimes require hemodialysis, in patients treated with GLP-1 receptor agonists. A majority of the reported events occurred in patients who had experienced nausea, vomiting, diarrhea, or dehydration. Monitor renal function when initiating or escalating doses of Semaglutide in patients reporting severe adverse gastrointestinal reactions. </p>

                                                    <p className={styles.headWithno}> Hypersensitivity </p>
                                                    <p className={styles.headWithPara}>  Serious hypersensitivity reactions (e.g., anaphylaxis, angioedema) have been reported with GLP-1 receptor agonists. If hypersensitivity reactions occur, discontinue use of Semaglutide; treat promptly per standard of care, and monitor until signs and symptoms resolve. Do not use in patients with a previous hypersensitivity to Semaglutide. Anaphylaxis and angioedema have been reported with other GLP-1 receptor agonists. Use caution in a patient with a history of angioedema or anaphylaxis with another GLP-1 receptor agonist because it is unknown whether such patients will be predisposed to anaphylaxis with Semaglutide. </p>

                                                    <p className={styles.headWithno}> Acute Gallbladder Disease </p>
                                                    <p className={styles.headWithPara}>  Acute events of gallbladder disease such as cholelithiasis or cholecystitis have been reported. If cholelithiasis is suspected, gallbladder studies and appropriate clinical follow-up are indicated. </p>

                                                    <p className={styles.headWithno}> Aspiration in association with general anesthesia or deep sedation </p>
                                                    <p className={styles.headWithPara}>  Cases of pulmonary aspiration have been reported in patients receiving GLP-1 receptor agonists undergoing general anesthesia or deep sedation. Therefore, the increased risk of residual gastric content due to delayed gastric emptying should be considered prior to performing procedures with general anesthesia or deep sedation.  </p>

                                                    <p className={styles.headWithno}> Gastrointestinal effects </p>
                                                    <p className={styles.headWithPara}>  Use of GLP-1 receptor agonists may be associated with gastrointestinal adverse reactions. This should be considered when treating patients, with impaired renal function as nausea, vomiting, and diarrhea may cause dehydration which could cause a deterioration of renal function. </p>

                                                    <p className={styles.headWithno}> Diabetic Retinopathy </p>
                                                    <p className={styles.headWithPara}>  In patients with diabetic retinopathy treated with insulin and Semaglutide, an increased risk of developing diabetic retinopathy complications has been observed. Caution should be exercised when using Semaglutide in patients with diabetic retinopathy treated with insulin. Patients with a history of diabetic retinopathy should be monitored for worsening and treated according to clinical guidelines. </p>

                                                    <p className={styles.headWithno}> Heart Failure </p>
                                                    <p className={styles.headWithPara}>  There is no therapeutic experience in patients with congestive heart failure therefore, use of Semaglutide is not recommended in these patients. </p>

                                                    <p className={styles.headWithno}> Use in hepatic impairment </p>
                                                    <p className={styles.headWithPara}>  Experience with the use of Semaglutide in patients with severe hepatic impairment is limited. Caution should be exercised when treating these patients with Semaglutide. </p>

                                                    <p className={styles.headWithno}> Use in renal impairment </p>
                                                    <p className={styles.headWithPara}>  Experience with the use of Semaglutide in patients with severe (CrCL30 mL/min) renal impairment is limited. Semaglutide is not recommended for use in patients with end-stage renal disease. </p>

                                                    <p className={styles.headWithno}> Effects on ability to drive and use machines </p>
                                                    <p className={styles.headWithPara}>  Semaglutide has no or negligible influence on the ability to drive or use machines. When it is used in combination with a sulfonylurea or insulin, patients should be advised to take precautions to avoid hypoglycemia while driving and using machines. </p>

                                                    <h5> Pregnancy </h5>
                                                    <p> Semaglutide should not be used during pregnancy. Women of childbearing potential are recommended to use contraception when treated with Semaglutide. If a patient wishes to become pregnant, or pregnancy occurs, Semaglutide should be discontinued. Semaglutide should be discontinued at least 2 months before a planned pregnancy due to the long half-life.  </p>

                                                    <h5> Nursing Mothers </h5>
                                                    <p> Semaglutide was excreted in milk. As a risk to a breast-fed child cannot be excluded, Semaglutide should not be used during breast-feeding. </p>

                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="9">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> DRUG INTERACTIONS </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p className={styles.headWithno}> Concomitant Use with an Insulin Secretagogue (e.g., Sulfonylurea) or with Insulin </p>
                                                    <p className={styles.headWithPara}>  Semaglutide stimulates insulin release in the presence of elevated blood glucose concentrations. Patients receiving Semaglutide in combination with an insulin secretagogue (e.g., sulfonylurea) or insulin may have an increased risk of hypoglycemia, including severe hypoglycemia. When initiating Semaglutide, consider reducing the dose of concomitantly administered insulin secretagogue (such as sulfonylureas) or insulin to reduce the risk of hypoglycemia. </p>

                                                    <p className={styles.headWithno}> Oral Medications</p>
                                                    <p className={styles.headWithPara}>  Semaglutide delays gastric emptying and has the potential to impact the rate of absorption of concomitantly administered oral medicinal products. Semaglutide should be used with caution in patients receiving oral medicinal products that require rapid gastrointestinal absorption. </p>

                                                    <p className={styles.headWithno}> Warfarin and other coumarin derivatives </p>
                                                    <p className={styles.headWithPara}>  Cases of decreased INR have been reported during concomitant use of acenocoumarol and Semaglutide. Upon initiation of Semaglutide treatment in patients on warfarin or other coumarin derivatives, frequent monitoring of INR is recommended. </p>

                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="10">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> OVERDOSAGE </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    Overdoses of up to 4mg in a single dose, and up to 4mg in a week have been reported in clinical trials. The most commonly reported adverse reaction was nausea. All patients recovered without complications. There is no specific antidote for overdose with Semaglutide. In the event of overdose, appropriate supportive treatment should be initiated according to the patient’s clinical signs and symptoms. A prolonged period of observation and treatment for these symptoms may be necessary, taking into account the long half-life of Semaglutide of approximately 1 week.
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="11">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> STORAGE </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p>Store in refrigerator at 2°C-8°C. Keep the pen cap on when not in use. Protect from excessive heat and sunlight. Do not freeze. After first use of the Sem-P Pen, the pen can be used upto 06 weeks when stored below 30°C or in refrigerator at 2°C-8°C. </p>
                                                    <p> The expiration date refers to the product correctly stored at the required conditions. </p>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="12">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> HOW SUPPLIED </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p>  Sem-P (Semaglutide) Solution for Injection 2mg/1.5mL is available in pack of 1’s.  </p>
                                                    <p>  Sem-P (Semaglutide) Solution for Injection 4mg/3mL is available in pack of 1’s. </p>
                                                    <h5> Keep out of reach of children. To be sold on prescription of a registered medical practitioner only.  </h5>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="13">
                                                <Accordion.Header className={styles.accordianCustomHeader}>
                                                    <p className={styles.accordionTitle}> INSTRUCTION MANUAL </p>
                                                </Accordion.Header>
                                                <Accordion.Body className={styles.accordianCustomBody}>
                                                    <p className={styles.headWithno}> Wash your hand with soap and water. </p>
                                                    <p className={styles.headWithPara}> Check the name and label of your pen, to make sure that it contains required strength of Sem-P. </p>

                                                    <Col lg={12}>
                                                        <Row>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial1} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 1  </h5>
                                                                    <p> Pull off the vial’s plastic protective cap. Do not remove the rubber stopper. </p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial2} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 2  </h5>
                                                                    <p> Take Sem-P Disposable
                                                                        Syringe. Remove the
                                                                        outer wrapping of the Syringe. </p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial3} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 3  </h5>
                                                                    <p> Remove the Sem-P Disposable Syringe shield by pulling it off. </p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial4} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 4  </h5>
                                                                    <p> Hold the Sem-P Disposable Syringe in one hand with the
                                                                        needle pointing up.
                                                                        With the other hand pull down the plunger until the plunger tip reaches the line on the Sem-P
Disposable Syringe indicating air volume is equivalent to the prescribed dose. </p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial5} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 5  </h5>
                                                                    <p> Put the needle through the rubber stopper on top of the Sem-P vial. Inject all the air into the Sem-P vial. </p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial6} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 6  </h5>
                                                                    <p> Turn the Sem-P vial upside down. Make sure that the tip of the needle is in the liquid. Slowly pull the plunger down to
withdraw prescribed dose of Sem-P Solution for Injection from the vial. </p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial7} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 7  </h5>
                                                                    <p> If there are air bubbles in the Sem-P Disposable Syringe, tap the syringe gently a few times to let any air bubbles rise to the
top. Slowly push the plunger up until there is no more air in the syringe.. </p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial8} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 8  </h5>
                                                                    <p> Once you have prescribed
dose of Sem-P Solution for Injection in the syringe with no air bubbles, pull the syringe out of the rubber stopper of the vial </p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial9} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 9  </h5>
                                                                    <p> Choose your injection site.
                                                                        Sem-P Solution for Injection can be injected under the skin (subcutaneously) of your
stomach area (abdomen) or thighs, and with the help of someone else, in the back of the upper arm. </p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial10} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 10  </h5>
                                                                    <p> Gently pinch your skin and
                                                                        inject the needle into the
skin fold at 90 degree angle. </p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial11} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 11  </h5>
                                                                    <p> Inject all the Sem-P
                                                                        Solution for Injection
                                                                        from the syringe to
                                                                        receive a full dose. After
                                                                        your injection, the needle
                                                                        should stay under your
skin for 5 seconds to make sure you receive the full dose. </p>
                                                                </div>
                                                            </Col>
                                                            <Col lg={3}>
                                                                <div className={styles.image_wrapee}>
                                                                    <Image src={sempVial12} alt="" />
                                                                </div>
                                                                <div className={`${styles.imageCaptionSeco} imageCaptionSeco`}>
                                                                    <h5> Step 12  </h5>
                                                                    <p>
                                                                        Pull the needle out of
your skin. </p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                        <h5 className={styles.impoText}> Important Instructions for Use </h5>
                                        <ul>
                                            <li>Change (rotate) your injection site within the area you choose for each dose to reduce your risk of getting lipodystrophy (pits in skin or thickened skin) and localized cutaneous amyloidosis (skin with lumps) at the injection sites.  </li>
                                            <li> Do not inject where the skin has pits, is thickened, or has lumps. </li>
                                            <li> Do not inject where the skin is tender, bruised, scaly or hard, or into scars or damaged skin. </li>
                                            <li> If you see blood after you take the needle out of your skin, press the injection site lightly. Do not rub the area. </li>
                                            <li> Do not share and reuse your needle or your Sem-P pen with other people. Never use a bent or damaged needle. </li>
                                            <li> After first use of Sem-P Pen, the pen can be used upto 06 weeks when stored below 30°C or in refrigerator at 2°C-8°C. </li>
                                            <li> Do not freeze (if frozen, do not use the pen). </li>
                                            <li> Discard any unused solution after 06 weeks from the initial use. </li>
                                        </ul>
                                    </div>
                                </Tab>
                            </Tabs>
                        </Row>
                    </Col>
                </Container>
            </section>
            {/* <Footer /> */}
        </>
    );
}

export default FaqsPage;
