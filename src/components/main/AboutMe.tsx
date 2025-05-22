import { TypeAnimation } from 'react-type-animation';
import {useState} from 'react';
import {motion} from 'framer-motion';
import ComputerCanvas from './3DTest';
import SkeletonLoading from "../SkeletonLoading";
import { useLoading } from '../../LoadingContext';

export default function AboutMe() {

    const loading = useLoading();
    const [textColor, setTextColor] = useState('red');
    
    return loading ? (
        <section className=" about-me m-15 md:m-24 h-auto" id='about'>
            <div className="about-title justify-items-center text-gray-700 text-3xl font-bold pb-6">
                <SkeletonLoading className="!w-[150px] h-full "/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-0 h-full">
                <div className=" md:px-15 py-4 rounded-2xl">
                    <div className="flex">
                        <div className='font-bold ' style={{fontSize: '25px'}}>
                            <SkeletonLoading className="w-full h-full "/>
                        </div>
                        <div className='font-bold italic mx-2' style={{fontSize: '25px',color: textColor}}>
                            <SkeletonLoading className="!w-[300px] h-full "/>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-700 text-justify w-full h-full" data-aos="fade-up">                
                        <SkeletonLoading className="w-full h-[80px] sm:h-[100px] md:h-[120px] lg:h-[160px] "/>
                    </p>
                </div>
                {/* load 3d three js */}
                <motion.div className='sm:px-15 sm:py-4'>
                    <SkeletonLoading className="w-full h-[80px] sm:h-[100px] md:h-[120px] lg:h-[230px]  "/>
                </motion.div>
            </div>
        </section>
    ):(
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
                    <p className="mt-4 text-gray-700 text-justify" data-aos="fade-up">I am a Backend Developer with 6 months of experience specializing in Laravel. 
                        I have experience working with MySQL and MongoDB, handling complex data structures, and integrating third-party services. 
                        My strengths include developing RESTful APIs, building e-commerce websites, and optimizing backend performance to ensure system stability and scalability.
                        In addition to my backend expertise, I also have experience with React.js and Vue.js, allowing me to create dynamic, 
                        interactive user interfaces that integrate seamlessly with backend systems when needed.
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
