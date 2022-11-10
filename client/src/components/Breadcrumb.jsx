import React from 'react';
import {Link} from "react-router-dom";

function Breadcrumb() {
    return (
        <nav className="bg-white px-5 py-3">
            <ol className="list-reset flex">
                <li><Link to="/" className="text-purple-600 hover:text-purple-700">Головна</Link></li>
                <li><span className="text-gray-500 mx-2">/</span></li>
                <li><Link to="/catalogue" className="text-purple-600 hover:text-purple-700">Каталог</Link></li>
                <li><span className="text-gray-500 mx-2">/</span></li>
                <li className="text-gray-500">Сукні</li>
            </ol>
        </nav>
    );
}

export default Breadcrumb;