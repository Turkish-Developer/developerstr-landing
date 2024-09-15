import Link from 'next/link';


const NavLink = ({ href, children }) => (
    <Link href={href} className="hover:text-neutral-50 text-neutral-400 transition duration-300">
        {children}
    </Link>
);

export default NavLink