'use client'

import React, { useState } from "react";
import { Container, Row, Col, Modal, Form } from 'react-bootstrap';
import styles from './inpersonBanner.module.scss'
import Link from "next/link";

export default function InpersonBanner({ data }) {
    const [show, setShow] = useState(false);
    const [showCity, setShowCity] = useState(false);
    const [showSpecialities, setShowSpecialities] = useState(false);
    const [filterQuickTags, setFilterQuickTags] = useState(null);
    const [gender, setGender] = useState(null);
    const [speciality, setSpeciality] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const onClose = () => {
        setShow(false);
    }

    const onCloseCity = () => {
        setShowCity(false);
    }

    const onCloseSpeciality = () => {
        setShowSpecialities(false);
    }

    const quickTags = [
        {
            id: 1,
            name: 'endocrinologist',
            label: 'Endocrinologist'
        },
        {
            id: 2,
            name: 'diabetologist',
            label: 'Diabetologist'
        },
        {
            id: 3,
            name: 'generalphysician',
            label: 'General Physician'
        }, {
            id: 1,
            name: 'gynaecologist',
            label: 'Gynaecologist'
        }, {
            id: 1,
            name: 'cardiologist',
            label: 'Cardiologist'
        }
    ]

    const genders = [
        {
            id: 1,
            name: 'male',
            label: 'Male'
        },
        {
            id: 2,
            name: 'female',
            label: 'Female'
        },
        {
            id: 3,
            name: 'any',
            label: 'Any'
        }
    ]

    const cities = [
        "Karachi",
        "Lahore",
        "Islamabad",
        "Rawalpindi",
        "Faisalabad",
        "Multan",
        "Peshawar",
        "Quetta",
        "Hyderabad",
        "Sialkot",
    ];

    const specialityList = [
        "Cardiologist",
        "General Physician",
        "Diabetologist",
        "Internal Medicine Physician",
        "Bariatric Specialist",
    ];

    return (
        <div className={`${styles.inPersonWrapper}`}>
            <Container>
                <Row className={`${styles.inPersonRow}`}>
                    <div className={styles.bottom_breadcrumb}>
                        <Link
                            href="/"
                            style={{ textDecoration: "none" }}
                        >
                            <span
                                className={`${styles.breadcrumbText}`}
                            >
                                Home
                            </span>
                        </Link>

                        <span className={styles.breadcrumbArrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M12.4021 24.4495L10.9688 23.0161L17.5688 16.4161L10.9688 9.81615L12.4021 8.38281L20.4354 16.4161L12.4021 24.4495Z" fill="#222222" />
                            </svg>
                        </span>

                        <span className={styles.breadcrumbText}>
                            In Person Care
                        </span>
                    </div>
                </Row>
                <Row>
                    <Col md={12} className="ps-0">
                        <div className={styles.heading}>
                            <h2>Find the best doctors</h2>
                        </div>
                    </Col>
                    <Col md={12} className="ps-0">
                        <div className={styles.searchBar}>
                            <div className={styles.searchFieldWrapper} onClick={() => setShowCity(true)}>
                                <div className={styles.searchField}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M15.9987 15.9974C16.732 15.9974 17.3598 15.7363 17.882 15.2141C18.4043 14.6918 18.6654 14.0641 18.6654 13.3307C18.6654 12.5974 18.4043 11.9696 17.882 11.4474C17.3598 10.9252 16.732 10.6641 15.9987 10.6641C15.2654 10.6641 14.6376 10.9252 14.1154 11.4474C13.5931 11.9696 13.332 12.5974 13.332 13.3307C13.332 14.0641 13.5931 14.6918 14.1154 15.2141C14.6376 15.7363 15.2654 15.9974 15.9987 15.9974ZM15.9987 25.7974C18.7098 23.3085 20.7209 21.0474 22.032 19.0141C23.3431 16.9807 23.9987 15.1752 23.9987 13.5974C23.9987 11.1752 23.2265 9.19184 21.682 7.6474C20.1376 6.10295 18.2431 5.33073 15.9987 5.33073C13.7543 5.33073 11.8598 6.10295 10.3154 7.6474C8.77092 9.19184 7.9987 11.1752 7.9987 13.5974C7.9987 15.1752 8.65425 16.9807 9.96536 19.0141C11.2765 21.0474 13.2876 23.3085 15.9987 25.7974ZM15.9987 29.3307C12.4209 26.2863 9.7487 23.4585 7.98203 20.8474C6.21536 18.2363 5.33203 15.8196 5.33203 13.5974C5.33203 10.2641 6.40425 7.60851 8.5487 5.63073C10.6931 3.65295 13.1765 2.66406 15.9987 2.66406C18.8209 2.66406 21.3043 3.65295 23.4487 5.63073C25.5931 7.60851 26.6654 10.2641 26.6654 13.5974C26.6654 15.8196 25.782 18.2363 24.0154 20.8474C22.2487 23.4585 19.5765 26.2863 15.9987 29.3307Z" fill="#77AA42" />
                                    </svg>
                                    <h5>Karachi</h5>
                                </div>
                                <div className={styles.searchField}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M7 12.6058L8.60581 11L16 18.3942L23.3942 11L25 12.6058L16 21.6058L7 12.6058Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.searchForDoctor}>
                                <div className={styles.inputField}>
                                    <input type="search" placeholder="Search for doctors, specialities..." />
                                </div>
                                <div className={styles.searchIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                        <g clip-path="url(#clip0_2436_16947)">
                                            <path d="M32.2917 29.6647H30.6458L30.0625 29.1022C32.1042 26.7272 33.3333 23.6439 33.3333 20.2897C33.3333 12.8105 27.2708 6.74805 19.7917 6.74805C12.3125 6.74805 6.25 12.8105 6.25 20.2897C6.25 27.7689 12.3125 33.8314 19.7917 33.8314C23.1458 33.8314 26.2292 32.6022 28.6042 30.5605L29.1667 31.1439V32.7897L39.5833 43.1856L42.6875 40.0814L32.2917 29.6647ZM19.7917 29.6647C14.6042 29.6647 10.4167 25.4772 10.4167 20.2897C10.4167 15.1022 14.6042 10.9147 19.7917 10.9147C24.9792 10.9147 29.1667 15.1022 29.1667 20.2897C29.1667 25.4772 24.9792 29.6647 19.7917 29.6647Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2436_16947">
                                                <rect width="50" height="50" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} className="ps-0">
                        <div className={styles.filter}>
                            <div className={styles.filterIcon} onClick={() => setShow(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g clip-path="url(#clip0_295_11078)">
                                        <path d="M4 24C4 24.7333 4.6 25.3333 5.33333 25.3333H12V22.6667H5.33333C4.6 22.6667 4 23.2667 4 24ZM4 8C4 8.73333 4.6 9.33333 5.33333 9.33333H17.3333V6.66667H5.33333C4.6 6.66667 4 7.26667 4 8ZM17.3333 26.6667V25.3333H26.6667C27.4 25.3333 28 24.7333 28 24C28 23.2667 27.4 22.6667 26.6667 22.6667H17.3333V21.3333C17.3333 20.6 16.7333 20 16 20C15.2667 20 14.6667 20.6 14.6667 21.3333V26.6667C14.6667 27.4 15.2667 28 16 28C16.7333 28 17.3333 27.4 17.3333 26.6667ZM9.33333 13.3333V14.6667H5.33333C4.6 14.6667 4 15.2667 4 16C4 16.7333 4.6 17.3333 5.33333 17.3333H9.33333V18.6667C9.33333 19.4 9.93333 20 10.6667 20C11.4 20 12 19.4 12 18.6667V13.3333C12 12.6 11.4 12 10.6667 12C9.93333 12 9.33333 12.6 9.33333 13.3333ZM28 16C28 15.2667 27.4 14.6667 26.6667 14.6667H14.6667V17.3333H26.6667C27.4 17.3333 28 16.7333 28 16ZM21.3333 12C22.0667 12 22.6667 11.4 22.6667 10.6667V9.33333H26.6667C27.4 9.33333 28 8.73333 28 8C28 7.26667 27.4 6.66667 26.6667 6.66667H22.6667V5.33333C22.6667 4.6 22.0667 4 21.3333 4C20.6 4 20 4.6 20 5.33333V10.6667C20 11.4 20.6 12 21.3333 12Z" fill="#77AA42" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_295_11078">
                                            <rect width="32" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.filterIcon}>
                                <hr />
                                <h4>Select a filter to view curated results</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal
                className={`filterModal ${styles.filterModal}`}
                show={show}
                onHide={onClose}
                centered={true}
                keyboard={true}
                backdrop="static"
                aria-labelledby="disclaimer-title"
            >
                {/* NOTE: Bootstrap's structure is preserved; we target bootstrap classes in CSS module via :global */}
                <Modal.Body className={styles.body}>
                    <div className={styles.modalBodyContent}>
                        <button
                            type="button"
                            aria-label="Close disclaimer"
                            className={styles.closeBtn}
                            onClick={onClose}
                        >
                            ×
                        </button>
                    </div>
                    <div className={styles.filterModalbody}>
                        <Row>
                            <Col md={12}>
                                <div className={styles.headingFilter}>
                                    <h4>Filter</h4>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className={styles.headingMiniFilter}>
                                    <h4>Quick tags</h4>
                                </div>
                                <div className={styles.quickTags}>
                                    <div className={styles.formRadio}>
                                        {quickTags?.length > 0 && quickTags?.map((item, index) => (
                                            <div key={index} className={styles.radioItem}>
                                                <input
                                                    type="radio"
                                                    id={`tag-${index}`}
                                                    name="quickTag"
                                                    checked={filterQuickTags === item.label}
                                                    onChange={() => setFilterQuickTags(item.label)}
                                                />
                                                <label htmlFor={`tag-${index}`}>
                                                    {item.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className={styles.headingMiniFilter}>
                                    <h4>Gender</h4>
                                </div>
                                <div className={styles.quickTags}>
                                    <div className={styles.formRadio}>
                                        {genders?.length > 0 && genders?.map((item, index) => (
                                            <div key={index} className={styles.radioItem}>
                                                <input
                                                    type="radio"
                                                    id={`tag-${index}`}
                                                    name="genderTag"
                                                    checked={gender === item.label}
                                                    onChange={() => setGender(item.label)}
                                                />
                                                <label htmlFor={`tag-${index}`}>
                                                    {item.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className={styles.headingMiniFilter}>
                                    <h4>Filter By</h4>
                                </div>
                                <div className={styles.quickTags}>
                                    <div className={`radioSpeciality ${styles.specialityRadio}`} onClick={() => {
                                        setShow(false);
                                        setShowSpecialities(true)
                                    }}>
                                        <Form.Check
                                            type="radio"
                                            name='speciality'
                                            label="Speciality"
                                            checked={speciality === 'Diabetologist'}
                                        />
                                        <span>Any <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M12.4997 24.0003L11.0664 22.5669L17.6664 15.9669L11.0664 9.36693L12.4997 7.93359L20.5331 15.9669L12.4997 24.0003Z" fill="black" />
                                        </svg></span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal
                className={`filterModal ${styles.citiesModal} ${styles.filterModal}`}
                show={showCity}
                onHide={onCloseCity}
                centered={true}
                keyboard={true}
                backdrop="static"
                aria-labelledby="disclaimer-title"
            >
                {/* NOTE: Bootstrap's structure is preserved; we target bootstrap classes in CSS module via :global */}
                <Modal.Body className={styles.body}>
                    <div className={styles.modalBodyContent}>
                        <button
                            type="button"
                            aria-label="Close disclaimer"
                            className={styles.closeBtn}
                            onClick={onCloseCity}
                        >
                            ×
                        </button>
                    </div>
                    <div className={styles.filterModalbody}>
                        <Row>
                            <Col md={12}>
                                <div className={styles.headingFilter}>
                                    <h4>Cities</h4>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className={styles.searchCityModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#77AA42" />
                                    </svg>
                                    <input type="search" placeholder="Enter your city" />
                                </div>
                                <div className={styles.citiesRadioWrapper}>
                                    <div className={styles.citiesRadio}>
                                        {cities?.length > 0 && cities?.map((city, index) => (
                                            <div key={index} className={styles.radioItemCities}>
                                                {/* <input
                                                    type="radio"
                                                    id={`city-${index}`}
                                                    name="city"
                                                    checked={selectedCity === city}
                                                    onChange={() => setSelectedCity(city)}
                                                /> */}
                                                <Form.Check
                                                    type="radio"
                                                    id={`city-${index}`}
                                                    name="city"
                                                    checked={selectedCity === city}
                                                    onChange={() => setSelectedCity(city)}
                                                />
                                                <label htmlFor={`city-${index}`}>
                                                    {city}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal
                className={`filterModal ${styles.citiesModal} ${styles.filterModal}`}
                show={showSpecialities}
                onHide={onCloseSpeciality}
                centered={true}
                keyboard={true}
                backdrop="static"
                aria-labelledby="disclaimer-title"
            >
                {/* NOTE: Bootstrap's structure is preserved; we target bootstrap classes in CSS module via :global */}
                <Modal.Body className={styles.body}>
                    <div className={styles.modalBodyContent}>
                        <button
                            type="button"
                            aria-label="Close disclaimer"
                            className={styles.closeBtn}
                            onClick={onCloseSpeciality}
                        >
                            ×
                        </button>
                    </div>
                    <div className={styles.filterModalbody}>
                        <Row>
                            <Col md={12}>
                                <div className={styles.headingFilter}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <g clip-path="url(#clip0_2436_17164)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6654 14.6654H10.3987L17.8654 7.1987L15.9987 5.33203L5.33203 15.9987L15.9987 26.6654L17.8654 24.7987L10.3987 17.332H26.6654V14.6654Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2436_17164">
                                                <rect width="32" height="32" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h4>Specialities</h4>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className={styles.searchCityModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#77AA42" />
                                    </svg>
                                    <input type="search" placeholder="Search" />
                                </div>
                                <div className={styles.citiesRadioWrapper}>
                                    <div className={styles.citiesRadio}>
                                        {specialityList?.length > 0 && specialityList?.map((speciality, index) => (
                                            <div key={index} className={styles.radioItemCities}>
                                                <Form.Check
                                                    type="radio"
                                                    id={`city-${index}`}
                                                    name="city"
                                                    checked={speciality === speciality}
                                                    onChange={() => setSpeciality(speciality)}
                                                />
                                                <label htmlFor={`city-${index}`}>
                                                    {speciality}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}