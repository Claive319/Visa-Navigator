import { Link, NavLink } from "react-router-dom";
import logo from "../assets/20096207.jpg";
// import Lottie, { useLottie } from "lottie-react";
import Lottie from "lottie-react";
import userAnimaton from "../assets/User.json";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm font-extrabold text-3xl dropdown-content bg-base-100 rounded-lg mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/visas">All Visas</NavLink>
            </li>
            <li>
              <NavLink to="/add">Add Visa</NavLink>
            </li>
            <li>
              <NavLink to="/my-visas">My added visas</NavLink>
            </li>
            <li>
              <NavLink to="/visa-app">My Visa applications</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/">
          <img className="max-w-48 " src={logo} alt="" />
        </NavLink>
        {/*  */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-10  font-semibold text-lg menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/visas">All Visas</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add Visa</NavLink>
          </li>
          <li>
            <NavLink to="/my-visas">My added visas</NavLink>
          </li>
          <li>
            <NavLink to="/visa-app/:id">My Visa applications</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <img className="max-w-14 rounded-full" src={userIcon} alt="" /> */}

        <Link to="/login">
          <a className="btn rounded-2xl font-bold text-2xl">
            <Lottie className="w-[40px]" animationData={userAnimaton}></Lottie>
            Sign In
          </a>
        </Link>
        {/*  */}
      </div>
    </div>
  );
};

export default Navbar;
