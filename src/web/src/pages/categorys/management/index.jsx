import Card from "../../../components/card";
import SideManager from "../../../components/sideManager";
import { DescriptionPages, TitlePages } from "../../../styleGlobal/styles";
import { Container, AlignText, CardsWrapper } from "./styles";
import { useQuery } from "react-query";
import { getCategorys } from "../../../services/api/categorys";

export default function CategoryManagement() {
  const { data } = useQuery("categorysManagmente", getCategorys);

  return (
    <Container>
      <SideManager type="categorias" amount={data && data.length} />
      <AlignText>
        <TitlePages marginTop="40px">
          Gerenciar <span>Categorias</span>
        </TitlePages>
        <DescriptionPages>
          Escolha uma categoria a ser gerenciada
        </DescriptionPages>
      </AlignText>
      <CardsWrapper>
        {data && data.length > 0 ? (
          data.map((category, index) => {
            return (
              <Card
                key={index}
                name={category.nome}
                updatedAt={null}
                createdAt={null}
                id={category.id}
                m3
                type="categoria"
              />
            );
          })
        ) : (
          <p>Não há categorias para serem gerenciadas</p>
        )}
      </CardsWrapper>
    </Container>
  );
}
