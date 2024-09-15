import React from "react";
import * as Ionic5 from "react-icons/io5";
import * as Ai from "react-icons/ai";
import * as Ci from "react-icons/ci";
import * as Di from "react-icons/di";
import * as Si from "react-icons/si";
import * as Fi from "react-icons/fi";
import * as Fa from "react-icons/fa";
import * as Go from "react-icons/go"
import * as Md from "react-icons/md"
const Icon = (props) => {

    const {
        iconName,
        logoColor1 = "#950101",
        logoColor2 = "#171717",
        iconType,
        iconColor = "text-inherit",
        classname = "",
    } = props;

    let icon = "";
    if (iconName !== null && iconName !== "") {
        switch (iconType) {
            case "ionic5":
                icon = React.createElement(Ionic5[iconName]);
                break;
            case "ai":
                icon = React.createElement(Ai[iconName]);
                break;
			case "di":
				icon = React.createElement(Di[iconName]);
				break;
            case "md":
                icon = React.createElement(Md[iconName]);
                break;
            case "si":
                icon = React.createElement(Si[iconName]);
                break;
            case "ci":
                icon = React.createElement(Ci[iconName]);
                break;
            case "fi":
                icon = React.createElement(Fi[iconName]);
                break;
            case "fa":
                icon = React.createElement(Fa[iconName]);
                break;
            case "go":
                icon = React.createElement(Go[iconName]);
                break;
            case "LOGO":
                icon = 
                <svg width="24" height="24" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="19" height="19" rx="9.5" fill="url(#paint0_linear_20_312)"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.15625 9.46262L8.72162 5.05843C8.72162 5.05843 9.53799 6.0575 8.85051 6.92739C8.16302 7.79759 6.40141 9.48384 6.40141 9.48384L8.59274 11.8041C8.59274 11.8041 9.69917 12.932 8.67856 13.9416L4.15625 9.46231V9.46262ZM14.8438 9.46262L10.2784 5.05843C10.2784 5.05843 9.46201 6.0575 10.1495 6.92739C10.837 7.79759 12.5986 9.48384 12.5986 9.48384L10.4073 11.8041C10.4073 11.8041 9.30083 12.932 10.3214 13.9416L14.8438 9.46231V9.46262ZM8.35589 9.21869L9.09505 9.06797L9.47216 8.39679L9.84159 9.0529L10.6109 9.22638L10.1433 9.78436L10.1661 10.5611L9.50261 10.2593L8.77884 10.5912L8.83174 9.79944L8.35681 9.21869H8.35589Z" fill={logoColor1}/>
                    <defs>
                        <linearGradient id="paint0_linear_20_312" x1="3.62193e-07" y1="3" x2="24.7396" y2="29.6875" gradientUnits="userSpaceOnUse">
                            <stop stopColor={logoColor2}/>
                            <stop offset="1" stopColor="#950101"/>
                        </linearGradient>
                    </defs>
                </svg>
                
                break;
            default:
                break;
        }
    }
    
    return (
        <span className={`${classname.toString()} ${iconColor.toString()}`}>
            {icon}
        </span>
    );
};

export default Icon;