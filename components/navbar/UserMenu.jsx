import React, { useState, useEffect, useRef } from 'react';
import Icon from '../Icon';
import UserMenuDropdown from './UserMenuDropdown';
import { motion } from 'framer-motion';

const UserMenu = ({ user, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle click outside to close the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    if (!user) {
        return (
            <a href='system' className="bg-red-950 hover:bg-red-900 text-neutral-100 px-6 py-2 rounded-sm transition">
                Login
            </a>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button 
                className="flex items-center gap-1"
                onClick={toggleDropdown}
            >
                <img src="uploads/poyraz avsever-1725549963000.png" alt="User" className="w-8 h-8 rounded-full" />
                <span>{user.name}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Icon iconName="MdOutlineArrowDropDown" iconType="md" classname="text-white text-xl" />
                </motion.div>
            </button>
            {isOpen && (
                <UserMenuDropdown user={user} onLogout={onLogout} />
            )}
        </div>
    );
};

export default UserMenu;
