import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex flex-col md:flex-row justify-between items-center md:mx-20 py-5'>
            <div className="logo">
                <h1 className='text-4xl font-bold mb-7 flex items-center justify-between gap-12'>
                    <div>
                        Nav
                        <span className='text-purple-700'>Bar</span>
                    </div>
                    <div className='cursor-pointer md:hidden' onClick={()=> setOpen(!open)}>
                        <span>{open == true ? <XMarkIcon className='h-8'></XMarkIcon> : <Bars3Icon className='h-8'></Bars3Icon>}</span>
                    </div>
                </h1>
            </div>
            <ul className='flex flex-col items-center md:flex-row gap-5'>
                <li className='mb-5 md:mb-0'>
                    <a href="" className='px-5 py-3 hover:bg-purple-600 hover:text-white rounded-lg'>Home</a>
                </li>
                <li className='mb-5 md:mb-0'>
                    <a href="" className='px-5 py-3 hover:bg-purple-600 hover:text-white rounded-lg'>Latest</a>
                </li>
                <li className='mb-5 md:mb-0'>
                    <a href="" className='px-5 py-3 hover:bg-purple-600 hover:text-white rounded-lg'>Product</a>
                </li>
                <li className='mb-5 md:mb-0'>
                    <a href="" className='px-5 py-3 hover:bg-purple-600 hover:text-white rounded-lg'>Contact Us</a>
                </li>
                <li className='mb-5 md:mb-0'>
                    <a href="" className='px-5 py-3 hover:bg-purple-600 hover:text-white rounded-lg'>Log In</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;