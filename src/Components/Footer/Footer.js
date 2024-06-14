import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className='bg-Main-700 w-[95%] hidden mx-auto p-5 rounded-t-xl'>
            <div className=''>
                <h1 className='text-xl font-semibold'>Quick Links</h1>
                <hr className='border-[1px] border-white w-[55px]'/>
                <div className='text-md py-5'>
                    <ul>
                        <li><Link to="">Events</Link></li>
                        <li><Link to="">Child Dediaction Form</Link></li>
                        <li><Link to="">Library</Link></li>
                        <li><Link to="">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  );
}

export default Footer;