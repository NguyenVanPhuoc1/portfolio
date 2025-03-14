import { TypeAnimation } from 'react-type-animation';
import {useState} from 'react';
import {motion} from 'framer-motion';
// import { motion, useScroll, useTransform } from "framer-motion";
import ComputerCanvas from './3DTest';

export default function AboutMe() {

    const [textColor, setTextColor] = useState('red');
    // const { scrollYProgress } = useScroll();

    // Chuyển đổi scrollY thành góc xoay
    // const rotateY = useTransform(scrollYProgress, [0, 1], [-90, 90]);
    return (
        <section className=" about-me m-15 md:m-24 h-auto" id='about'>
            <div className="about-title text-center text-gray-700 text-3xl font-bold pb-6">
                About Me
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-0 h-full">
                <div className=" md:px-15 py-4 rounded-2xl">
                    <div className="flex">
                        <div className='font-bold ' style={{fontSize: '25px'}}>
                            Hi, 
                        </div>
                        <div className='font-bold italic mx-2' style={{fontSize: '25px',color: textColor}}>
                            <TypeAnimation
                                sequence={[
                                'Welcome My Portfolio',
                                800,
                                () => setTextColor('aqua'),
                                "I'm Nguyen Van Phuoc",
                                800,
                                () => setTextColor('deeppink'),
                                "I'm BackEnd Developer",
                                1000,
                                () => setTextColor('darkkhaki'),
                                '',
                                ]}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <p className="mt-4 text-gray-700 text-justify" data-aos="fade-up">I am a Front-end Developer with experience in ReactJs and Vue.js, alongside 6 months of backend development 
                        using Laravel and Node.js. My ambition is to enhance user experience, optimize performance, and improve page load speed while building scalable and efficient applications.
                        I have hands-on experience working with MySQL and MongoDB, integrating APIs, and managing data effectively
                        I'm excited about new opportunities and challenges where i can leverage my skill and 
                        learn from experience from colleagues in the industry, you can contact me at nguyenvanphuoc031123@gmail.com 🎉</p>
                </div>
                {/* load 3d three js */}
                <motion.div className='sm:px-15 sm:py-4'>
                    <ComputerCanvas />
                </motion.div>
            </div>
        </section>
    );
}
