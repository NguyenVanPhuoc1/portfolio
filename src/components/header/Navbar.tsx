import { useState } from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {navLinks, NavLink} from './constants';  
import logo from "../../assets/NVP.gif";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box className="w-80" role="presentation" onClick={toggleDrawer(false)}> 
            <ul className={`${open ? "block" : "flex" } sm:flex list-none sm:flex-row gap-5`}>
                {navLinks.map((link: NavLink) => (
                    <li key={link.id} className=" hover:text-gray-400 items-center flex w-full text-center">
                        <AnchorLink className="text-lg m-6 group relative w-full" href={`#${link.id}`}>
                            <span>{link.title}</span>
                        </AnchorLink>
                        {/* <a href={`#${link.id}`}>{link.title}</a> */}
                    </li>
                ))}
            </ul>   
        </Box>
    );
    return (
        <nav className={`flex items-center py-2 top-0 z-20 `}> 
            <div className="block sm:hidden">
                <Button onClick={toggleDrawer(true)}>
                    <Hamburger toggled={open} size={20} toggle={setOpen} />
                </Button>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
            <div className="w-full xl max-w-7xl flex justify-between items-center">
                <Link to="/"  className="flex items-center gap-2" > 
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                </Link>
                <p className='mx-4 font-bold'>Phước</p>
                <ul className={`hidden sm:flex list-none sm:flex-row gap-5`}>
                {navLinks.map((link: NavLink) => (
                    <li key={link.id} className=" hover:text-gray-400 items-center flex w-full justify-center">
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
