import Card from "../../../components/card";
import SideManager from "../../../components/sideManager";
import { DescriptionPages, TitlePages } from "../../../styleGlobal/styles";
import { Container, AlignText, CardsWrapper } from "./styles";

export default function CategoryManagement() {
  const categorys = [
    { name: "Eletrônicos", id: 0 },
    { name: "Roupas", id: 1 },
    { name: "Brinquedos", id: 2 },
    { name: "Comidas", id: 3 },
    { name: "Móveis", id: 4 },
    { name: "Enxovais", id: 5 },
  ];
  return (
    <Container>
      <SideManager type="categorias" amount="23" />
      <AlignText>
        <TitlePages marginTop="40px">
          Gerenciar <span>Categorias</span>
        </TitlePages>
        <DescriptionPages>
          Escolha uma categoria a ser gerenciada
        </DescriptionPages>
      </AlignText>
      <CardsWrapper>
        {categorys.map((category, index) => {
          return (
            <Card
              key={index}
              name={category.name}
              updatedAt={category.updatedAt}
              createdAt={category.createdAt}
              id={category.id}
              m3
            />
          );
        })}
      </CardsWrapper>
    </Container>
  );
}
