import { Fragment, useState } from "react";
import Card from "../../../components/card";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import SideManager from "../../../components/sideManager";
import { CenterSpinner, Container } from "../../../styleGlobal/styles";
import { CardsWrapper, ContentCards, ButtonBack } from "./styles";
import { TitlePages, DescriptionPages } from "../../../styleGlobal/styles";
import { BsArrowLeft } from "react-icons/bs";
import Selector from "../../../components/selector";
import useAuth from "../../../context/auth";
import { useQuery } from "react-query";
import { getProducts } from "../../../services/api/products";
import Spinner from "../../../components/spinner";
import { getCategorys } from "../../../services/api/categorys";
import { getSubCategorys } from "../../../services/api/subcategorys";

export default function ProductManagement() {
  const [actualCategory, setActualCategory] = useState(0);
  const [actualSubCatgory, setActualSubCategory] = useState(0);
  const [showProducts, setShowProducts] = useState(false);
  const { user } = useAuth();
  const { data } = useQuery("products", getProducts);
  const categorys = useQuery("categorysProduct", getCategorys);
  const subcategorys = useQuery("subcategorysProduct", getSubCategorys);

  return (
    <Container>
      {data ? (
        <Fragment>
          <ContainerForm>
            <TitlePages marginTop="40px">
              Gerenciar <span>Produtos</span>
            </TitlePages>
            <DescriptionPages>
              Escolha uma categoria dos produtos a serem gerenciados
            </DescriptionPages>
            <ContentCards>
              {categorys &&
                categorys.data.map((category, index) => {
                  return (
                    <Selector
                      key={index}
                      category={category}
                      setActualSubCategory={setActualSubCategory}
                      setShowProducts={setShowProducts}
                      setActualCategory={setActualCategory}
                      subCategorys={subcategorys && subcategorys.data}
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
              {data.map((product, index) => {
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
        </Fragment>
      ) : (
        <CenterSpinner>
          <Spinner size="30px" />
        </CenterSpinner>
      )}
    </Container>
  );
}
