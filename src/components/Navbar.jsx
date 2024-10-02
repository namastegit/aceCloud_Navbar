
import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import QuickBooksHostingContent from './DropdownContent/QuickBooksHostingContent';
import SageApplicationHostingContent from './DropdownContent/SageApplicationHostingContent';
import TaxSoftwareHostingContent from './DropdownContent/TaxSoftwareHostingContent';
import PurchaseLicensesContent from './DropdownContent/PurchaseLicensesContent';
import CyberSecurityServicesContent from './DropdownContent/CyberSecurityServicesContent';
import CloudServicesContent from './DropdownContent/CloudServicesContent';
import PricingContent from './DropdownContent/PricingContent ';
import CompanyContent from './DropdownContent/CompanyContent';
import ResourcesContent from './DropdownContent/ResourcesContent';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState("QuickBooks Hosting");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseLeave = (event) => {
      if (navRef.current && !navRef.current.contains(event.relatedTarget)) {
        timeoutRef.current = setTimeout(() => {
          setOpenDropdown(null);
          setHoveredItem("QuickBooks Hosting");
        }, 100);
      }
    };

    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    const navElement = navRef.current;
    navElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      navElement.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(index);
  };

  const handleItemHover = (name) => {
    setHoveredItem(name);
  };

  const menuItems = [
    {
      title: "Accounting Solutions",
      dropdown: [
        { icon: "https://cdn-dagec.nitrocdn.com/ePzgLhhJwNotwOpRheNTTKSGfbIUvwur/assets/images/source/rev-d086c4e/www.acecloudhosting.com/wp-content/uploads/2023/06/application-hosting-menu-icon.svg", name: "QuickBooks Hosting", content: <QuickBooksHostingContent/> },
        { icon: "https://cdn-dagec.nitrocdn.com/ePzgLhhJwNotwOpRheNTTKSGfbIUvwur/assets/images/optimized/rev-d086c4e/www.acecloudhosting.com/wp-content/uploads/2023/09/sage-application-hosting-icon.png", name: "Sage Application Hosting", content: <SageApplicationHostingContent /> },
        {icon: "https://cdn-dagec.nitrocdn.com/ePzgLhhJwNotwOpRheNTTKSGfbIUvwur/assets/images/source/rev-d086c4e/www.acecloudhosting.com/wp-content/uploads/2023/06/tax-software-menu-icon.svg"  ,name: "Tax Software Hosting", content: <TaxSoftwareHostingContent /> },
        {icon: "https://cdn-dagec.nitrocdn.com/ePzgLhhJwNotwOpRheNTTKSGfbIUvwur/assets/images/source/rev-d086c4e/www.acecloudhosting.com/wp-content/uploads/2023/06/purchase-licenses-menu-icon.svg" , name: "Purchase Licenses", content: <PurchaseLicensesContent /> },
      ]
    },
    {
      title: "Cybersecurity Solutions",
      dropdown: [
        { name: "Cyber Security Services", content: <CyberSecurityServicesContent/> },
      ]
    },
    { 
      title: "Cloud Services", 
      dropdown: [
        { name: "Cloud Services Content", content: < CloudServicesContent /> },
      ] 
    },
    { 
      title: "Pricing", 
      dropdown: [
        { name: "Pricing Content", content: <PricingContent /> },
      ] 
    },
    { 
      title: "Company", 
      dropdown:[
        { name: "Company Content", content: <CompanyContent /> },
      ] 
    },
    { 
      title: "Resources", 
      dropdown:[
        { name: "Resources Content", content: <ResourcesContent /> },
      ] 
    },
  ];

  return (
    <>
     <div className=' p-1 max-w-[75rem] mx-auto flex justify-end items-center space-x-4 my-1 text-md font-normal'>
          <div className='text-red-600 hover:cursor-pointer flex space-x-1 justify-between items-center hover:text-black'> 
          <img src="https://www.acecloudhosting.com/wp-content/uploads/2023/05/call-icon-sm.svg" alt="" width={16} />
          <p>
          Sales: +911234567890 
          </p>
            </div> 
          
           
          <div className='flex space-x-2 justify-start items-center'> 
            <div className='border-l h-7 '>
              
            </div>
            <p className='hover:text-red-600 hover:cursor-pointer'>Contact US</p>
            </div>
            <div className='flex space-x-2 justify-start items-center'> 
            <div className='border-l h-7 '>
              
            </div>
            <p className='hover:text-red-600 hover:cursor-pointer'>Get Support</p>
            </div>
            <div className='flex space-x-2 justify-start items-center'> 
            <div className='border-l h-7 '>
              
            </div>
            <p className='hover:text-red-600 hover:cursor-pointer'>Self Care Portal</p>
            </div>
        </div>
      <div className='h-2 max-w-[75rem] mx-auto border-b '>
       
      </div>
      <nav ref={navRef} className={`bg-white max-w-[75rem] mx-auto shadow-sm p-1 ${openDropdown > 2 ? '' : 'relative group'}`}>
        <div className="w-full flex items-center justify-between space-x-3">
          {/* Logo */}
          <div  onMouseEnter={()=> 
            setOpenDropdown(null)
            } className="flex items-center hover:cursor-pointer">
      <img src="/ace.svg" alt="ace Logo" width={100}  />
          </div>

          {/* Navbar Items */}
          <div className='flex space-x-3 justify-end items-center'>
          <ul className="flex  space-x-3 h-5">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${openDropdown > 2 ? 'relative group' : " "}`}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-600 transition duration-300 ease-in-out pt-[.15rem] space-x-1 font-semibold text-[13px] flex font-sans items-center"
                >
                  <div className=''>{item.title}</div>
                  <div> {item.dropdown.length > 0 && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}</div>
                 
                </a>
                {openDropdown === index && item.dropdown.length > 0 && (
                  <>
                    <div className="absolute left-0 w-full h-10 bg-transparent"></div>
                    <div
                      className={`${openDropdown > 2 ? 'relative  group mt-8' : 'absolute  shadow-slate-400 shadow-2xl border-2   left-0 mt-8 '} w-full bg-white rounded-xl z-10`}
                    >
                     <div className="flex">
  {index <= 2 ? (
    item.dropdown.length > 1 ? (
      <>
        <ul className="w-1/4 bg-[#F2F2F2] border-r">
          {item.dropdown.map((dropdownItem, idx) => (
            <li
              key={idx}
              className={`px-4 py-7 hover:bg-white text-md cursor-pointer ${
                hoveredItem === dropdownItem.name
                  ? 'bg-white text-red-600'
                  : dropdownItem.name === "QuickBooks Hosting" && hoveredItem === "QuickBooks Hosting"
                    ? 'bg-white text-red-600'
                    : ''
              }`}
              onMouseEnter={() => handleItemHover(dropdownItem.name)}
          
            >
              <div className='flex space-x-2 items-center justify-start font-semibold '>
              <div>
                <img src={dropdownItem.icon} alt=""  width={30}/>
              </div>
             <div>{dropdownItem.name}</div> 
              </div>
            
            </li>
          ))}
        </ul>
        
        <div className="w-3/4 px-3">
          {hoveredItem && item.dropdown.find(d => d.name === hoveredItem)?.content}
        </div>
      </>
    ) : (
                            <>
                              {item.dropdown.map((dropdownItem, idx) => (
                                <div key={idx} className="w-full">
                                  {dropdownItem.content}
                                </div>
                              ))}
                            </>
                          )
                        ) : (
                          <div className={`${openDropdown > 2 ? 'absolute border rounded-2xl bg-white ' : ''} ${openDropdown === 3 ? ' w-72' : 'right-0  w-96'}`}>
                            {item.dropdown.map((dropdownItem, idx) => (
                              <div key={idx} className="cursor-pointer">
                                {dropdownItem.content}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
<div className='flex space-x-5 justify-center items-center'>
<div ref={searchRef} className="relative">
            <Search 
            onMouseEnter={()=> 
            setOpenDropdown(null)
            }
              className="h-6 w-6 text-gray-400 cursor-pointer" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            
            {isSearchOpen && (
              <div className="absolute right-0  w-72 mt-7 border-2 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                <div className="flex items-center p-2">
                  <div className="flex flex-1 items-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-4 py-2 rounded-l-full border-y border-l outline-none"
                    />
                    <button className="px-4 py-2 bg-red-600 text-white rounded-r-full border border-red-600">
                      <Search className="h-6 " />
                    </button>
                  </div>
                  <button 
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2 p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/*Button */}
          <div   onMouseEnter={()=> 
            setOpenDropdown(null)
            } className='bg-red-600 rounded-full  px-5 py-1 hover:bg-red-700 transition duration-300 ease-in-out'>
            <button className="text-white w-24 p-2 rounded-full text-[15px]">
              Try for Free
            </button>
          </div>
</div>
          </div>
        
          {/* Search Bar */}
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;


