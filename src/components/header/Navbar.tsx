// import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {navLinks, NavLink} from './constants';  
import logo from "../../assets/NVP.gif";
// import { menu, close} from '../../assets';

const Navbar = () => {

    return (
        <nav className={`flex items-center py-2 top-0 z-20 `}> 
            <div className="w-full xl max-w-7xl flex justify-between items-center">
                <Link to="/"  className="flex items-center gap-2" 
                    // onClick={() => {
                    //     setActive("");
                    //     window.scrollTo(0,0); }}
                        > 
                
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                </Link>
                <p className='mx-4 font-bold'>Phước</p>
                <ul className=' hidden list-none sm:flex flex-row gap-5'>
                    {navLinks.map((link: NavLink) => (
                        <li key={link.id} className=" hover:text-gray-400">
                            <AnchorLink className="text-lg m-6 group relative w-max" href={`#${link.id}`}>
                                <span>{link.title}</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                            </AnchorLink>
                            {/* <a href={`#${link.id}`}>{link.title}</a> */}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;