import { NavLink } from "react-router-dom";
import './MainNavigation.css'
import { ReactComponent as NavLogo } from '../assets/shared/logo.svg'
import { ReactComponent as CloseLogo } from '../assets/shared/icon-close.svg'
import { ReactComponent as HamburgerLogo } from '../assets/shared/icon-hamburger.svg'
import { useEffect, useState } from "react";
const MainNavigation = () => {
   const [isVisible, setIsVisible] = useState(true)
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   const handleResize = () => {
      setScreenWidth(window.innerWidth);
   };
   // Add event listener for window resize
   useEffect(() => {
      window.addEventListener('resize', handleResize);
      // Remove event listener on component unmount
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const visibiltySwithcer = () => {
      setIsVisible(!isVisible)
   }
   return <>
      <div className="navContainer">
         <NavLogo className="ml-[55px] max-[1439px]:ml-[39px] max-[767px]:ml-[16.5px] max-[767px]:scale-[0.83]"></NavLogo>
         <button onClick={visibiltySwithcer} className={`open-closeLogo ${!isVisible ? 'hidden' : 'block'} ${screenWidth > 767 ? 'hidden' : ''}`}><HamburgerLogo></HamburgerLogo></button>
         <nav className={`${screenWidth > 767 ? 'grid' :isVisible ? 'hidden' : 'block'}`}>
            <button onClick={visibiltySwithcer} className={`open-closeLogo ${isVisible ? 'hidden' : 'block'} ${screenWidth > 767 ? 'hidden' : ''}`}><CloseLogo></CloseLogo></button>
            <ul>
               <li>
                  <NavLink className={({ isActive }) =>
                     isActive ? 'nav activeLink' : 'nav'
                  } end to="/"><span>00</span>HOME</NavLink>
               </li>
               <li>
                  <NavLink className={({ isActive }) =>
                     isActive ? 'nav activeLink' : 'nav'
                  } to='destination'><span>01</span>DESTINATION</NavLink>
               </li>
               <li>
                  <NavLink className={({ isActive }) =>
                     isActive ? 'nav activeLink' : 'nav'
                  } to='crew'><span>02</span>CREW</NavLink>
               </li>
               <li>
                  <NavLink className={({ isActive }) =>
                     isActive ? 'nav activeLink' : 'nav'
                  } to='technology'><span>03</span>TECHNOLOGY</NavLink>
               </li>
            </ul></nav>

      </div>
   </>
}
export default MainNavigation;