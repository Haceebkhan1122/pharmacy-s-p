'use client';
import React from 'react'
import styles from "./BannerArticle.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function BannerArticle({ data }) {
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path);


    return (
        <div>
            <div className={`${styles.topBarBanner} d-none`}>
                <Container >
                    <Row >
                        <Col lg={12} >
                            <div className="breadcrumbContainer">
                                <ul>
                                    <li><Link href={'/'} className='listClassesBreadCrumb'> Home </Link></li>
                                    {
                                        pathNames.map((link, index) => {
                                            let href = `/article` ? `/nutrition-guide` : `/${pathNames.slice(0, index + 1).join('/')}`
                                            let itemClasses = paths === href ? ` listClassesBreadCrumb activeClassBread ` : "listClassesBreadCrumb";
                                            let link1 = link;
                                            if (link.includes("-")) {
                                                let updatedLink = link.split("-");
                                                let uu = updatedLink.join(" ");
                                                link1 = uu;
                                            }
                                            return (
                                                <React.Fragment key={index}>
                                                    <li className={itemClasses}>
                                                        <Link href={href}>{link1}</Link>
                                                    </li>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div
                className={`${styles.articleBanner} bannerArticle`}
                style={{ backgroundImage: `url(${data?.image})` }}
            >
                <Container className='h-100'>
                    <Row className='h-100'>
                        <Col lg={12} className='mt-auto'>
                            <div className={`${styles.articlebox} articlebox`}>
                                <div className={`${styles.boxLeft}`}>
                                    {/* <Image src={data?.approved_user?.image} className='img-fluid' width={1520} height={540} alt='banner image'></Image> */}
                                </div>
                                <div className={`${styles.boxRightt}`}>
                                    <p>Reviewed by <span>{data?.approved_user?.name || 'Dr. Abbas Ahmed'}</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default BannerArticle