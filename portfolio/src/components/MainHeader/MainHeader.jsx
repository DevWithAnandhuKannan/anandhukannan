import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Instagram, Send, MapPin, Coffee } from "lucide-react";

import { IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const menuItems = [
  {
    title: "Home",
    link: "/home",
    subOptions: [
      { title: "Company info", link: "c" },
    ],
  },
  {
    title: "Services",
    link: "/services",
    subOptions: [
      { title: "Web Designing", link: "/services/mac" },
      { title: "Web Applications", link: "/services/ipad" },
      { title: "Mobile Apps", link: "/services/iphone" },
      { title: "AI / ML Models", link: "/services/iphone" },
    ],
  },
  {
    title: "Projects",
    link: "/projects",
     subOptions: [
      { title: "Web Designing", link: "/services/mac" },
      { title: "Web Applications", link: "/services/ipad" },
      { title: "Mobile Apps", link: "/services/iphone" },
      { title: "AI / ML Models", link: "/services/iphone" },
    ],
  },
];

const MainHeader = ({ setHomeMenuOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [HomeMenuVisible, setHomeMenuVisible] = useState(false); 
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [showDropdown, setShowDropdown] = useState(true);
  const [storeMenuOpen, setStoreMenuOpen] = useState(false);
  var [selectedOption, setSelectedOption] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = () => {
    if (searchOpen) {
      setSearchOpen(false);
      setHomeMenuOpen(false);
    } else {
      setSearchOpen(true);
      setHomeMenuOpen(true);
    }
  }

  const openStoreMenu = () => {
    setStoreMenuOpen(true);
    setShowDropdown(true);
  };

  const handleStoreOptionClick = (option) => {
    closeStoreMenu();
  };

  const closeStoreMenu = () => {
    setStoreMenuOpen(false);
    setShowDropdown(false);
  };


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setHomeMenuVisible(menuOpen ? false : true); // Reset Home menu visibility when toggling the main menu
    setHomeMenuOpen(menuOpen ? false : true);
  };

  const handleMouseEnter = () => {
    setSearchOpen(false);
    setHomeMenuVisible(true);
    setHomeMenuOpen(true); // Update parent component state
  };

  const handleMouseLeave = () => {
    setHomeMenuVisible(false);
    setHomeMenuOpen(false); // Update parent component state
  };

  // Function to handle window resizing
  const calculateMobileView = () => {
    setIsMobileView(window.innerWidth < 768); // Update state based on window width

    // Close the menu when resizing to desktop view
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  // useEffect to listen to window resize events
  useEffect(() => {
    window.addEventListener("resize", calculateMobileView);
    return () => {
      window.removeEventListener("resize", calculateMobileView);
    };
  }, []);



  return (
    <header className="fixed top-0 left-0 w-full z-10 flex justify-center text-white bg-black/50 backdrop-blur-sm">

      <div className={`flex items-center justify-between h-11 mt-2 mx-[30px] w-[1090px]`}>

        <div>
          <h1 className="text-lg font-bold">KNEAZLE</h1>
        </div>

        {/* Desktop Links */}
        <div>
          <nav className="hidden md:flex space-x-8 font-light text-[13px]">
            <div
              className="group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-red-600">Home</button>
              {HomeMenuVisible && (
                <div className="absolute top-8 left-0 z-10 animate-fade-up">
                  <div className="text-left space-y-4 flex justify-center w-[100vw] px-6 pt-10">
                    <div className=" w-[1100px]">
                      <div className="flex flex-wrap gap-2 justify-between">
                        {menuItems.map((item, index) => (
                          <div
                            key={index}
                            className="w-[15vw] mt-10 rounded-lg shadow-lg p-1 text-white"
                          >
                            <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                            <a
                              href={item.link}
                              className="text-white-100 no-underline hover:text-red-600"
                            >
                              Visit {item.title}
                            </a>
                            {item.subOptions && (
                              <ul className="mt-3">
                                {item.subOptions.map((sub, subIndex) => (
                                  <li key={subIndex}>
                                    <a
                                      href={sub.link}
                                      className="text-white-100 hover:text-red-500 decoration-none no-underline"
                                    >
                                      {sub.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button className="hover:text-red-600">Services</button>
            <button className="hover:text-red-600">Products</button>
            <button className="hover:text-red-600">Projects</button>
          </nav>
        </div>



        {/* Social Media Links */}
        <div className="hidden md:flex space-x-4">
          <IoSearch size={20} onClick={() => openSearch()} />
          {searchOpen &&
            <div className="absolute top-8 left-0 z-10 h-[100vh] animate-fade-up ">
              <div className="text-left space-y-4 flex justify-center w-[100vw] px-6 pt-10">
                <div className=" w-[1100px] flex justify-center">
                  <div className="w-[100vw] flex flex-row justify-center items-center mt-20">
                    <div className="w-[3px] relative h-[4vh] bg-red-500 animate-ping"></div>
                    <div className=" pl-3 w-full h-[10vh]">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Return to search."
                        className="w-full h-[10vh] bg-transparent text-white placeholder:text-5xl placeholder:font-light placeholder:animate-pulse border-none outline-none caret-transparent text-5xl"
                      />

                    </div>
                  </div>

                </div>
              </div>
              <div className="w-[100vw] h-full flex flex-row justify-center items-center mt-20" onClick={() => openSearch()}>

              </div>
              
            </div>
            

          }

        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <IoMenu size={30} onClick={toggleMenu} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent text-white flex flex-col z-50`}>

          {/* Close Button */}
          <div className="flex justify-end mr-4 p-3">
            <IoClose size={35} onClick={toggleMenu} className="cursor-pointer" />
          </div>
        
          {/* Menu Content */}
          {!storeMenuOpen ? (
            <ul className="space-y-6 text-lg font-semibold mt-4 px-8">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center hover:text-red-600 cursor-pointer"
                  onClick={() => {
                    if (item.subOptions) {
                      openStoreMenu();
                      setSelectedOption(item.title);
                    }
                  }}
                >
                  {item.title}
                  {item.subOptions && <IoIosArrowForward size={20} />}
                </li>
              ))}
              <div>
          <div className="flex flex-wrap gap-4 mt-20">
            <a href="https://github.com/DevWithAnandhuKannan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/anandhu-kannan-b39845272/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com/Kneazllle" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Instagram size={20} />
            </a>
            <a href="mailto:connect.Anandhukannan@proton.me" className="text-gray-600 hover:text-black">
              <Mail size={20} />
            </a>
          </div>
        </div>
            </ul>
            
          ) : (
            // Nested 'Store' Menu with Animation

            <div className={`w-full px-8 ${showDropdown ? "dropdown-enter" : ""}`}>
              <div className="flex items-center mb-6">
                <IoIosArrowBack
                  size={25}
                  onClick={closeStoreMenu}
                  className="cursor-pointer"
                />
                {/* <h2 className="ml-4 text-3xl font-semibold">Submenu</h2> */}
              </div>
               
              <ul className="space-y-4 text-sm font-light">

                {menuItems
                  .find((item) => item.title === selectedOption)?.subOptions.map(
                    (subItem, index) => (
                      <li
                        key={index}
                        className="hover:text-red-600 cursor-pointer pl-4"
                        onClick={() => { handleStoreOptionClick(subItem.title) }}
                      >
                        {subItem.title}
                      </li>
                    )
                  )}
              </ul>
             
            </div>
          )}
          
        </div>
      )}
     
    </header>
  );
};

export default MainHeader;