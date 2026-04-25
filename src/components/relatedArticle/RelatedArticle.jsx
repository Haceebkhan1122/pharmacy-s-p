import React from 'react'
import styles from "./relatedArticle.module.scss"
import Image from "next/image";
import Link from 'next/link';

function RelatedArticle({ data }) {
    let readThisLatter = data?.related;

    return (
        <div >
            <div className={`${styles.relatedArticle} relatedArticle`}>

                <h3>READ THIS NEXT</h3>
                {readThisLatter?.map((item, index) => (
                    <React.Fragment key={item.id || index}>
                        <div className={`${styles.relatedArticleBox} relatedArticleBox`}>
                            <div className={`${styles.relatedArticleImg} relatedArticleImg`}>
                                {/* <Image src={item?.image} alt='Article Image' className='img-fluid' width={88} height={88} /> */}
                            </div>
                            <Link href={`/article/${item?.slug}`}>{item?.name}</Link>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default RelatedArticle
