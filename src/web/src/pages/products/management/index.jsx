import { useState } from "react";
import Card from "../../../components/card";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import SideManager from "../../../components/sideManager";
import { Container } from "../../../styleGlobal/styles";
import { CardsWrapper, ContentCards, ButtonBack } from "./styles";
import { TitlePages, DescriptionPages } from "../../../styleGlobal/styles";
import { BsArrowLeft } from "react-icons/bs";
import Selector from "../../../components/selector";
import useAuth from "../../../context/auth";

export default function ProductManagement() {
  const [actualCatgory, setActualCategory] = useState(0);
  const [actualSubCatgory, setActualSubCategory] = useState(0);
  const [showProducts, setShowProducts] = useState(false);
  const { user } = useAuth();

  console.log(user);

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

  const products = [
    {
      id: 0,
      name: "iPhone 11",
      amount: 27,
      subcategoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      id: 1,
      name: "iPhone 11",
      amount: 27,
      subcategoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      id: 2,
      name: "Blusa vermelha",
      amount: 27,
      subcategoryId: 1,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      id: 3,
      name: "Nike Shox",
      amount: 27,
      subcategoryId: 2,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
  ];

  return (
    <Container>
      <ContainerForm>
        <TitlePages marginTop="40px">
          Gerenciar <span>Produtos</span>
        </TitlePages>
        <DescriptionPages>
          Escolha uma categoria dos produtos a serem gerenciados
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
                subCategorys={subCategorys}
              />
            );
          })}
        </ContentCards>
      </ContainerForm>
      <ContainerCards show={showProducts}>
        <ButtonBack onClick={() => setShowProducts(false)}>
          <BsArrowLeft className="icon" />
        </ButtonBack>
        <SideManager type="produtos" amount="23" />
        <CardsWrapper>
          {products.map((product, index) => {
            return (
              <>
                {product.subcategoryId === actualSubCatgory && (
                  <Card
                    key={index}
                    name={product.name}
                    amount={product.amount}
                    updatedAt={product.updatedAt}
                    createdAt={product.createdAt}
                    id={product.id}
                    type="produto"
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
