'use client';
import React from 'react'
import styles from './semoStorage.module.scss';
import Image from 'next/image';
import semo from '../../assets/images/semoStorageThree.png';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

const SemoStorage = ({ data }) => {
    const router = useRouter();

    return (
        <div className={styles.semoStorageWraper}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='text-center'>
                            <Image src={semo} alt='' className='img-fluid' />
                        </div>
                        <h3>{data?.storage?.heading}   </h3>
                        <p> {data?.storage?.content}    </p>
                        {/* <button type="button" onClick={() => router.push("https://careconnect.pk/products/sem-o-semaglutide?_pos=3&_sid=1bf36e554&_ss=r")} >
                            {data?.storage?.button}
                            <span></span>
                        </button> */}
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default SemoStorage
