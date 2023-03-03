import { useState } from "react";
import Card from "../../../components/card";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import SideManager from "../../../components/sideManager";
import {
  Container,
  CardsWrapper,
  CardSubcategorys,
  ContentCards,
  ButtonBack,
} from "./styles";
import { TitlePages, DescriptionPages } from "../../../styleGlobal/styles";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function ProductManagement() {
  const [actualCatgory, setActualCategory] = useState(0);
  const [showProducts, setShowProducts] = useState(false);
  const subCategorys = [
    { name: "Celulares", id: 0 },
    { name: "Computadores", id: 1 },
    { name: "Video games", id: 2 },
  ];

  const products = [
    {
      name: "iPhone 11",
      amount: 27,
      categoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "iPhone 12",
      amount: 27,
      categoryId: 1,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "iPhone 13",
      amount: 27,
      categoryId: 2,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "iPhone XR",
      amount: 27,
      categoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "iPhone 11",
      amount: 27,
      categoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "iPhone 11",
      amount: 27,
      categoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "iPhone 11",
      amount: 27,
      categoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "iPhone 11",
      amount: 27,
      categoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "iPhone 11",
      amount: 27,
      categoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "iPhone 11",
      amount: 27,
      categoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "iPhone 11",
      amount: 27,
      categoryId: 0,
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
          {subCategorys.map((subCategory, index) => {
            return (
              <CardSubcategorys
                key={index}
                onClick={() => {
                  setActualCategory(subCategory.id);
                  setShowProducts(true);
                }}
                active={actualCatgory === subCategory.id}
              >
                <h2>{subCategory.name}</h2>
                <BsArrowRight className="icon" />
              </CardSubcategorys>
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
                {product.categoryId === actualCatgory && (
                  <Card
                    key={index}
                    name={product.name}
                    amount={product.amount}
                    updatedAt={product.updatedAt}
                    createdAt={product.createdAt}
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
