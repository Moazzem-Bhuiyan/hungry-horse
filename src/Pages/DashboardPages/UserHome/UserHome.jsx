import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-screen md:w-[80%] w-full mx-auto  flex flex-col justify-center items-center">
      {user ? (
        <div className="flex justify-center mt-10">
          <img
            className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover"
            src={user.photoURL}
            alt="User Profile"
          />
        </div>
      ) : (
        ""
      )}

      {user ? (
        <h1 className="text-2xl md:text-4xl font-bold text-center mt-10 md:mt-16">
          Hello, Welcome
          <br /> {user.email}
          <p className="text-sm md:text-lg font-bold text-green-500 uppercase mt-5 md:mt-10">
            If you want to see more information, please use our left-side
            navigation.
          </p>
        </h1>
      ) : (
        <h1 className="text-center flex justify-center items-center text-2xl md:text-6xl font-semibold leading-normal md:leading-snug">
          Please Login & Order Our Delicious Food
        </h1>
      )}
    </div>
  );
};

export default UserHome;
