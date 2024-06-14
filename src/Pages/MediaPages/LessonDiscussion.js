import React from 'react';
import { Helmet } from 'react-helmet-async';


//Components
import NavBar from '../../Components/NavBar/NavBar';

const LessonDiscussion = () => {
  return (
    <>
        <Helmet>
            <title>Lessson | Kahawa Wendani SDA Church</title>
        </Helmet>
        <NavBar />
    </>
  );
}

export default LessonDiscussion;