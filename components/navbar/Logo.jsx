import Icon from "../Icon";

const Logo = () => (
    <div className="flex items-center gap-2 space-x-2">
        <Icon iconType="LOGO" iconName="Logo"/>
        <span className="text-base md:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-red-950 to-white">Turkish Developers</span>
    </div>
);

export default Logo