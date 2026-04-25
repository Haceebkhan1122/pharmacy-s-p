import React from 'react'
import styles from "./middleCOntent.module.scss"
import Image from "next/image";
// import share from "../../assets/images/svg/arrow1.svg";
import { Nav } from 'react-bootstrap'
import parse from "html-react-parser";
// import { m } from 'framer-motion';


function MiddleCOntent({data, headings}) {

    return (
        <>
            <section id={headings?.[0]} className={`${styles.middleCOntent} middleCOntent`}>
                <p> 
                    {data?.widgets?.[0]?.description && parse(data?.widgets?.[0]?.description)}
                </p>
            </section>
            <section id={headings?.[1]} className={`${styles.middleCOntent} middleCOntent`}>
                <p> {data?.widgets?.[1]?.description && parse(data?.widgets?.[1]?.description)} </p>
            </section>

            <section id={headings?.[2]} className={`${styles.middleCOntent} middleCOntent`}>
                <p> {data?.widgets?.[2]?.description && parse(data?.widgets?.[2]?.description)} </p>
            </section>
            <section id={headings?.[3]} className={`${styles.middleCOntent} middleCOntent`}>
                <p>  {data?.widgets?.[3]?.description && parse(data?.widgets?.[3]?.description)} </p>
            </section>
        </>
    )
}

export default MiddleCOntent
