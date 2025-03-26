import { GoDownload } from "react-icons/go";
import {Link} from 'react-router-dom';


export default function Contact() {
    return (
        <section className="relative about-me md:m-18 h-auto" id='contact'>
            <div className="about-title text-center text-gray-700 text-3xl font-bold p-6">
                Contact
            </div>
            <div className="block sm:flex justify-between sm:px-15 py-5 font-bold text-sm text-center">
                <Link to="../cv/vanphuoc-cv.pdf" target="_blank" download className="inline-flex items-center cursor-pointer p-3 bg-sky-600 underline ">
                    <div className="icon"> < GoDownload /></div>
                    <button className="cursor-pointer" >Download CV</button>
                </Link>
                <div className="info items-center flex justify-between my-4">
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
