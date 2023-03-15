import { useNavigate } from "react-router-dom";
import {
  HeaderStyles,
  ContentNav,
  DataUser,
  NameUser,
  ImageUser,
} from "./styles";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import useAuth from "../../context/auth";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <HeaderStyles>
      <h2 onClick={() => navigate("/products")}>myStock</h2>
      <RxHamburgerMenu
        className="hamburguer"
        onClick={() => {
          setMenu((state) => !state);
        }}
      />
      <ContentNav display={menu}>
        <ul>
          <li>
            <a onClick={() => navigate("/products")}>Produtos</a>
          </li>
          <li>
            <a onClick={() => navigate("/categorys")}>Categorias</a>
          </li>
          <li>
            <a onClick={() => navigate("/subcategorys")}>Subcategorias</a>
          </li>
          <li className="user-data">
            <a onClick={() => navigate("/")}>Meus dados</a>
          </li>
          <li className="user-data">
            <a
              onClick={() => {
                logout().then(() => {
                  navigate("/login");
                });
              }}
            >
              Sair
            </a>
          </li>
        </ul>
        <DataUser>
          <ImageUser />
          <NameUser>
            <h3>Laura Silva</h3>
            <p>laura@email.com</p>
          </NameUser>
        </DataUser>
      </ContentNav>
    </HeaderStyles>
  );
}
