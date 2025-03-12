import { GoDownload } from "react-icons/go";
import {Link} from 'react-router-dom';


export default function Contact() {
    return (
        <section className="relative about-me lg:m-18 h-auto" id='contact'>
            <div className="about-title text-center text-gray-700 text-3xl font-bold pb-6">
                Contact
            </div>
            <div className="flex justify-between px-15 py-10 font-bold text-sm">
                <Link to="../cv/Cv-Fresher.pdf" target="_blank" download className="flex justify-between items-center cursor-pointer p-3 bg-sky-600 underline ">
                    <div className="icon"> < GoDownload /></div>
                    <button className="cursor-pointer" >Download File</button>
                </Link>
                <div className="info items-center flex">
                    <p className="px-5 phone">
                        +84 707 958 117
                    </p>
                    <p className="px-5 email">
                        nguyenvanphuoc031123@gmail.com
                    </p>
                </div>
            </div>
            <div className="absolute -bottom-1 w-full h-0.5 bg-gray-700 "></div>
        </section>);
}