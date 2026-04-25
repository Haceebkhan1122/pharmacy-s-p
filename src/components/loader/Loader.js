
import React from 'react';
// import "./loader.css";
import loader from '../../assets/images/png/logo.png'
import Image from 'next/image';

function Loader() {
    return (
        <>
            <div className="custom-loadingWrapper"><Image src={loader} class="gif" alt="loader" /></div>
        </>
    )
}

export default Loader