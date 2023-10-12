import React, { useState } from 'react'
import { Button, Drawer, Radio, Space } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';
import Services from './Services/Services';
import Process from './Process/Process';
import Category from './Categories/Category';
import Mail from './Mail/Mail';
import Footer from './Footer';
import MainBlog from './Blog/MainBlog';

function Layout() {

    const [open, setOpen] = useState(false);
    const [selectedLink, setSelectedLink] = useState(null);
    const [placement, setPlacement] = useState('right');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    return (
        <div className="container min-w-full">
            <div className="grid grid-cols-2 px-2 py-2 border-b-[0.5px] md:grid-cols-5 md:px-10 xl:px-20">
                <div className='flex md:col-span-1 '>
                    <Link to="/">
                        <div className='flex shrink-0 bg-[#545b77] px-2 justify-start text-sm items-center text-gray-600 hover:shadow-sm hover:shadow-black lg:text-xl xl:text-xl 2xl:text-2xl'>
                            <p className='text-xl text-white font-medium'><span className='text-2xl '>F</span>ashin<span className='text-2xl'>B</span>uzz</p>
                        </div>
                    </Link>
                </div>
                <div className='grid md:col-span-4'>

                    <div className='flex justify-end items-center md:hidden'>

                        <i class="fa fa-bars text-[#545B77]" aria-hidden="true" onClick={showDrawer}></i>

                        <Drawer
                            title="FashinBuzz"
                            placement={placement}
                            closable={false}
                            onClose={onClose}
                            open={open}
                            key={placement}
                            className='relative'
                        >
                            <Link to="/" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-sm items-center mb-3 text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>Home</p>
                                </div>
                            </Link>
                            <Link to="/about" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-sm items-center mb-3 text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>About Us</p>
                                </div>
                            </Link>
                            <Link to="/blog" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-sm items-center mb-3 text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>Blog</p>
                                </div>
                            </Link>
                            <Link to="/service" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-sm items-center mb-3 text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>Our Services</p>
                                </div>
                            </Link>
                            <Link to="/process" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-sm items-center mb-3 text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>Process</p>
                                </div>
                            </Link>
                            <Link to="/category" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-sm items-center mb-3 text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>Categories</p>
                                </div>
                            </Link>
                            <Link to="/connect" onClick={() => setOpen(false)}>
                                <div className='flex shrink-0 justify-start  text-sm items-center mb-3 text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                    <p className='font-medium  '>Connect</p>
                                </div>
                            </Link>
                            <button onClick={() => setOpen(false)} className='border border-black rounded-md px-3 py-1 absolute bottom-5 right-5'>close</button>
                        </Drawer>
                    </div>

                    <div className='hidden md:flex gap-8 justify-between items-center xl:text-2xl'>

                        <Link to="/" className={`${selectedLink === 'home' ? 'underline' : ''}`} onClick={() => {
                            setSelectedLink('home');
                            setOpen(false);
                        }}>
                            <div className='flex shrink-0 justify-start  text-sm items-center text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>Home</p>
                            </div>
                        </Link>
                        <Link
                            to="/about"
                            className={`${selectedLink === 'about' ? 'underline' : ''}`} onClick={() => {
                                setSelectedLink('about');
                                setOpen(false);
                            }} >
                            <div className='flex shrink-0 justify-start  text-sm items-center text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>About Us</p>
                            </div>
                        </Link>
                        <Link to="/blog"
                            className={`${selectedLink === 'blog' ? 'underline' : ''}`} onClick={() => {
                                setSelectedLink('blog');
                                setOpen(false);
                            }} >
                            <div className='flex shrink-0 justify-start  text-sm items-center text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>Blog</p>
                            </div>
                        </Link>
                        <Link to="/service"
                            className={`${selectedLink === 'service' ? 'underline' : ''}`} onClick={() => {
                                setSelectedLink('service');
                                setOpen(false);
                            }} >
                            <div className='flex shrink-0 justify-start  text-sm items-center text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>Our Services</p>
                            </div>
                        </Link>
                        <Link to="/process"
                            className={`${selectedLink === 'process' ? 'underline' : ''}`} onClick={() => {
                                setSelectedLink('process');
                                setOpen(false);
                            }} >
                            <div className='flex shrink-0 justify-start  text-sm items-center text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>Process</p>
                            </div>
                        </Link>
                        <Link to="/category"
                            className={`${selectedLink === 'categ' ? 'underline' : ''}`} onClick={() => {
                                setSelectedLink('categ');
                                setOpen(false);
                            }} >
                            <div className='flex shrink-0 justify-start  text-sm items-center text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>Categories</p>
                            </div>
                        </Link>
                        <Link to="/connect"
                            className={`${selectedLink === 'connect' ? 'underline' : ''}`} onClick={() => {
                                setSelectedLink('connect');
                                setOpen(false);
                            }} >
                            <div className='flex shrink-0 justify-start  text-sm items-center text-gray-600 hover:text-black hover:duration-500 lg:text-xl xl:text-xl 2xl:text-2xl'>
                                <p className='font-medium  '>Connect with us</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>

            <div className="grid px-2 py-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<MainBlog />} />
                    <Route path="/service" element={<Services />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/connect" element={<Mail />} />
                    <Route path="/blog-" element={<Blog />} />
                </Routes>
            </div>

            <div className=''>
                <Footer />
            </div>
        </div>
    )
}

export default Layout