import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiossecure";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payment = [] } = useQuery({
    queryKey: ["payment", user?.email], // Optional chaining
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Query only runs if user and user.email exist
  });

  return (
    <div>
      <h2 className="text-2xl py-10 font-semibold mt-10 md:ml-5">
        Total History: {payment.length}
      </h2>

      <div className="md:overflow-x-auto lg:w-full lg:ml-10 w-[30%]">
        <table className="table md:ml-10 w-[30% ">
          {/* head */}
          <thead>
            <tr className="bg-orange-400">
              <th>#</th>
              <th>Price</th>

              {/* <th>TransectionId</th> */}
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((payment, index) => (
              <tr key={payment._id} className="bg-base-200">
                <th className="bg-slate-300">{index + 1}</th>
                <td>{"$ " + payment.price}</td>

                {/* <td className="">{payment.transectionId}</td> */}
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
