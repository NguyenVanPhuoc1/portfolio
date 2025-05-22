// import {Link} from 'react-router-dom';
import { useEffect } from "react";
import {ProjectItem, Projects} from './ProjectCons';
import {Link} from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
// import Zoom from '@mui/material/Zoom';
import AOS from "aos";
import SkeletonLoading from "../SkeletonLoading";
import { useLoading } from '../../LoadingContext';
import 'aos/dist/aos.css';

const Project = () => {
    const loading = useLoading();
    useEffect(function () {
        AOS.init();
    }, []);
    return loading ? (
        <section className=" about-me lg:m-24" id='project'>
            <div className="about-title justify-items-center text-gray-700 text-3xl font-bold pb-6">
                <SkeletonLoading className="!w-[150px] h-full "/>
            </div>
            <div className="title-desc justify-items-center text-gray-400 font-bold pb-6">
                <SkeletonLoading className="w-full h-full "/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15"  >
                {/* item */}
                {Projects.map((item: ProjectItem, index: number) => (
                    // <Zoom in={true} timeout={500} style={{ transitionDelay: `${index * 200}ms` }}>
                        <div className="border-3 border-blue-950 p-4 rounded fade-right " key={item.id} data-aos="fade-up" data-aos-delay={index * 200} >
                            <div className="p-3 relative group ">
                                <SkeletonLoading className=' block rounded object-cover w-full !h-[150px]' />
                            </div>
                            <div className=" justify-items-center ">
                                <h4 className="font-bold p-name text-indigo-400">
                                    <SkeletonLoading className="!w-[150px] h-full "/>
                                </h4>
                                <p >
                                    <SkeletonLoading className="!w-[350px] h-[40px] md:h-[60px] lg:h-[80px]"/>
                                </p>
                                <h4 className="font-bold p-tech text-justify whitespace-pre-line">
                                    <SkeletonLoading className="!w-[350px] h-full "/>
                                </h4>
                            </div>
                        </div>
                    // </Zoom>
                ))}
            </div>
        </section>
    ) : (
        <section className=" about-me lg:m-24" id='project'>
            <div className="about-title text-center text-gray-700 text-3xl font-bold pb-6">
                Project
            </div>
            <div className="title-desc text-center text-gray-400 font-bold pb-6">
                Here are some projects I have worked on as a freelancer.This projects build interface for Users and Admin for managers.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15"  >
                {/* item */}
                {Projects.map((item: ProjectItem, index: number) => (
                    // <Zoom in={true} timeout={500} style={{ transitionDelay: `${index * 200}ms` }}>
                        <div className="border-3 border-blue-950 p-4 rounded fade-right " key={item.id} data-aos="fade-up" data-aos-delay={index * 200} >
                            <div className="p-3 relative group cursor-pointer">
                                <img className='transition duration-300 group-hover:blur-sm block rounded object-cover w-full max-h-4/12' 
                                src={`${item.image}`} alt="Project Image" />
                                <div
                                    className="absolute inset-0 flex items-center cursor-pointer justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <Link to={item.link_git} className="bg-gray-800 flex items-center underline text-white mx-5 px-4 py-2 rounded cursor-pointer" target='_blank'>
                                            GitHub  <GoArrowUpRight />
                                        </Link>
                                        <Link to={item.link_demo} className="bg-gray-800 flex items-center underline text-white mx-5 px-4 py-2 rounded cursor-pointer" target='_blank'>
                                            Demo <GoArrowUpRight />
                                        </Link>
                                </div>
                            </div>
                            <div className="p-content text-center">
                                <h4 className="font-bold p-name text-indigo-400">{item.name}</h4>
                                <p className="p-desc py-3 text-justify">{item.desc}</p>
                                <h4 className="font-bold p-tech text-justify whitespace-pre-line">Tech:  
                                    <span className='text-indigo-400 pl-3'>{item.tech}</span>
                                </h4>
                            </div>
                        </div>
                    // </Zoom>
                ))}
            </div>
        </section>
    );
}

export default Project;