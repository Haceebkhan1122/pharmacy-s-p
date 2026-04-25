'use client';
import React, { useState, useRef } from 'react'
import styles from './BmiCalculator.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
// import ReactApexChart from 'react-apexcharts';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { 
  ssr: false,
  loading: () => <div style={{ height: '350px', background: '#f0f0f0' }} /> 
});
import parse from 'html-react-parser';

const BmiCalculator = ({ data,widgetData }) => {
    const [height, setHeight] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [weight, setWeight] = useState('');
    const [errors, setErrors] = useState({});
    const [bmi, setBmi] = useState(0);
    const [bmiText, setBmiText] = useState('Check your BMI');
    const [bmiHead, setBmiHead] = useState('Enter your height and weight to see your Body Mass Index (BMI)');
    const [chartSeries, setChartSeries] = useState([0]);
    const resultRef = useRef(null);
    const isMobile = () => (typeof window !== 'undefined' && window.innerWidth <= 767);

    const handleCalculate = (e) => {
        e.preventDefault();

        const newErrors = {};

        // VALIDATION
        if (!weight) newErrors.weight = 'Please enter your weight.';
        if (!height) newErrors.height = 'Please enter feet.';
        if (!heightInches) newErrors.heightInches = 'Please enter inches.';

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        // --- NEW HEIGHT CALCULATION (feet + inches) ---
        const feet = parseFloat(height) || 0;
        const inches = parseFloat(heightInches) || 0;
        const totalInches = feet * 12 + inches;
        const heightInMeters = totalInches * 0.0254;
        // ----------------------------------------------

        // BMI CALCULATION (unchanged)
        const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
        const roundedBMI = parseFloat(bmiValue.toFixed(1));

        setBmi(roundedBMI);
         const displayedBMI = roundedBMI >= 40
            ? 100
            : (roundedBMI / 40) * 100;

        setChartSeries([displayedBMI]);

        if (roundedBMI < 18.5) {
            setBmiText('Underweight');
            setBmiHead('Below health weight');
        }
        else if (roundedBMI >= 18.5 && roundedBMI <= 22.9) {
            setBmiText('Normal weight');
            setBmiHead('Healthy weight range');
        }
        else if (roundedBMI >= 23 && roundedBMI <= 24.9) {
            setBmiText('Overweight');
            setBmiHead('Above health weight');
        }
        else if (roundedBMI >= 25 && roundedBMI <= 29.9) {
            setBmiText('Obesity (Class I)');
            setBmiHead('Moderate obesity');
        }
        else if (roundedBMI >= 30) {
            setBmiText('Obesity (Class II)');
            setBmiHead('Severe obesity');
        }
        else if (roundedBMI >= 40) {
            setBmiText('Obesity (Class III)');
            setBmiHead('Morbid  Obesity');
        }

        if (isMobile()) {
            try { document.activeElement?.blur(); } catch (e) { }
            setTimeout(() => {
                resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 250);
        }
    };

    const chartOptions = {
        chart: {
            type: 'radialBar',
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
                        height: 332,
                        width: 332,
                        offsetX: 0,
                        offsetY: 10,
                    },
                },
            },
            {
                breakpoint: 435,
                options: {
                    chart: {
                        height: 375,
                        width: 375,
                        offsetX: 0,
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
                        offsetX: -5,
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
                        offsetX: -8,
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
                        offsetX: 0,
                        offsetY: 0,
                    },
                },
            },
            {
                breakpoint: 370,
                options: {
                    chart: {
                        height: 310,
                        width: 310,
                        offsetX: 0,
                        offsetY: 0,
                    },
                },
            },
            {
                breakpoint: 330,
                options: {
                    chart: {
                        height: 280,
                        width: 280,
                        offsetX: -4,
                        offsetY: 15,
                    },
                },
            },
        ],
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#8FEEF366",
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
                    size: '73%',
                }
            }
        },
        stroke: {
            lineCap: 'round',
        },
        // fill: {
        //     type: 'gradient',
        //     gradient: {
        //         shade: 'light',
        //         type: 'vertical',
        //         shadeIntensity: 0.5,
        //         gradientToColors: ['#8FEEF366'], 
        //         inverseColors: false,
        //         opacityFrom: 1,
        //         opacityTo: 1,
        //         stops: [0, 100],
        //         colorStops: [
        //             {
        //                 offset: 0,
        //                 color: '#FFC082',
        //                 opacity: 1
        //             },
        //             {
        //                 offset: 100,
        //                 color: '#FFD5AC',
        //                 opacity: 1
        //             }
        //         ]
        //     }
        // },

        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#00BFFF'],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: '#4CC9F0',
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: '#4361EE',
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
        <div className={styles.bmiCalculatorSemo}>
            <div className={styles.wraperSs}>
                <Container  >
                    <Row>
                        <Col sm={6} className={styles.urduColl} >
                            <div className={styles.bmiProgress} ref={resultRef}>
                                <div className='position-relative'>
                                    <div id="chart" className={styles.chartBmi}>
                                        <ReactApexChart
                                            options={chartOptions}
                                            series={chartSeries}
                                            type="radialBar"
                                            height={700}
                                            width={410}
                                        />
                                        {/* <div className={styles.bmiCircle} ></div> */}
                                    </div>
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
                                    <h4>{bmi > 0 ? bmiText : 'Check your BMI'}</h4>
                                    <p>{bmi > 0 ? `Your BMI is in the category for ${bmiHead}, also called ${bmiText}.` : 'Enter your height and weight to see your Body Mass Index (BMI)'}</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} sm={6} className={`${styles.urduCollms} ms-lg-auto`}  >
                            <div className={styles.infoRight}>
                                <h3>
                                    {parse(widgetData?.heading)}</h3>
                                <p>{parse(widgetData?.description)} </p>
                                <div className={`${styles.gap5} d-flex align-items-center gap-5`}>
                                    <div className={styles.singleInp}>
                                        <label htmlFor="Height">{data?.calculator?.label1}   </label>
                                        <input type="number" value={height} name="" id="Height" onChange={(e) => {
                                            errors.height = "";
                                            setHeight(e.target.value);
                                        }} placeholder='Enter feet' />
                                        <p className='errorMessage'>  {errors?.height} </p>
                                    </div>
                                    <div className={styles.singleInp}>
                                        <label htmlFor="Height">{data?.calculator?.label3}</label>
                                        <input
                                            type="number"
                                            value={heightInches}
                                            id="HeightInches"
                                            onChange={(e) => {
                                                errors.heightInches = "";
                                                setHeightInches(e.target.value);
                                            }}
                                            placeholder="Enter inches"
                                        />
                                        <p className='errorMessage'>{errors?.heightInches}</p>
                                    </div>
                                </div>
                                <div className={styles.singleInp}>
                                    <label htmlFor="weight"> {data?.calculator?.label2}     </label>
                                    <input type="number" name="" value={weight} onChange={(e) => {
                                        errors.weight = "";
                                        setWeight(e.target.value)
                                    }} id="weight" placeholder='Enter your weight' />
                                    <p className='errorMessage'>  {errors?.weight} </p>

                                </div>
                                <button type="button" className={styles.calcBtnn} onClick={handleCalculate}>
                                    Calculate BMI
                                    <span></span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}


export default BmiCalculator;