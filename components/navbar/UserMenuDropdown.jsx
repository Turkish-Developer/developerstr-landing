import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const UserMenuDropdown = ({ onLogout, isMobile }) => {
    const user = useSelector((state) => state.user.user);
    const isAdmin = user?.isAdmin

    const linkStyle = 'px-4 py-2 hover:bg-neutral-800 transition cursor-pointer';

    return (
        <motion.div
            className={`${isMobile ? 'w-full' : 'absolute right-0 z-10 mt-2 w-48'} bg-neutral-950 text-neutral-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
        >
            <ul className={`flex flex-col ${isMobile ? "gap-3": "divide-y divide-neutral-800"}`}>
                <li className={`${linkStyle}`}>
                    <Link href={`/user/@${user?.username}`}>Your Profile</Link>
                </li>
                <li className={linkStyle}>
                    <Link href="/user/create-post">Create Post</Link>
                </li>
                <li className={linkStyle}>
                    <Link href="/user/ask-question">Ask Question</Link>
                </li>
                <li className={linkStyle}>
                    <Link href="/user/settings">Settings</Link>
                </li>
                {isAdmin && (
                    <li className={linkStyle}>
                        <Link href="/admin-panel">Admin Panel</Link>
                    </li>
                )}
                <li className={`bg-red-950 hover:!bg-red-700 ${linkStyle}`}>
                    <button onClick={onLogout} className="w-full text-left">Logout</button>
                </li>
            </ul>
        </motion.div>
    );
};

export default UserMenuDropdown;
