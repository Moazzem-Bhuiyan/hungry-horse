import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useHooks = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: menu = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

  return [menu, isLoading, refetch]; // Ensure isLoading is also returned if needed
};

export default useHooks;
