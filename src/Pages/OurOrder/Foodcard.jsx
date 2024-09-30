import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiossecure from "../../hooks/useAxiossecure";
import useCart from "../../hooks/useCart";

const Foodcard = ({ items }) => {
  const { image, name, recipe, _id, price } = items;

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const location = useLocation();
  const axiosSecure = useAxiossecure();
  const [, refetch] = useCart();

  const handleAddcart = (food) => {
    if (user && user.email) {
      const cartitem = {
        menuId: _id,
        email: user.email,
        image,
        price,
        name,
      };

      axiosSecure.post("/carts", cartitem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart `,
            showConfirmButton: false,
            timer: 1500,
          });

          //   refetch the card
          refetch();
        }
      });
      // mmmmmmmm
    } else {
      Swal.fire({
        title: "Are you want to Order?",
        text: "Then You should Login !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className=" shadow-xl rounded-xl my-10 p-2 space-y-2 justify-center">
        <img className="w-full" src={image} alt="" />
        <h1 className="text-center text-2xl">{name}</h1>
        <p className="text-center text-gray-400">{recipe}</p>

        <div className="flex justify-center">
          <button
            onClick={() => handleAddcart(items)}
            className="w-1/2 my-3 bg-white shadow-2xl rounded-lg border-b-2 border-black hover:bg-gray-400 hover:text-white"
          >
            {" "}
            Add To Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
