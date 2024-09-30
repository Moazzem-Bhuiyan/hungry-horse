import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { LuShoppingCart } from "react-icons/lu";
import useCart from "../../../hooks/useCart";
import { IoMdMenu } from "react-icons/io";

const Navber = () => {
  const navigate = useNavigate();

  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLOgout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "LogOut Successfully",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });

        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navoption = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact"> Contact Us </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/ourmenu"> Our Menu </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/ourorder/salad"> Our Order </NavLink>
      </li>
      {/* {
  user && isAdmin &&   <li>
  {" "}
  <NavLink to="/dashboard/adminHome"> Dashboard </NavLink>
</li>
}

{
  user ?  <li>
  {" "}
  <NavLink to="/dashboard/userhome"> Dashboard </NavLink>
</li>: ''
} */}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-40 text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* <svg
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
              </svg> */}
              <IoMdMenu className=" text-3xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow  bg-black"
            >
              {/*  */}
              {navoption}
            </ul>
          </div>
          <a className=" text-xl uppercase font-bold">
            {" "}
            HUNGRY HORSE <br />{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1 gap-10 uppercase font-semibold">
            {/*  */}
            {navoption}

            {user ? (
              <li>
                <NavLink to="/dashboard">DASHBOARD</NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/dashboard/userhome">
            <button className=" btn rounded-full  pb-4 bg-transparent hover:bg-green-900 mr-2  ">
              <i className="  text-2xl">
                <LuShoppingCart className="text-white absolute" />
              </i>
              <div className="bg-red-600 text-white p-1 rounded-full relative">
                {cart.length}+
              </div>
            </button>
          </Link>

          {user ? (
            <>
              {" "}
              <button
                onClick={handleLOgout}
                className="btn text-white uppercase ml-1 bg-transparent hover:bg-green-900 border-1 "
              >
                Logout
                <img className="rounded-full w-10" src={user.photoURL} alt="" />
              </button>{" "}
            </>
          ) : (
            <>
              {" "}
              <li className=" btn bg-transparent text-white hover:bg-green-900 ml-1">
                {" "}
                <NavLink to="/login"> Login </NavLink>
              </li>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
