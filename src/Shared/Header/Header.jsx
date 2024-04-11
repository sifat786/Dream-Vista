import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../assets/userDefaultPic.jpg';
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
    
    

    const navLinks =  <>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                isActive
                                    ? "md:text-lg font-bold  md:underline md:underline-offset-4 md:decoration-2 text-rose-600"
                                    : "md:text-lg text-neutral-500 font-medium leading-[30px]"
                                }
                            >Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                isActive
                                    ? "md:text-lg font-bold  md:underline md:underline-offset-4 md:decoration-2 text-rose-600"
                                    : "md:text-lg text-neutral-500 font-medium leading-[30px]"
                                }
                            >Update Profile
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/career"
                                className={({ isActive }) =>
                                isActive
                                    ? "md:text-lg font-bold  md:underline md:underline-offset-4 md:decoration-2 text-rose-600"
                                    : "md:text-lg text-neutral-500 font-medium leading-[30px]"
                                }
                            >Contact Us
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/career"
                                className={({ isActive }) =>
                                isActive
                                    ? "md:text-lg font-bold  md:underline md:underline-offset-4 md:decoration-2 text-rose-600"
                                    : "md:text-lg text-neutral-500 font-medium leading-[30px]"
                                }
                            >About Us
                            </NavLink>
                        </li>
                      </>

    return (
        <div>

            <div className="navbar p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div  tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
                        <GiHamburgerMenu className="text-xl"></GiHamburgerMenu>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content block mt-1 z-[1] p-3 shadow bg-rose-100 rounded-box w-[180px]">
                        {navLinks}
                    </ul>
                    </div>

                    <Link to={'/'} className="font-bold text-2xl ml-3 md:ml-0">Dream Vista</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-8">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    {/* <div role="button">
                        <div className="w-10 md:w-12 rounded-full">
                            <img src={userDefaultPic}/>
                        </div>
                    </div>
                    
                    {
                        user ? 
                            <button onClick={handleLogout} className="bg-black py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium">Sign Out</button>
                            :
                            <Link to={`/login`}>
                                <button className="bg-black py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium">Login</button>
                            </Link>
                    } */}
                    <div role="button">
                        <div className="w-10 md:w-[60px] rounded-full">
                            <img src={userDefaultPic}/>
                        </div>
                    </div>
                    <button className="bg-black py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">SignIn</button>

                </div>
            </div>
            
        </div>
    );
}

export default Header;