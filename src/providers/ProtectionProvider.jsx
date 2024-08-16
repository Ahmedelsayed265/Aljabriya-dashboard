import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";
import { useDispatch } from "react-redux";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { setUser } from "../redux/authedUser";
import useGetUser from "../hooks/useGetUser";
import Loader from "../ui/Loader";

export default function ProtectionProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies] = useCookies(["token", "id"]);
  const token = cookies?.token;
  const id = cookies?.id;
  const { decodedToken, isExpired } = useJwt(token);

  const {
    data: profile,
    isLoading,
    isFetched,
    refetch
  } = useGetUser(Boolean(token && id && !isExpired));

  axiosInstance.defaults.headers.common["Authorization"] = `bearer ${token}`;

  useLayoutEffect(() => {
    if (Number(decodedToken?.sub) === id && !isExpired) {
      if (isFetched) {
        dispatch(setUser(profile));
      } else {
        refetch();
      }
    } else {
      dispatch(setUser({}));
      delete axiosInstance.defaults.headers.common["Authorization"];
      navigate("/login");
    }

    setLoading(false);
  }, [
    decodedToken?.sub,
    id,
    isExpired,
    profile,
    isFetched,
    refetch,
    dispatch,
    navigate
  ]);

  return loading || isLoading ? <Loader /> : <>{children}</>;
}
