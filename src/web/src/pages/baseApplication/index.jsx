import { Outlet } from "react-router";
import Header from "../../components/header";
import { MainApplication } from "./styles";

export default function BaseApplication() {
  return (
    <MainApplication>
      <Header />
      <Outlet />
    </MainApplication>
  );
}
