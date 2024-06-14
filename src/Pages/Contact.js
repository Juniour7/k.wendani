import React from 'react';
import { Helmet } from 'react-helmet-async';

//Components
import NavBar from '../Components/NavBar/NavBar';


const ContactPage = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Contact Us | Kahawa Wendani SDA Church</title>
                </Helmet>
            </div>
            <NavBar />
        </>
    );
}

export default ContactPage;