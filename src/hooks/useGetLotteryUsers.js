import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axiosInstance";

export default function useGetLotteryUsers(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["lottery-users", id],
    queryFn: async () => {
      try {
        const res = await axiosInstance.post("/getLotteriesUsers", {
          lottery_id: id
        });
        if (res.status === 200) {
          return {
            data: res.data.data,
            count: res.data.count
          };
        }
      } catch (error) {
        console.error("Error fetching profile:", error.message);
        throw error;
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  });
  return { isLoading, data, error };
}
