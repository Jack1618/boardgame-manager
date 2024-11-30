'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

export default function Header(){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set opacity to 0 when the page is scrolled down, opacity 100 when the page is at the top
      if (window.scrollY > 50) { // Change this value to adjust when the opacity should become 0
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigation = [
      { name: 'Home', href:"/"},
      { name: 'Board Games', href: '/boardgames' },
    ]
    
    return (      
    
    <header id="header" className={`sticky inset-x-0 top-0 z-50 bg-custom-dark-teal dark:bg-gray-800 transition-opacity dark:transition-opacity dark:duration-300
       dark:ease-in-out ${
        scrolled ? 'bg-opacity-80 dark:bg-opacity-80' : 'bg-opacity-100 dark:bg-opacity-100'
      }`}>
        <nav aria-label="Global" className="sticky top-0 p-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6 text-gray-300" />
              </button>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex lg:gap-x-12 item-center space-x-4 mx-auto">
              {navigation.map((item) => (
                <Link className="text-m font-semibold text-gray-300 dark:text-gray-300" to={item.href}>{item.name}</Link>
              ))}
            </div>

            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
            </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-custom-dark-teal  dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a> */}
            </div>
            <div className="mt-6 flow-root text-right">
            <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-300 dark:text-gray-300"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-20">
                  {navigation.map((item) => (
                    <Link onClick={() => setMobileMenuOpen(false)}s className="text-m mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold text-gray-300 hover:bg-gray-50 dark:text-gray-300" 
                    to={item.href}>{item.name}</Link>
                    // <a
                    //   key={item.name}
                    //   href={item.href}
                    //   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300"
                    // >
                    //   {item.name}
                    // </a>
                  ))}
                </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    )
}