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
  TitleCategoryCard,
  ModalCategoryCard,
} from "./styles";
import { TitlePages, DescriptionPages } from "../../../styleGlobal/styles";
import { BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

export default function ProductManagement() {
  const [actualCatgory, setActualCategory] = useState(0);
  const [actualSubCatgory, setActualSubCategory] = useState(0);
  const [showProducts, setShowProducts] = useState(false);
  const [openSubcategorys, setOpenSubcategorys] = useState({
    open: false,
    item: null,
  });

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
      name: "iPhone 11",
      amount: 27,
      subcategoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "iPhone 11",
      amount: 27,
      subcategoryId: 0,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
      name: "Blusa vermelha",
      amount: 27,
      subcategoryId: 1,
      updatedAt: "11/02/2023",
      createdAt: "11/02/2023",
    },
    {
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
              <CardSubcategorys key={index}>
                <TitleCategoryCard
                  onClick={() => {
                    setActualCategory(category.id);
                    setOpenSubcategorys({
                      open: !openSubcategorys.open,
                      item: category.id,
                    });
                  }}
                  active={actualCatgory === category.id}
                >
                  <h2>{category.name}</h2>
                  {openSubcategorys.open &&
                  openSubcategorys.item === category.id ? (
                    <MdKeyboardArrowDown className="icon" />
                  ) : (
                    <MdKeyboardArrowRight className="icon" />
                  )}
                </TitleCategoryCard>
                <ModalCategoryCard
                  display={
                    openSubcategorys.open &&
                    openSubcategorys.item === category.id
                  }
                >
                  {subCategorys.map((item, index) => {
                    return (
                      <>
                        {item.categoryId === category.id && (
                          <h3
                            key={index}
                            onClick={() => {
                              setActualSubCategory(item.id);
                              setShowProducts(true);
                            }}
                          >
                            {item.name}
                          </h3>
                        )}
                      </>
                    );
                  })}
                </ModalCategoryCard>
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
                {product.subcategoryId === actualSubCatgory && (
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
