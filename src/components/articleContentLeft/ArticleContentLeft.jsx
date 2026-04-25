"use client";

import { useRef, useState } from "react";
import styles from "./ArticleContentLeft.module.scss";
import { Col, Container, Row } from "react-bootstrap";
// import TopHeading from "./topHeading/TopHeading";
import ShareBox from "../shareBox/ShareBox";
import MiddleCOntent from "../middleCOntent/MiddleCOntent";
import LikeBox from "../likeBox/LikeBox";
import WrittenDetails from "../writtenDetails/WrittenDetails";
import RelatedArticle from "../relatedArticle/RelatedArticle";
import ConsultCTA from "../consultCTA/ConsultCTA";
import RightBanner from "../rightBanner/RightBanner";
import { APIV3 } from "@/utils/httpService";
import Navigation from "../navigation/Navigation";
import TopHeading from "../topHeading/TopHeading";


function ArticleContentLeft({ data }) {
    const [feedback, setFeedback] = useState(null);
    const articleRef = useRef(null);

    const headings = data?.widgets?.map(i => {
        const str = i?.data?.badge_title || "";
        return str;
    }).filter(Boolean);

    let writtenBy = data

    const handleFeedback = async (type) => {
        setFeedback(type);
        const payload = {
            article_id: 3,
            is_like: type,
        }
        try {
            const res = await APIV3.post(`/review-article`, payload);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`${styles.articleLeftContent} articleLeftContent`}>
            <Container>
                <Row>
                    <Col lg={8} md={8}>
                        <TopHeading data={data} />
                        <Navigation data={data} headings={headings} />
                        <section>
                            <ShareBox componentRef={articleRef} />
                        </section>
                        <section>
                            <MiddleCOntent data={data} headings={headings} />
                        </section>
                        <section id="foods">
                            <LikeBox handleFeedback={handleFeedback} />
                        </section>
                        {/* <section id="bottomline">
                            <p>Bottom line content here...</p>
                        </section> */}
                    </Col>
                    <Col lg={3} md={4} className='ms-auto'>

                        <WrittenDetails writtenBy={writtenBy} />
                        <RelatedArticle data={data} />
                        <ConsultCTA />
                        <RightBanner />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ArticleContentLeft;

