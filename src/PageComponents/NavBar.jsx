import React from 'react';

function NavBar() {
    return (
        
            <div className='flex justify-between items-center w-[80%] mx-auto py-4'>
                <div className=''><img src="/images/logo.png" alt="" /></div>
                <div className='flex gap-4 items-center justify-center '>
                    <ul className=' list-none gap-10 items-center hidden sm:flex '>
                        <li className='text-black100 font-poppins font-medium hover:text-lightBlue hover:cursor-pointer'>Features</li>
                        <li  className='text-black100 font-poppins font-medium hover:text-lightBlue hover:cursor-pointer' >About Us</li>
                        <li className='text-black100 font-poppins font-medium hover:text-lightBlue hover:cursor-pointer'>Blog</li>
                        <li className='text-black100 font-poppins font-medium bg-lightGray p-2 rounded-md hover:bg-lightBlue hover:cursor-pointer' >
                        Log in
                    </li>
                    </ul>

                    

                    <div className='block sm:hidden'>
                        <ion-icon name="menu-outline" ></ion-icon>
                    </div>

                </div>
            </div>
        
    );
}

export default NavBar;