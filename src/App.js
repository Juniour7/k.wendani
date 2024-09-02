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
import Prayers from './Pages/Prayers';

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
          <Route exact path="/" element={<HomePage  />} />
          <Route exact path="/aboutUs" element={<AboutPage  />} />
          <Route exact path="/events" element={<EventPage  />} />
          <Route exact path="/contactUs" element={<ContactPage  />} />
          <Route exact path="/giving" element={<Giving  />} />
          <Route exact path="/prayers" element={<Prayers  />} />


          <Route exact path="/media/sermon" element={<Sermon  />} />
          <Route exact path="/media/ambChoir" element={<AmbassadorChoir  />} />
          <Route exact path="/media/youthChoir" element={<YouthChoir  />} />
          <Route exact path="/media/lessonDiscussion" element={<LessonDiscussion  />} />
          <Route exact path="/media/churchChoir" element={<ChurchChoir  />} />

          <Route exact path="/adventurersClub" element={<AdventureresClub  />} />
          <Route exact path="/pathfindersClub" element={<PathfindersClub  />} />
          <Route exact path="/ambassadorsClub" element={<AmbassadorsClub  />} />
          <Route exact path="/youthsCorner" element={<YouthsCorner  />} />

          <Route exact path="/childregistration" element={<DedicationForm  />} />
          <Route exact path="/churchLibrary" element={<Library  />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
