import React, { useState, useEffect } from 'react';


import { FaArrowUp } from 'react-icons/fa'; 

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 550) { // Show button after scrolling down 300px
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-[#007681] text-white p-3 rounded-md shadow-lg hover:bg-black transition-all duration-300"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
