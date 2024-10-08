import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiossecure";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-sats");
      return res.data;
    },
  });

  return (
    <div className="text-black">
      <div className="flex justify-center border-b-2 md:ml-10 mt-20">
        {user ? (
          <>
            <img className="rounded-full py-2 w-20 h-20 md:w-24 md:h-24" src={user.photoURL} alt="" />
            <hr />
          </>
        ) : null}
      </div>

      {user && isAdmin && (
        <h1 className="text-3xl mt-20 text-center">
          Hello Welcome _ <br />
          <span className="font-bold">{user?.displayName}</span>
        </h1>
      )}

      <div className="stats shadow bg-white w-full text-black max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat flex flex-col items-center bg-gray-200 text-black p-4 rounded-lg">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div className="stat-title text-black ">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
        </div>

        <div className="stat flex flex-col items-center bg-gray-100 p-4 rounded-lg">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </div>
          <div className="stat-title  text-black">Users</div>
          <div className="stat-value">{stats.user}</div>
        </div>

        <div className="stat flex flex-col items-center bg-gray-100 p-4 rounded-lg">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
            </svg>
          </div>
          <div className="stat-title  text-black">Menus</div>
          <div className="stat-value">{stats.menuItems}</div>
        </div>

        <div className="stat flex flex-col items-center bg-gray-100 p-4 rounded-lg">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
            </svg>
          </div>
          <div className="stat-title  text-black">Orders</div>
          <div className="stat-value">{stats.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
