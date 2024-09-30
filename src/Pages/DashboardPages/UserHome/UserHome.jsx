import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-screen md:w-[80%] w-full m-auto bg-indigo-200 ">
      {user ? (
        <div className="flex justify-center mt-20">
          {" "}
          <img className=" rounded-full " src={user.photoURL} alt="" />{" "}
        </div>
      ) : (
        ""
      )}

      {user ? (
        <h1 className=" text-4xl font-bold text-center mt-20">
          Hello Welcome <br /> {user.email}{" "}
          <p className="text-lg font-bold text-green-500  uppercase mt-20">
            {" "}
            if you want to see more information please using our left side
            Navigation
          </p>
        </h1>
      ) : (
        <>
          {" "}
          <h1 className=" h-screen text-center flex justify-center items-center text-6xl font-semibold leading-">
            Please Login & Order Our Delecious Food
          </h1>
        </>
      )}
    </div>
  );
};
export default UserHome;
