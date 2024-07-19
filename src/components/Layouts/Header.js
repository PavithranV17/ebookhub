import { Link } from "react-router-dom";
import Logo from "../../assets/ebookhub_icon.png";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
// import { DropdownLoggedIn } from "../index";
import { DropdownLoggedOut } from "../index";

export const Header = () => {

    const [ darkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
    const [ searchTab, setSearchTab ] = useState(false);
    const [ dropdown, setDropdown ] = useState(false);

    useEffect(() => {

        localStorage.setItem("darkMode", JSON.stringify(darkMode));

        if(darkMode) {
            document.documentElement.classList.add("dark");
        } else{
            document.documentElement.classList.remove("dark");
        }
    },[darkMode]);

  return (
    <header>      
        <nav className="bg-white dark:bg-gray-900">
            <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                
                <Link to="/" className="flex items-center">
                    <img src={Logo} className="mr-3 h-10" alt="eBookHub" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">eBookHub</span>
                </Link>

                <div className="flex items-center relative">
    
                    <span onClick={() => setSearchTab(!searchTab)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>

                    <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                        <span className="text-white text-sm absolute -top-1 left-2.5 bg-pink-500 px-1 rounded-full ">0</span>
                    </span>                    
                    </Link>
                    
                    <span onClick={() => setDropdown(!dropdown)} className="bi bi-person-circle cursor-pointer mr-5 text-2xl text-gray-700 dark:text-white"></span>
                    { dropdown && <DropdownLoggedOut />}

                    <button onClick={() => setDarkMode(!darkMode)} data-tooltip-target="card-cta-button-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="dark" className="flex items-center w-7 h-7 justify-center text-2xl font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        { darkMode && (<svg data-toggle-icon="sun" className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                                        </svg>) }
                        { !darkMode && (<svg data-toggle-icon="moon" className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                                        </svg>) }
                        <span className="sr-only">Toggle dark/light mode</span>
                    </button>
                    
                </div>
            </div>
        </nav>
        {searchTab && <Search setSearchTab={setSearchTab}/>}
    </header>
  )
}