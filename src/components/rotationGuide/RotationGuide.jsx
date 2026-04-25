import styles from './rotationGuide.module.scss';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

export default function RotationGuide({ widgetData }) {
    // 1. Destructure the main data from the API response
    const { heading, description, data } = widgetData || {};

    // If there is no data, return null to avoid errors
    if (!widgetData || !data) return null;

    return (
        <section className={styles.container}>
            <Container>
                <header className={styles.header}>
                    {/* 2. Use dynamic heading */}
                    <h1>{heading}</h1>

                    {/* 3. Use dangerouslySetInnerHTML because description contains <p> tags */}
                    <div
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </header>

                <Row>
                    {/* 4. Map through the 'data' array from API */}
                    {data.map((item, index) => (
                        <Col lg={12} xs={12} key={item.id || index}>
                            <div className={styles.imageWrapper}>
                                <img
                                    // 5. Use the dynamic S3 URL from API
                                    src={item.image}
                                    // Use heading/index as fallback alt text
                                    alt={heading}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}