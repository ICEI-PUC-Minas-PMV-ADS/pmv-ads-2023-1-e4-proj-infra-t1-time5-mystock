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
import MyStock from "../../assets/images/MyStock.png";
import { AiOutlineUser } from "react-icons/ai";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  return (
    <HeaderStyles>
      <img onClick={() => navigate("/products")} src={MyStock} alt="logo" />
      <RxHamburgerMenu
        className="hamburguer"
        onClick={() => {
          setMenu((state) => !state);
        }}
      />
      <ContentNav display={menu}>
        <ul>
          <li>
            <p
              onClick={() => {
                navigate("/products");
                setMenu(false);
              }}
            >
              Produtos
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                navigate("/subcategorys");
                setMenu(false);
              }}
            >
              Subcategorias
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                navigate("/categorys");
                setMenu(false);
              }}
            >
              Categorias
            </p>
          </li>
          <li className="user-data">
            <p
              onClick={() => {
                navigate("/user");
                setMenu(false);
              }}
            >
              Meus dados
            </p>
          </li>
          <li className="user-data">
            <p
              onClick={() => {
                logout().then(() => {
                  navigate("/login");
                });
              }}
            >
              Sair
            </p>
          </li>
        </ul>
        {user && (
          <DataUser
            onClick={() => {
              navigate("/user");
            }}
          >
            <ImageUser>
              <AiOutlineUser size="35px" style={{ marginTop: "5px" }} />
            </ImageUser>

            <NameUser>
              <h3>
                {user.name} {user.sobrenome}
              </h3>
              <p>{user.email}</p>
            </NameUser>
          </DataUser>
        )}
      </ContentNav>
    </HeaderStyles>
  );
}
