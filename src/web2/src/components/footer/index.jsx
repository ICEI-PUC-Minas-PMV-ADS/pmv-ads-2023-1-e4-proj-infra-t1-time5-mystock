import {
  Content,
  FooterStyles,
  InfoMyStock,
  Members,
  BaseFooter,
  Container,
} from "./styles";
import MyStock from "../../assets/images/MyStock.png";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <FooterStyles>
      <Container>
        <Content>
          <InfoMyStock>
            <h2>Sobre a plataforma</h2>
            <p>
              MyStock é um projeto que visa a criação de uma aplicação de
              controle de estoque para diversos lojistas, aprensentando tanto
              uma solução web quanto uma solução mobile. A intenção desse
              projeto é permitir a diversos usuário cadastrados criarem
              categorias categorias amplas de acordo coma variedade de produtos
              em seu negócio, bem como subcategorias para tipos de produto.{" "}
            </p>
          </InfoMyStock>
          <Members>
            <h2>Desenvolvedores</h2>
            <Content row>
              <div>
                <ul>
                  <li>
                    <a>Arthur Rocha</a>
                  </li>
                  <li>
                    <a>Bruno Gammaro</a>
                  </li>
                  <li>
                    <a>Bárbara Augusta</a>
                  </li>
                  <li>
                    <a>Henrique Augusto</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a>Raphael latini</a>
                  </li>
                  <li>
                    <a>Raquel Negrão</a>
                  </li>
                  <li>
                    <a>Victor Gammaro</a>
                  </li>
                </ul>
              </div>
            </Content>
          </Members>
        </Content>
      </Container>
      <BaseFooter>
        <p>Puc Minas - 2023</p>
        <img onClick={() => navigate("/products")} src={MyStock} alt="logo" />
      </BaseFooter>
    </FooterStyles>
  );
}
