import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = ({ user, onLogout }) => {
    const [menuOpen, setMenuOpen] = useState(false); // Burger menü kontrolü
    const [scrolling, setScrolling] = useState(false); // Scroll durumu kontrolü

    // Scroll event handler
    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 10); // 10px'den fazla kaydırıldıysa
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${scrolling ? 'bg-neutral-900 bg-opacity-95 shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto flex items-center justify-between p-4">
                <a href="/"><Logo/></a>
                <div>
                    <a href="/futures" className='hover:text-neutral-50 text-neutral-400 transition duration-300'>Özellikler</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
