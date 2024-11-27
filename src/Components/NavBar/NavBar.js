import React, {useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';




const MenuItem = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSubmenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <li className="relative">
        <button 
          className="w-full text-left p-2 hover:text-white rounded-md transition-colors duration-200"
          onClick={toggleSubmenu}
        >
          {label}
        </button>
        {children && (
          <ul 
            className={`pl-3 mt-1  space-y-1 transition-all duration-300 overflow-hidden ${
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
                                src={require('../../Assets/Logos/wsdalogo6.png')} 
                                alt="Seventh-Day Adventist Logo"
                                className='w-full h-full'
                            />
                        </Link>
                    </div>
                    <div className='text-5xl font-bold my-auto hover:cursor-pointer z-50'  top>
                        <ion-icon onClick={toggleMenu} name={`${isOpen ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <div className="relative">
                        <div 
                            className={`absolute top-0 right-0 w-72 h-screen bg-Main-500 bg-blur-lg text-white text-lg shadow-lg transition-all transform duration-500 ease-in-out z-50 ${
                            isOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        >
                            <ul className="flex flex-col p-2 space-y-2">
                                <Link to="/" onClick={closeMenu}><MenuItem label="Home" /></Link>
                                <Link to="/aboutUs" onClick={closeMenu}><MenuItem label="About Us" /></Link>
                                <MenuItem label="Media">
                                    <Link to="/media/sermon" onClick={closeMenu}><MenuItem label="Sermon" /></Link>
                                    <Link to="/media/lessonDiscussion" onClick={closeMenu}><MenuItem label="Lesson Discussion" /></Link>
                                    <Link to="/media/churchChoir" onClick={closeMenu}><MenuItem label="Church Choir" /></Link>
                                    <Link to="/media/youthChoir" onClick={closeMenu}><MenuItem label="Youth Choir" /></Link>
                                    <Link to="/media/ambChoir" onClick={closeMenu}><MenuItem label="Ambassadors Choir" /></Link>
                                </MenuItem>
                                <Link to="/events" onClick={closeMenu}><MenuItem label="Events" /></Link>
                                <Link to="/prayers" onClick={closeMenu}><MenuItem label="Prayers" /></Link>
                                <MenuItem label="Resources" >
                                    <Link to="" onClick={closeMenu}><MenuItem label="Downloads" /></Link>
                                    <Link to="/blog" onClick={closeMenu}><MenuItem label="Blogs" /></Link>
                                    <Link to="/childregistration" onClick={closeMenu}><MenuItem label="Dediaction Form" /></Link>
                                    <Link to="" onClick={closeMenu}><MenuItem label="Bennevolence Form" /></Link>
                                    <Link to="/churchLibrary" onClick={closeMenu}><MenuItem label="Library" /></Link>
                                </MenuItem>
                                <MenuItem label="Ministries">
                                    <Link to="/adventurersClub" onClick={closeMenu}><MenuItem label="Adventurers Club" /></Link>
                                    <Link to="/pathfindersClub" onClick={closeMenu}><MenuItem label="Pathfinder Club" /></Link>
                                    <Link to="/ambassadorsClub" onClick={closeMenu}><MenuItem label="Ambassadors Club" /></Link>
                                    <Link to="/youthsCorner" onClick={closeMenu}><MenuItem label="Youth's Corner" /></Link>
                                </MenuItem>
                                <Link to="/contactUs" onClick={closeMenu}><MenuItem label="Contact Us" /></Link>
                                <Link to="/giving" onClick={closeMenu}><button className='bg-[#007681] px-3 py-2 rounded-md text-sm'>Worship In Giving</button></Link>
                            </ul>
                        </div>
                    </div>
            </nav>
        </>
    );
}

const NavMd = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };


    return (
        <>
           <nav className='w-full fixed top-0 z-50'>
                <div className='bg-[#007681] p-3 flex justify-between'>
                    <div className='w-[250px] max-h-[70px]'>
                        <Link to="/">
                            <img 
                                src={require('../../Assets/Logos/wsdalogo6.png')} 
                                alt="Seventh-Day Adventist Logo"
                                className='w-full h-full'
                            />
                        </Link>
                    </div>
                    <div className='text-7xl font-bold my-auto hover:cursor-pointer z-50' onClick={toggleMenu}>
                        <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <header>
                        <div className="relative">
                        <div 
                            className={`absolute top-0 right-[-25px] w-[400px] h-screen bg-Main-500 text-white  text-lg shadow-lg transition-transform origin-top-right transform ${
                            isOpen ? 'scale-100' : 'scale-0'
                            }`}
                        >
                            <ul className="flex flex-col p-2 space-y-2">
                                <Link to="/" onClick={closeMenu}><MenuItem label="Home" /></Link>
                                <Link to="/aboutUs" onClick={closeMenu}><MenuItem label="About Us" /></Link>
                                <MenuItem label="Media">
                                    <Link to="/media/sermon" onClick={closeMenu}><MenuItem label="Sermon" /></Link>
                                    <Link to="/media/lessonDiscussion" onClick={closeMenu}><MenuItem label="Lesson Discussion" /></Link>
                                    <Link to="/media/churchChoir" onClick={closeMenu}><MenuItem label="Church Choir" /></Link>
                                    <Link to="/media/youthChoir" onClick={closeMenu}><MenuItem label="Youth Choir" /></Link>
                                    <Link to="/media/ambChoir" onClick={closeMenu}><MenuItem label="Ambassadors Choir" /></Link>
                                </MenuItem>
                                <Link to="/events" onClick={closeMenu}><MenuItem label="Events" /></Link>
                                <Link to="/prayers" onClick={closeMenu}><MenuItem label="Prayers" /></Link>
                                <MenuItem label="Resources" >
                                    <Link to="" onClick={closeMenu}><MenuItem label="Downloads" /></Link>
                                    <Link to="/blog" onClick={closeMenu}><MenuItem label="Blogs" /></Link>
                                    <Link to="/childregistration" onClick={closeMenu}><MenuItem label="Dediaction Form" /></Link>
                                    <Link to="" onClick={closeMenu}><MenuItem label="Bennevolence Form" /></Link>
                                    <Link to="/churchLibrary" onClick={closeMenu}><MenuItem label="Library" /></Link>
                                </MenuItem>
                                <MenuItem label="Ministries">
                                    <Link to="/adventurersClub" onClick={closeMenu}><MenuItem label="Adventurers Club" /></Link>
                                    <Link to="/pathfindersClub" onClick={closeMenu}><MenuItem label="Pathfinder Club" /></Link>
                                    <Link to="/ambassadorsClub" onClick={closeMenu}><MenuItem label="Ambassodrs Club" /></Link>
                                    <Link to="/youthsCorner" onClick={closeMenu}><MenuItem label="Youth's Corner" /></Link>
                                </MenuItem>
                                <Link to="/contactUs" onClick={closeMenu}><MenuItem label="Contact Us" /></Link>
                                <Link to="/giving" onClick={closeMenu}><button className='bg-[#007681] px-3 py-2 rounded-md text-sm'>Worship In Giving</button></Link>
                            </ul>
                        </div>
                    </div>
                    </header>
            </nav>
        </>
    );
}

const NavLg = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const GivingClick = () => {
        navigate('/giving')
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if(offset > 150){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <>
            <nav className={`bg-[rgba(0,118,129,0.5)] h-[100px] w-full bg-opacity-50 flex justify-center items-center space-x-[100px] p-4 fixed top-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[rgba(0,118,129,1)] bg-opacity-100 h-[5.313rem]' : ''}`}>
                <div className={`w-[295px] h-[80px] py-auto transition-all duration-700 ease-in-out ${scrolled ? 'max-w-[250px] max-h-[70px] my-auto' : ''}`}>
                    <Link to="/">
                        <img 
                            src={require('../../Assets/Logos/wsdalogo6.png')} 
                            alt="Seventh-Day Adventist Logo"
                            className='h-full w-full'
                        />
                    </Link>
                </div>
                <header className='my-auto font-title font-medium'>
                    <ul className='inline-flex text-white text-lg space-x-3'>
                        <li className='hover:cursor-pointer hover:text-[#F0B323] py-4 transition-colors duration-300'>
                            <NavLink to="/" 
                                className={({ isActive }) => [
                                    "my-auto text-white", isActive ? " text-[#F0B323]" : ""
                                ]}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='hover:cursor-pointer hover:text-[#F0B323] py-4 transition-colors duration-300'>
                            <NavLink to="/aboutUs"
                                className={({ isActive }) => [
                                    "my-auto text-white", isActive ? " text-[#F0B323]" : ""
                                ]}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className='hover:cursor-pointer hover:text-[#F0B323] transition-colors duration-300'>
                            <div className='relative text-left inline-block group'>
                                <div>
                                    <button className='inline-flex justify-center py-4'>Media</button>
                                </div>
                                <div className='hidden bg-Main-400 absolute origin-top -left-[40px] top-[55px] group-hover:block transition-all duration-300 text-black'>
                                    <div className="w-[200px] divide-y" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link to="/media/sermon" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Sermon</Link>
                                        <Link to="/media/lessonDiscussion" className="block text-md font-light hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Lesson Discussion</Link>
                                        <Link to="/media/churchChoir" className="block text-md font-light hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Church Choir</Link>
                                        <Link to="/media/youthChoir" className="block text-md font-light hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Youth Choir</Link>
                                        <Link to="/media/ambChoir" className="block text-md font-light hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Ambassador Choir</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='hover:cursor-pointer hover:text-[#F0B323] py-4 transition-colors duration-300'>
                            <NavLink to="/events"
                                className={({ isActive }) => [
                                    "my-auto text-white", isActive ? " text-[#F0B323]" : ""
                                ]}
                            >
                                Events
                            </NavLink>
                        </li>
                        <li className='hover:cursor-pointer hover:text-[#F0B323] py-4 transition-colors duration-300'>
                            <NavLink to="/prayers"
                                className={({ isActive }) => [
                                    "my-auto text-white", isActive ? " text-[#F0B323]" : ""
                                ]}
                            >
                                Prayers
                            </NavLink>
                        </li>
                        <li className='hover:text-Main-400 transition-colors duration-300'>
                            <div className='relative text-left inline-block group'>
                                <div>
                                    <button className='hover:cursor-pointer py-4'>Resources</button>
                                </div>
                                <div className='hidden bg-Main-400 text-black absolute origin-top -left-[40px] top-[55px] text-left group-hover:block transition-all duration-300'>
                                    <div className="w-[190px] divide-y" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link to="/" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Downloads</Link>
                                        <Link to="/blog" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Blogs</Link>
                                        <Link to="/childregistration" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Dedication Form</Link>
                                        <Link to="" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem"> Bennovolence Form</Link>
                                        <Link to="/churchLibrary" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Library</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='hover:cursor-pointer hover:text-[#F0B323] transition-colors duration-300'>
                            <div className='relative text-left inline-block group'>
                                <div>
                                    <button className='py-4'>Ministries</button>
                                </div>
                                <div className='hidden bg-Main-400 text-black absolute origin-top -left-[40px] top-[55px] group-hover:block transition-all duration-300'>
                                    <div className=" w-[190px] divide-y" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link to="/adventurersClub" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Adventurers Club</Link>
                                        <Link to="/pathfindersClub" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Pathfinders Club</Link>
                                        <Link to="/ambassadorsClub" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Ambassdaors Club</Link>
                                        <Link to="/youthsCorner" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Youth's Corner</Link>
                                    
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='hover:cursor-pointer hover:text-[#F0B323] transition-colors duration-300 py-4'>
                            <NavLink to="/contactUs" 
                                className={({ isActive }) => [
                                    "my-auto text-white", isActive ? " text-[#F0B323]" : ""
                                ]}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </header>
                <div className=''>
                    <button onClick={GivingClick} className='px-4 py-2 border border-[#F0B323] text-white text-md font-semibold hover:bg-[#F0B323] transition-colors duration-300'>Worship In Giving</button>
                </div>
            </nav>
        </>
    );
}

const NavBar = () => {
    return (
        <>
            <div className="md:hidden">
                <NavSm />
            </div>
            <div className="hidden md:block lg:hidden">
                <NavMd />
            </div>
            <div className="hidden lg:block">
                <NavLg />
            </div>
        </>
    );
}

export default NavBar;