import { BrowserRouter, Routes, Route } from "react-router-dom";
import {PageNotFound} from "../components/pageNotFound";
import {ProtectedRoute} from "../components/admin";
import  RoleUser from "../components/user/UserRoll";
import {RoleAdmin} from "../components/admin";
import {ProtectedRouteUser} from "../components/user";
import {Authpage} from "../components/protected-route";
import {Auth} from "../components/protected-route";

function Page() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Authpage />}>
          <Route path="/*" element={<Auth />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/*" element={<RoleAdmin />} />
        </Route>
        <Route element={<ProtectedRouteUser />}>
          <Route path="/user/*" element={<RoleUser />} />

        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Page;
