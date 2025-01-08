import React, {useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

// Logo
import Logo from '../../Assets/Logos/wsdalogo6.png';

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
            <nav className={`bg-[rgba(0,118,129,0.5)] h-[100px] w-full bg-opacity-50 flex justify-center items-center space-x-[3.125rem] p-4 fixed top-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[rgba(0,118,129,1)] bg-opacity-100 h-[5.313rem]' : ''}`}>
                <div className={`w-[295px] h-[80px] py-auto transition-all duration-700 ease-in-out ${scrolled ? 'max-w-[250px] max-h-[70px] my-auto' : ''}`}>
                    <Link to="/">
                        <img 
                            src={Logo} 
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
                                <div className='hidden bg-[#d79b0f] absolute origin-top -left-[40px] top-[55px] group-hover:block transition-all duration-300 text-black'>
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
                                <div className='hidden bg-[#d79b0f] text-black absolute origin-top -left-[40px] top-[55px] text-left group-hover:block transition-all duration-300'>
                                    <div className="w-[250px] divide-y" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link to="/" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Downloads</Link>
                                        <Link to="/blog" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Blogs</Link>
                                        <Link to="/childregistration" className="block text-md font-light  hover:text-white hover:bg-Main-700 px-3 py-2" role="menuitem">Child Dedication Form</Link>
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
                                <div className='hidden bg-[#d79b0f] text-black absolute origin-top -left-[40px] top-[55px] group-hover:block transition-all duration-300'>
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

export default NavLg;