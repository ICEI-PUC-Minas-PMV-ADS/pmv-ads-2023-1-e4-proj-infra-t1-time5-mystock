import { Navigate, Outlet } from "react-router";
import Header from "../../components/header";
import useAuth from "../../context/auth";
import { MainApplication } from "./styles";

export default function BaseApplication() {
  const { user, token } = useAuth();

  if (user || token) {
    return (
      <MainApplication>
        <Header />
        <Outlet />
      </MainApplication>
    );
  } else {
    return <Navigate to="/login" state={{ needRedirect: true }} />;
  }
}
