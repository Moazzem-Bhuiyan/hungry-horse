import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiossecure";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payment = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  return (
    <div className="">
      <h2 className="text-2xl py-4 font-semibold mt-10">
        Total History: {payment.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          {/* head */}
          <thead className="bg-orange-400">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((payment, index) => (
              <tr key={payment._id} className="border-b">
                <th className="px-4 py-2 bg-slate-300">{index + 1}</th>
                <td className="px-4 py-2">${payment.price}</td>
                <td className="px-4 py-2">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
