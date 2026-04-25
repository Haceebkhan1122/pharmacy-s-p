import React from 'react'
import styles from "./writtenDetails.module.scss"
import Image from "next/image";

function WrittenDetails({ writtenBy }) {

    return (
        <div >
            <div className={`${styles.writtenDetails} writtenDetails `}>

                <p>Written by
                    <b>{writtenBy?.written_by?.name}</b>
                </p><p>
                    Updated on
                    <b>{writtenBy?.updated_on}</b></p>

            </div>
        </div>
    )
}

export default WrittenDetails
