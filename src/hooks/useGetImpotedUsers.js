import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axiosInstance";
import { useSearchParams } from "react-router-dom";

export default function useGetImpotedUsers() {
  const [searchParms] = useSearchParams();
  const search = searchParms.get("search");

  const { isLoading, data, error } = useQuery({
    queryKey: ["imported-users", search],
    queryFn: async () => {
      try {
        let url = "/searchInUsersFromImport";

        if (search) {
          url += `&search=${encodeURIComponent(search)}`;
        }

        const res = await axiosInstance.get(url);
        if (res.status === 200) {
          return res.data.data;
        }
      } catch (error) {
        console.error("Error fetching users:", error.message);
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
