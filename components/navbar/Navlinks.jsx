import NavLink from "./NavLink";

const NavLinks = () => (
    <div className="flex flex-col md:flex-row gap-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/events">Events</NavLink>
        <NavLink href="/questions">Questions</NavLink>
        <NavLink href="/posts">Posts</NavLink>
        <NavLink href="/colleague">Colleague</NavLink>
    </div>
);

export default NavLinks;
