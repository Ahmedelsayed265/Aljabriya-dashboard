import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axiosInstance";

export default function useGetLotteries() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["lotteries"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/lotteries");
        if (res.status === 200) {
          console.log(res.data.data.Data);
          console.log(res.data.data.total_count);
          
          return {
            data: res.data.data.Data,
            count: res.data.data.total_count
          };
        }
      } catch (error) {
        console.error("Error Fetching Lotteries:", error.message);
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
