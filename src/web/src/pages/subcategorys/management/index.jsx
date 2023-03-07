import { useState } from "react";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import SideManager from "../../../components/sideManager";
import { Container } from "../../../styleGlobal/styles";
import { CardsWrapper, ContentCards, ButtonBack } from "./styles";
import { TitlePages, DescriptionPages } from "../../../styleGlobal/styles";
import { BsArrowLeft } from "react-icons/bs";
import Selector from "../../../components/selector";
import Card from "../../../components/card";

export default function SubcategorysManagement() {
  const [actualCatgory, setActualCategory] = useState(0);
  const [actualSubCatgory, setActualSubCategory] = useState(0);
  const [showProducts, setShowProducts] = useState(false);

  const categorys = [
    { name: "Eletrônicos", id: 0 },
    { name: "Roupas", id: 1 },
    { name: "Sapatos", id: 2 },
  ];

  const subCategorys = [
    { name: "Celulares", categoryId: 0, id: 0 },
    { name: "Camisas", categoryId: 1, id: 1 },
    { name: "Tênis", categoryId: 2, id: 2 },
  ];

  return (
    <Container>
      <ContainerForm>
        <TitlePages marginTop="40px">
          Gerenciar <span>Subcategorias</span>
        </TitlePages>
        <DescriptionPages>
          Escolha uma subcategoria a ser gerenciada
        </DescriptionPages>
        <ContentCards>
          {categorys.map((category, index) => {
            return (
              <Selector
                key={index}
                category={category}
                setActualSubCategory={setActualSubCategory}
                setShowProducts={setShowProducts}
                setActualCategory={setActualCategory}
              />
            );
          })}
        </ContentCards>
      </ContainerForm>
      <ContainerCards show={showProducts}>
        <ButtonBack onClick={() => setShowProducts(false)}>
          <BsArrowLeft className="icon" />
        </ButtonBack>
        <SideManager type="Subcategorias" amount="23" />
        <CardsWrapper>
          {subCategorys.map((subCategory, index) => {
            return (
              <>
                {subCategory.categoryId === actualCatgory && (
                  <Card
                    key={index}
                    name={subCategory.name}
                    amount={subCategory.amount}
                    updatedAt={subCategory.updatedAt}
                    createdAt={subCategory.createdAt}
                    id={subCategory.id}
                  />
                )}
              </>
            );
          })}
        </CardsWrapper>
      </ContainerCards>
    </Container>
  );
}
