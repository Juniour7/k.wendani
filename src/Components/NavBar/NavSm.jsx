import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//icons
import { GoChevronDown } from "react-icons/go";

// Logo
import Logo from '../../Assets/Logos/wsdalogo6.png';

const MenuItem = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSubmenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <li className="relative flex flex-col justify-center items-center mx-auto">
        <button 
          className="w-full text-center p-2 hover:text-white rounded-md transition-colors duration-200 outline-none flex items-center justify-center"
          onClick={toggleSubmenu}
        >
          {label}
          {children && (
            <GoChevronDown 
              className={`ml-2 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          )}
        </button>
        {children && (
          <ul 
            className={`pl-3 mt-1 text-center space-y-1 transition-all duration-300 overflow-hidden bg-black bg-opacity-[60%] z-40  ${
              isOpen ? 'max-h-[300px]' : 'max-h-0'
            }`}
          >
            {children}
          </ul>
        )}
      </li>
    );
};

const NavSm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            <nav className='w-full fixed top-0 z-50'>
                <div className='bg-[#007681] h-[80px] flex justify-between p-3 my-auto'>
                    <div className='w-[190px] max-h-[60px] z-50'>
                        <Link to="/">
                            <img 
                                src={Logo} 
                                alt="Seventh-Day Adventist Logo"
                                className='w-full h-full'
                            />
                        </Link>
                    </div>
                    <div className='text-5xl text-white font-bold my-auto hover:cursor-pointer z-50'  top>
                        <ion-icon onClick={toggleMenu} name={`${isOpen ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <div className="relative font-title">
                        <div 
                            className={`absolute top-0 right-0 w-full h-screen bg-[url('https://i.pinimg.com/736x/d5/c8/7c/d5c87c5207f98ce7feeed45faf63e441.jpg')] bg-cover bg-center text-white shadow-lg transition-all transform duration-500 ease-in-out z-50 ${
                            isOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        >
                            <div className='bg-[#007681] bg-opacity-[40%] w-full h-full  relative'>
                                <ul className=" p-2 space-y-3  font-medium text-2xl pt-10 flex flex-col items-center justify-center ">
                                    <li className='m-2'>
                                        <Link to="/" onClick={closeMenu} className='text-center'>Home</Link>
                                    </li>
                                    <li className='m-2'>
                                        <Link to="/aboutUs" onClick={closeMenu}>About Us</Link>
                                    </li>
                                    <li>
                                        <MenuItem label="Media" >
                                            <Link to="/media/sermon" onClick={closeMenu}><MenuItem label="Sermon" /></Link>
                                            <Link to="/media/lessonDiscussion" onClick={closeMenu}><MenuItem label="Lesson Discussion" /></Link>
                                            <Link to="/media/churchChoir" onClick={closeMenu}><MenuItem label="Church Choir" /></Link>
                                            <Link to="/media/youthChoir" onClick={closeMenu}><MenuItem label="Youth Choir" /></Link>
                                            <Link to="/media/ambChoir" onClick={closeMenu}><MenuItem label="Ambassadors Choir" /></Link>
                                        </MenuItem>
                                    </li>
                                    <li className=''>
                                        <Link to="/events" onClick={closeMenu}>Events</Link>
                                    </li>
                                    <li className=''>
                                        <Link to="/prayers" onClick={closeMenu}>Prayers</Link>
                                    </li>
                                    <li className='m-2'>
                                    <MenuItem label="Resources" >
                                        <Link to="" onClick={closeMenu}><MenuItem label="Downloads" /></Link>
                                        <Link to="/blog" onClick={closeMenu}><MenuItem label="Blogs" /></Link>
                                        <Link to="/childregistration" onClick={closeMenu}><MenuItem label="Dediaction Form" /></Link>
                                        <Link to="" onClick={closeMenu}><MenuItem label="Bennevolence Form" /></Link>
                                        <Link to="/churchLibrary" onClick={closeMenu}><MenuItem label="Library" /></Link>
                                    </MenuItem>
                                    </li>
                                    <li className='m-2'>
                                        <MenuItem label="Ministries">
                                            <Link to="/adventurersClub" onClick={closeMenu}><MenuItem label="Adventurers Club" /></Link>
                                            <Link to="/pathfindersClub" onClick={closeMenu}><MenuItem label="Pathfinder Club" /></Link>
                                            <Link to="/ambassadorsClub" onClick={closeMenu}><MenuItem label="Ambassadors Club" /></Link>
                                            <Link to="/youthsCorner" onClick={closeMenu}><MenuItem label="Youth's Corner" /></Link>
                                        </MenuItem>
                                    </li>
                                    <li>
                                        <Link to="/contactUs" onClick={closeMenu}>Contact Us</Link>
                                    </li>
                                    <li>
                                        <div className='flex flex-col justify-center items-center gap-2  text-lg mt-24'>
                                            <div className='flex divide-x divide-white'>
                                                <div className='pr-2'>
                                                    <Link to="/giving" onClick={closeMenu}><button className='  rounded-md '>Worship In Giving</button></Link>
                                                </div>
                                                <div className='pl-2'>
                                                    <Link to='/aboutUs' onClick={closeMenu}>
                                                        Our Leaders
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
            </nav>
        </>
    );
}

export default NavSm;