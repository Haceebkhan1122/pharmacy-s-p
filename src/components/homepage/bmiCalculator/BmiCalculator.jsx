"use client";

import React, { useState, useRef } from 'react';
import styles from "./bmiCalculator.module.scss";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { Col, Container, Form, Row } from 'react-bootstrap';
import Link from 'next/link';
import parse from "html-react-parser"

function BmiCalculator({ widgetData }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [errors, setErrors] = useState({});
  const [bmi, setBmi] = useState(0);
  const [chartSeries, setChartSeries] = useState([0]);
  const [bmiText, setBmiText] = useState('Check your BMI');
  const [bmiHead, setBmiHead] = useState('Enter your height and weight to see your Body Mass Index (BMI)');
  const resultRef = useRef(null);
  const isMobile = () => (typeof window !== 'undefined' && window.innerWidth <= 767);
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInch, setHeightInch] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!heightFeet) newErrors.heightFeet = "Please enter feet.";
    if (!heightInch) newErrors.heightInch = "Please enter inches.";
    if (!weight) newErrors.weight = "Please enter your weight.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const totalInches = Number(heightFeet) * 12 + Number(heightInch);
    const heightInMeters = totalInches * 0.0254;

    const bmiValue = Number(weight) / (heightInMeters * heightInMeters);
    const roundedBMI = parseFloat(bmiValue.toFixed(1));

    setBmi(roundedBMI);
    const displayedBMI = roundedBMI >= 40
      ? 100
      : (roundedBMI / 40) * 100;

    setChartSeries([displayedBMI]);

    if (roundedBMI < 18.5) {
      setBmiText(`Underweight`);
      setBmiHead(`Your BMI is in the category for Below health weight, also called Underweight.`);
    }
    else if (roundedBMI >= 18.5 && roundedBMI <= 22.9) {
      setBmiText(`Normal weight`);
      setBmiHead(`Your BMI is in the category for Healthy weight range, also called Normal weight.`);
    }
    else if (roundedBMI >= 23 && roundedBMI <= 24.9) {
      setBmiText(`Overweight`);
      setBmiHead(`Your BMI is in the category for Above health weight, also called Overweight.`);
    }
    else if (roundedBMI >= 25 && roundedBMI <= 29.9) {
      setBmiText(`Obesity (Class I)`);
      setBmiHead(`Your BMI is in the category for Moderate obesity, also called Obesity (Class I).`);
    }
    else if (roundedBMI >= 30) {
      setBmiText(`Obesity (Class II)`);
      setBmiHead(`Your BMI is in the category for Severe obesity, also called Obesity (Class II).`);
    }
    else if (roundedBMI >= 40) {
      setBmiText(`Obesity (Class III)`);
      setBmiHead(`Your BMI is in the category for Morbib Obesity, also called Obesity (Class III).`);
    }

    if (isMobile()) {
      try { document.activeElement?.blur(); } catch (e) { }
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    }
  };

  const chartOptions = {
    chart: {
      type: "radialBar",
      offsetY: 10,
      width: 410,
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 340,
            width: 340,
            offsetX: -20,
            offsetY: -30,
          },
        },
      },
      {
        breakpoint: 825,
        options: {
          chart: {
            height: 330,
            width: 330,
            offsetX: -15,
            offsetY: 10,
          },
        },
      },
      {
        breakpoint: 435,
        options: {
          chart: {
            height: 370,
            width: 370,
            offsetX: -10,
            offsetY: -10,
          },
        },
      },
      {
        breakpoint: 415,
        options: {
          chart: {
            height: 370,
            width: 370,
            offsetX: -15,
            offsetY: -10,
          },
        },
      },
      {
        breakpoint: 395,
        options: {
          chart: {
            height: 350,
            width: 350,
            offsetX: -20,
            offsetY: 0,
          },
        },
      },
      {
        breakpoint: 380,
        options: {
          chart: {
            height: 320,
            width: 320,
            offsetX: -13,
            offsetY: 0,
          },
        },
      },
      {
        breakpoint: 370,
        options: {
          chart: {
            height: 300,
            width: 300,
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
      {
        breakpoint: 330,
        options: {
          chart: {
            height: 300,
            width: 300,
            offsetX: -30,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#E2F0D9",
          strokeWidth: '100%',
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: -2,
            fontSize: '0',
            show: false,
          }
        },
        hollow: {
          size: '70%',
        }
      }
    },
    stroke: {
      lineCap: 'round',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#78a941'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: '#78a941',
            opacity: 1
          },
          {
            offset: 100,
            color: '#78a941',
            opacity: 1
          }
        ]
      }
    },
    yaxis: {
      min: 0,
      max: 90
    },
  };

  return (
    <>
      {/* BMI Calculator Section */}
      <div className={`${styles.bmiCalculator}`}>
        <Container>
          <Row>
            {/* Form */}
            <Col sm={6} className='form-padd'>
              <div className={styles.head_bmi}><p>{widgetData?.heading}</p></div>
              <p>{parse(widgetData?.description)}</p>
              <Form onSubmit={handleCalculate}>
                <Col lg={12}>
                  <Row>
                    <Col lg={6} xs={6}>
                      <Form.Group className='mb-4 position-relative'>
                        <Form.Label>Height (Feet)*</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter feet"
                          value={heightFeet}
                          onChange={(e) => setHeightFeet(e.target.value)}
                        />
                        {errors.heightFeet && <div className={styles.error}>{errors.heightFeet}</div>}
                      </Form.Group>
                    </Col>
                    <Col lg={6} xs={6}>
                      <Form.Group className='mb-4 position-relative'>
                        <Form.Label>Height (inches)*</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter inches"
                          value={heightInch}
                          onChange={(e) => setHeightInch(e.target.value)}
                        />
                        {errors.heightInch && <div className={styles.error}>{errors.heightInch}</div>}
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>

                <Form.Group className='position-relative'>
                  <Form.Label>Weight (kg)*</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter your weight'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  {errors.weight && <div className={`${styles.error}`}>{errors.weight}</div>}
                </Form.Group>
                <div className={`${styles.buttonSubmit}`}><button type="submit">Calculate BMI</button></div>
              </Form>
            </Col>

            {/* Chart */}
            <Col sm={6}>
              <div className={`${styles.bmiProgress}`} ref={resultRef}>
                <div className={`${styles.boxBMI}`}>
                  <div className={` position-relative`}>
                    <div id="chart" style={{
                      // width: '410px',
                      // height: '360px', 
                      // minHeight: '350px',
                    }} className={`${styles.chartBmi}`} >
                      <ReactApexChart
                        options={chartOptions}
                        series={chartSeries}
                        type="radialBar"
                        height={700}
                        width={410}
                      />
                    </div>
                    {/* <div className={`${styles.circleIndicator}`}></div> */}
                    <div className={`${styles.bmiText}`}>
                      <p>Your BMI</p>
                      <h2>{bmi > 0 ? bmi : 0}</h2>
                    </div>
                    <div className={`${styles.bmiValue}`}>
                      <span>&lt;16</span>
                      <span>&lt;40</span>
                    </div>
                  </div>
                  <div className={`${styles.bmiCheck}`}>
                    <h4>{bmi > 0 ? bmiText : `Check your BMI`}</h4>
                    <p>{bmi > 0 ? bmiHead : `Enter your height and weight to see your Body Mass Index (BMI)`}</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BmiCalculator;