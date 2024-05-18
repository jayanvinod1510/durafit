import React from "react";
import {Animated} from "react-animated-css";

const SideNavBar = ({ isOpen, onClose }) => {
    const navigationItems = [
        { name: 'Home', route: '/' },
        { name: 'Black Edition', route: '#/blackedition' },
        { name: 'Mattress', route: '#/mattress' },
        { name: 'Pillows', route: '#/pillows' },
        { name: 'Cushioning', route: '#/cushioning' },
        { name: 'About Us', route: '#/aboutus' },
        { name: 'Contact Us', route: '#/contactus' },
        // { name: 'FAQs', route: '/' },
    ]
    return (
        <Animated style={{"width": "100%","animation-delay":"300ms"}} animationIn="slideIn" animationOut="slideOut" isVisible={isOpen}>
        {/* <Animated animationIn="slideIn"  animationOut="slideOut" animationInDuration={5000} animationOutDuration={7000} animationInDelay={7000} isVisible={isOpen}> */}
        <div class="hidden md:block">
            {/* Side Navigation Bar */}
            <div
                className={`${isOpen ? "block fixed z-10 inset-0 bg-gray-900 opacity-70 transition-opacity" : "hidden"
                    }`}
                onClick={onClose}
            ></div>
            <div
                className={`${isOpen ? "translate-x-0 ease-out" : "hidden -translate-x-full ease-in"
                    } fixed z-20 inset-y-0 left-0 w-[286px] transition duration-300 transform bg-[#FFFFFF] overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}
            >
                {/* <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <button
              className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
              onClick={onClose}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 1 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </button>
          </div>
        </div> */}

                <nav className="mt-[100px] mx-[30px]">
                    {navigationItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.route}
                            className="block"
                        >
                            <div className="flex items-center justify-between my-3 py-3 text-white border-[#D1D1D1] border-b">

                                {item.name}

                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.71967 0.46967C1.01256 0.176777 1.48744 0.176777 1.78033 0.46967L5.78033 4.46967C6.07322 4.76256 6.07322 5.23744 5.78033 5.53033L1.78033 9.53033C1.48744 9.82322 1.01256 9.82322 0.71967 9.53033C0.426777 9.23744 0.426777 8.76256 0.71967 8.46967L4.18934 5L0.71967 1.53033C0.426777 1.23744 0.426777 0.762563 0.71967 0.46967Z" fill="#2A2A2A" />
                                </svg>

                            </div>
                        </a>

                    ))}
                </nav>
            </div>
        </div>
        </Animated>
    );
};

export default SideNavBar;
