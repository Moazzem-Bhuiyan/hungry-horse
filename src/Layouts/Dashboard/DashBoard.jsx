import { FaHistory, FaHome, FaMedal, FaShoppingBag, FaShoppingCart,  FaUser } from "react-icons/fa";
import {  NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { IoMdMenu } from "react-icons/io";
import { FaManatSign } from "react-icons/fa6";
import { GrMenu } from "react-icons/gr";
import { MdAddShoppingCart, MdOutlineAddTask, MdOutlineConnectWithoutContact } from "react-icons/md";



const DashBoard = () => {

    const [isAdmin] = useAdmin();


    return (

        <div className=" text-black grid grid-cols-6">


<div className=" w-full col-span-1 bg-orange-400 h-screen hidden lg:block ">
            {/* sudebar  */}
             <ul className="menu text-black p-2">

                {

                    isAdmin ? <>


                <li><NavLink to='/dashboard/adminHome'> <FaHome></FaHome> Admin House</NavLink></li>
                <li><NavLink to='/dashboard/additem'> <FaShoppingCart></FaShoppingCart> Add  Items</NavLink></li>
                <li><NavLink to='/dashboard/paymenthistory'><FaHistory></FaHistory> Payment Histroy</NavLink></li>
                <li><NavLink to='/dashboard/manageitem'> <FaManatSign></FaManatSign> Manage Items</NavLink></li>
                <li><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart>My Cart </NavLink></li>
                <li><NavLink to='/dashboard/alluser'> <FaUser></FaUser> All User </NavLink></li>

                    </>

                    : <>
                    
                    <li><NavLink to='/dashboard/userhome'> <FaHome></FaHome> User Home</NavLink></li>
                <li><NavLink to='/dashboard/reserve'> <FaMedal></FaMedal> Resarvation</NavLink></li>
                <li><NavLink to='/dashboard/paymenthistory'> <FaHistory></FaHistory> Payment Histroy</NavLink></li>
                <li><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                <li><NavLink to='/+'> <MdOutlineAddTask /> Add Review</NavLink></li>
                <li><NavLink to='/+'> <MdAddShoppingCart /> My Booking</NavLink></li>
                    
                    </>
                }

                <div className="divider">OR</div>
                <li><NavLink to='/'> <FaHome></FaHome>  Home</NavLink></li>
                <li><NavLink to='/ourmenu'> <GrMenu /> Menu</NavLink></li>
                <li><NavLink to='/ourorder/salad'> <FaShoppingBag />Shop</NavLink></li>
                <li><NavLink to='/contact'> <MdOutlineConnectWithoutContact /> Contact</NavLink></li>
             </ul>

            </div>
     
            


            <div className="drawer z-50 fixed lg:hidden lg: block">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn bg-orange-400 drawer-button "> <IoMdMenu className=" text-black text-2xl" /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu  min-h-full w-70">
      {/* Sidebar content here */}

      <div className=" w-full bg-orange-400 h-screen ">
            {/* sudebar  */}
             <ul className="menu text-black p-2">

                {

                    isAdmin ? <>


                <li><NavLink to='/dashboard/adminHome'> <FaHome></FaHome> Admin House</NavLink></li>
                <li><NavLink to='/dashboard/additem'> <FaShoppingCart></FaShoppingCart> Add  Items</NavLink></li>
                <li><NavLink to='/dashboard/paymenthistory'> <FaHistory></FaHistory> Payment Histroy</NavLink></li>
                <li><NavLink to='/dashboard/manageitem'> <FaManatSign></FaManatSign>Manage Items</NavLink></li>
                <li><NavLink to='/dashboard/iuu'> <FaShoppingCart></FaShoppingCart>Manage Booking </NavLink></li>
                <li><NavLink to='/dashboard/alluser'> <FaUser></FaUser> All User </NavLink></li>

                    </>

                    : <>
                    
                    <li><NavLink to='/dashboard/userhome'> <FaHome></FaHome> User Home</NavLink></li>
                <li><NavLink to='/dashboard/reserve'> <FaMedal></FaMedal> Resarvation</NavLink></li>
                <li><NavLink to='/dashboard/paymenthistory'> <FaHistory></FaHistory> Payment Histroy</NavLink></li>
                <li><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                <li><NavLink to='/dashboard/addreview'> <MdOutlineAddTask /> Add Review</NavLink></li>
                <li><NavLink to='/dashboard/userbooking'> <MdAddShoppingCart /> My Booking</NavLink></li>
                    
                    </>
                }

                <div className="divider">OR</div>
                <li><NavLink to='/'> <FaHome></FaHome>  Home</NavLink></li>
                <li><NavLink to='/ourmenu'> <GrMenu /> Menu</NavLink></li>
                <li><NavLink to='/ourorder/salad'><FaShoppingBag />Shop</NavLink></li>
                <li><NavLink to='/contact'> <MdOutlineConnectWithoutContact /> Contact</NavLink></li>
             </ul>

            </div>
      
    </ul>
  </div>
</div>






            {/* sidebar*/}

            <div className=" lg:w-full m-auto col-span-6 lg:col-span-5 ">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashBoard;