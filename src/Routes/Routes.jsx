import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Contactus from "../Pages/ContactUs/Contactus";
import OurMenu from "../Pages/Menu/Menu/OurMenu";
import OurOrder from "../Pages/OurOrder/OurOrder";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/SignUp/SignUP";
import DashBoard from "../Layouts/Dashboard/DashBoard";
import Cart from "../Pages/DashboardPages/Cart/Cart";
import AllUser from "../Pages/DashboardPages/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/DashboardPages/AddItem/AddItem";
import MannageItem from "../Pages/DashboardPages/ManageIten/MannageItem";
import UpdateItem from "../Pages/DashboardPages/updateItem/UpdateItem";
import Payment from "../Pages/DashboardPages/AddItem/Payment/Payment";
import PaymentHistory from "../Pages/DashboardPages/PaymentHistoy/PaymentHistory";
import AdminHome from "../Pages/DashboardPages/AdminHome/AdminHome";
import UserHome from "../Pages/DashboardPages/UserHome/UserHome";
import NotPound from "../NotFoundPage/NotPound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contactus></Contactus>,
      },
      {
        path: "/ourmenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/ourorder/:category",
        element: <OurOrder></OurOrder>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      {
        path: "payment",
        element: <Payment></Payment>,
      },

      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      //   Admin routs

      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "alluser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageitem",
        element: (
          <AdminRoute>
            <MannageItem></MannageItem>
          </AdminRoute>
        ),
      },
      {
        path: "updateitem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://final-project-serversite.vercel.app/menu/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <NotPound></NotPound>,
  },
]);
