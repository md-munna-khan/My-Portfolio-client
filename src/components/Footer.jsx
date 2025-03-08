import React from 'react';
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div className='bg-gray-700 text-white rounded-lg '>
            <img className='mx-auto pt-4 w-60' src={logo} alt="" />
           
           <div className='text-center pb-8'>
           <p>Serving Dhaka, Badda with dedication and excellence</p>
           <p>Copyright © 2025 - All right reserved</p>
           </div>
        </div>
    );
};

export default Footer;

