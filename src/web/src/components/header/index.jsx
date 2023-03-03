import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderStyles,
  ContentNav,
  DataUser,
  NameUser,
  ImageUser,
} from "./styles";

export default function Header() {
  return (
    <HeaderStyles>
      <h2 as={Link} to="/products">
        myStock
      </h2>
      <ContentNav>
        <ul>
          <li>
            <a>Produtos</a>
          </li>
          <li>
            <a>Categorias</a>
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
