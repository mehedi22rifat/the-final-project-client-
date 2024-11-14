import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [headerFixed,setHeaderFixed] = useState(false);

//  header fixed logic
  const handleHeaderFixed = () =>{
    if(window.scrollY > 200){
        setHeaderFixed(true)
    }else{
        setHeaderFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderFixed);
    return () => {
      window.removeEventListener('scroll', handleHeaderFixed);
    };
  }, []);

//   links here
  const NavLinks = <> 
      
      <Link className='nav-link' to={'/'}> <li><a>Home</a></li></Link>
      <Link to={'shop'}> <li><a>Shop</a></li></Link>
      <Link to={'/blog'}> <li><a>Blog</a></li></Link>
      <Link to={'/about'}> <li><a>About</a></li></Link>
      <Link to={'/contact'}> <li><a>Contact</a></li></Link>
  </>

 
  return (
    <div className={`navbar fixed top-0 w-full z-30 shadow-xl ${headerFixed ? 'bg-purple-700 text-white' : 'bg-base-200 opacity-80 z-30'}`}>
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        {/* Dropdown for Mobile */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-purple-700 rounded-box mt-3 w-52 p-2 shadow-lg z-10"
          >
            {NavLinks}
          </ul>
        </div>
        {/* Logo */}
        <img className="h-8 md:h-10 rounded-xl hover:scale-105 transition-all duration-300 shadow-sm" src={"https://www.logodesign.net/logo-new/minimal-chopsticks-and-noodle-bowl-7767ld.png?nwm=1&nws=1&industry=cooking&txt_keyword=All"} alt="Logo" />
      </div>
  
      {/* Navbar Center for Larger Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {NavLinks}
        </ul>
      </div>
  
      {/* Navbar End */}
      <div className="navbar-end gap-2">
        <Link to={'/singUp'} className="btn btn-primary">SingIn</Link>
        <Link to={'/singIn'} className="btn btn-primary">SignUp</Link>
      </div>
    </div>
 
  
  

 
  )
}

export default Navbar