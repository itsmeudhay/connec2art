import logo from '../assets/C2A.png'
import { Link } from "react-scroll";

const Navbar = () => {

 

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-16">
        <div className="w-full px-5 mx-auto lg:max-w-7xl sm:px-10 md:px-12 lg:px-5">
          <nav className="relative flex justify-between w-full gap-6">
            {/* <!-- logo --> */}
            <div className="relative inline-flex min-w-max">
              <a href="/" className="relative flex items-center gap-3">
                <img src={logo} alt='Connec2Art' className='w-48' />
              </a>
            </div>

            <div data-nav-overlay aria-hidden="true"
              className="fixed hidden inset-0 lg:!hidden bg-gray-800/60 bg-opacity-50 backdrop-filter backdrop-blur-xl">
            </div>
            <div data-navbar
              className="flex invisible opacity-0  translate-y-10 overflow-hidden lg:visible lg:opacity-100  lg:-translate-y-0 lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-white lg:!bg-transparent border-x border-x-gray-100 lg:border-x-0">
              <ul
                className="flex flex-col w-full px-6 pt-6 text-lg font-bold border-t border-gray-100 text-fontGreen lg:border-t-0 lg:px-0 lg:pt-0 lg:flex-row gap-y-4 gap-x-28 lg:justify-center lg:items-center">
                <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={3000} to="home" className="px-2 py-1 text-black nav-link hover:text-sky-50"><li>
                  <a href="#" className="py-3 font-medium duration-300 ease-linear hover:text-fontSandal">
                    Home
                  </a>
                </li></Link>
                <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={3000} to="services" className="px-2 py-1 text-black nav-link hover:text-sky-50"><li>
                  <a href="#" className="py-3 font-medium duration-300 ease-linear hover:text-fontSandal">
                    Services
                  </a>
                </li></Link>
                <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={3000} to="about" className="px-2 py-1 text-black nav-link hover:text-sky-50"><li>
                  <a href="#" className="py-3 font-medium duration-300 ease-linear hover:text-fontSandal">
                    About us
                  </a>
                </li></Link>
                <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={3000} to="features" className="px-2 py-1 text-black nav-link hover:text-sky-50"><li>
                  <a href="#" className="py-3 font-medium duration-300 ease-linear hover:text-fontSandal">
                    Features
                  </a>
                </li></Link>
              </ul>

              <div
                className="flex items-center w-full px-6 pb-6 border-b border-gray-100 lg:min-w-max sm:w-max lg:pb-0 lg:border-0 lg:px-0">
                <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={3000} to="contact" className="px-2 py-1 text-black nav-link hover:text-sky-50"><a href="#"
                  className="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554] bg-transparent hover:bg-gray-700/20 font-bold py-2 text-fontGreen hover:shadow-lg border-dark-700 border-black border-solid">
                  <span className="relative z-10 text-fontSandal hover:text-white">
                    Get Started
                  </span>
                </a></Link>
              </div>
            </div>


          </nav>
        </div>
      </header>
  );
};

export default Navbar;
