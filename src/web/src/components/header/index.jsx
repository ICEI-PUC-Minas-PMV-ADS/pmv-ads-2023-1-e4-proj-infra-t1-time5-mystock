import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderStyles,
  ContentNav,
  DropDown,
  DataUser,
  NameUser,
  ImageUser,
} from "./styles";

export default function Header() {
  const [modal, setModal] = useState(false);
  const ItensModal = [{ name: "Eletrônicos" }, { name: "Brinquedos" }];
  return (
    <HeaderStyles>
      <h2 as={Link} to="/products">
        myStock
      </h2>
      <ContentNav>
        <ul>
          <li>
            <a onClick={() => setModal(!modal)}>Produtos</a>
            {modal && (
              <DropDown>
                <ul>
                  {ItensModal.map((item, index) => {
                    return (
                      <li key={index}>
                        <a>{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </DropDown>
            )}
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
