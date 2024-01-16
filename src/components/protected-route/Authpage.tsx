import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

function Authpage() {
  const token = Cookies.get("token");
  const { userList } = useSelector((state: any) => state.userData);
  if (!token || !userList.role) {
    return <Outlet />;
  } else if (token && userList.role) {
    return <Navigate to={`/${userList.role.toLowerCase()}/dashboard`} />;
  }
}

export default Authpage;
