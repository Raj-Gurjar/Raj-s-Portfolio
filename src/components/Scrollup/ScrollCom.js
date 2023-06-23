import React, { useState, useRef, useEffect } from 'react';
import './Scroll.scss';

import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollCom = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollRef = useRef(null);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 600);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`scroll_sec ${isVisible ? 'visible' : ''}`}>
            <div className="scroll_box" onClick={handleScrollToTop} ref={scrollRef}>
                <div className="up_icon">
                    <FaAngleDoubleUp />
                </div>
            </div>
        </div>
    );
};

export default ScrollCom;
