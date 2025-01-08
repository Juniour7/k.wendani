import React from 'react';
import { HashRouter as Router, Routes,Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import './Custom.css';

//Components
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';
import BackToTopButton from './Components/BackToTopButton ';

//Pages
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import EventPage from './Pages/Events';
import ContactPage from './Pages/Contact';
import Giving from './Pages/Giving';
import Prayers from './Pages/Prayers';
import Blogs from './Pages/Blogs';

//Blog Pages
import TheSabbath from './Pages/Blogs/TheSabbath';
import StateofDead from './Pages/Blogs/StateofDead';
import HowPrayer from './Pages/Blogs/HowPrayer';

//Media Pages
import Sermon from './Pages/MediaPages/Sermon';
import AmbassadorChoir from './Pages/MediaPages/AmbassadorChoir';
import YouthChoir from './Pages/MediaPages/YouthChoir';
import LessonDiscussion from './Pages/MediaPages/LessonDiscussion';
import ChurchChoir from './Pages/MediaPages/ChurchChoir';

//Ministries
import AdventureresClub from './Pages/MinistriesPages/AdventureresClub';
import PathfindersClub from './Pages/MinistriesPages/PathfindersClub';
import AmbassadorsClub from './Pages/MinistriesPages/Ambassadors';
import YouthsCorner from './Pages/MinistriesPages/YouthsCorner';

//Resources Pages
import DedicationForm from './Pages/ResourcesPages/DedicationForm';
import Library from './Pages/ResourcesPages/Library';


function App() {
  return (
    <HelmetProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/aboutUs" element={<AboutPage  />} />
          <Route path="/events" element={<EventPage  />} />
          <Route path="/contactUs" element={<ContactPage  />} />
          <Route path="/giving" element={<Giving  />} />
          <Route path="/prayers" element={<Prayers  />} />
          <Route path="/blog" element={<Blogs  />} />

          <Route path="/blog">
            <Route path="theSabbath" element={<TheSabbath />} />
            <Route path="stateofTheDead" element={<StateofDead />} />
            <Route path="prayerWorks" element={<HowPrayer />} />
          </Route>

          <Route path="/media/sermon" element={<Sermon  />} />
          <Route path="/media/ambChoir" element={<AmbassadorChoir  />} />
          <Route path="/media/youthChoir" element={<YouthChoir  />} />
          <Route path="/media/lessonDiscussion" element={<LessonDiscussion  />} />
          <Route path="/media/churchChoir" element={<ChurchChoir  />} />

          <Route path="/adventurersClub" element={<AdventureresClub  />} />
          <Route path="/pathfindersClub" element={<PathfindersClub  />} />
          <Route path="/ambassadorsClub" element={<AmbassadorsClub  />} />
          <Route path="/youthsCorner" element={<YouthsCorner  />} />

          <Route path="/childregistration" element={<DedicationForm  />} />
          <Route path="/churchLibrary" element={<Library  />} />
        </Routes>
        <BackToTopButton />
        <ScrollToTop /> 
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
