import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouteUser() {
    const {userList} = useSelector((state:any)=>state.userData)
  const token = Cookies.get('token');
  if(token && userList.role=="user"){
  return (
    <div>
        <Outlet/>
    </div>
  )
}else{
    return (
        <>
        <Navigate to="/login" />
      </>
      )  
}
}
export default ProtectedRouteUser