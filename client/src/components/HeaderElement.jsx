import React from 'react'


function HeaderElement(props) {
    let {icon, title, additionalInfo} = props.icon
    return (
        <div className="flex items-center mr-2">
            <img src={icon} alt={icon} className="w-6 h-6 " />
            <div className="ml-2">
                <p>{title}</p>
                <p className="text-xs font-thin">{additionalInfo}</p>
            </div>
        </div>
    );
}

export default HeaderElement;