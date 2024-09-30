import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
  // tan stak query

  const axiosSecure = useAxiossecure();

  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
