import React from 'react'
import styles from "./RightBanner.module.scss"
import Image from "next/image";
// import arrow1 from "../../assets/images/svg/arrow1.svg";
import drImage1 from "../../assets/images/png/olcufbanner.png";
import Link from 'next/link';

function RightBanner() {
    return (
        <div >
            <div className={`${styles.rightBanner} rightBanner `}>
                <Link href={"https://getzpharma.com/product/olcuf/"} target='_blank'>
                    <Image alt='' src={drImage1} className={`img-fluid `}></Image>
                    </Link>
            </div>
        </div>
    )
}

export default RightBanner
