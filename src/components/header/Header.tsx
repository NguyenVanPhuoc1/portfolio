import React, { useState, useEffect } from "react";
import { Toggle } from './Toggle';
import Navbar from './Navbar';

interface HeaderProps{
    isChecked: boolean;
    handleChange: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleChange, isChecked }) => {
    const [isScroll, setScroll] = useState(false);
    
    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 50){
                setScroll(true);
            }else{
                setScroll(false);
            }
            // console.log(window.scrollY);

        }
        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll)}
    });
    return (
        <div className={`container mx-auto px-5 lg:px-20 flex justify-between items-center header  fixed max-w-full z-20 ${ isScroll ? "bg-gradient-to-b from-white to-transparent" : " bg-gradient"}`}>
            <div className="navbar md-block none">
                <Navbar />
            </div>
            <div>
                <Toggle isChecked={isChecked} handleChange={handleChange} />
            </div>
        </div>
    )
}

export default Header;