import React from 'react';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './App.css';


//Components
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';

//Pages
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import EventPage from './Pages/Events';
import ContactPage from './Pages/Contact';
import Giving from './Pages/Giving';

//Media Pages
import Sermon from './Pages/MediaPages/Sermon';
import AmbassadorChoir from './Pages/MediaPages/AmbassadorChoir';
import YouthChoir from './Pages/MediaPages/YouthChoir';
import LessonDiscussion from './Pages/MediaPages/LessonDiscussion';
import ChurchChoir from './Pages/MediaPages/ChurchChoir';

//Resources Pages
import DedicationForm from './Pages/ResourcesPages/DedicationForm';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage  />} />
          <Route exact path="/aboutUs" element={<AboutPage  />} />
          <Route exact path="/events" element={<EventPage  />} />
          <Route exact path="/contactUs" element={<ContactPage  />} />
          <Route exact path="/giving" element={<Giving  />} />

          <Route exact path="/sermon" element={<Sermon  />} />
          <Route exact path="/ambChoir" element={<AmbassadorChoir  />} />
          <Route exact path="/youthChoir" element={<YouthChoir  />} />
          <Route exact path="/lessonDiscussion" element={<LessonDiscussion  />} />
          <Route exact path="/churchChoir" element={<ChurchChoir  />} />

          <Route exact path="/childregistration" element={<DedicationForm  />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
