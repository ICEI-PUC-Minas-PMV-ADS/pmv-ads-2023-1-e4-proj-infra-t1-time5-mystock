import { useEffect, useState } from "react";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import SideManager from "../../../components/sideManager";
import { Container } from "../../../styleGlobal/styles";
import { CardsWrapper, ContentCards, ButtonBack } from "./styles";
import { TitlePages, DescriptionPages } from "../../../styleGlobal/styles";
import { BsArrowLeft } from "react-icons/bs";
import Selector from "../../../components/selector";
import Card from "../../../components/card";
import { useQuery } from "react-query";
import { getCategorys } from "../../../services/api/categorys";
import {
  deleteSubcategory,
  getSubCategorys,
} from "../../../services/api/subcategorys";
import useAuth from "../../../context/auth";

export default function SubcategorysManagement() {
  const [actualCategory, setActualCategory] = useState();
  const [filterAmount, setFilterAmount] = useState();
  const [showProducts, setShowProducts] = useState(false);
  const [categorysFilter, setCategorysFilter] = useState();
  const { user } = useAuth();
  const categorys = useQuery("categorys", getCategorys, {
    onSuccess: (data) => {
      setCategorysFilter(data.filter((x) => x.usuarioId === user.id));
    },
  });
  const subCategorys = useQuery("subcategorys", getSubCategorys);

  useEffect(() => {
    setActualCategory(categorysFilter && categorysFilter[0].id);
  }, [categorysFilter]);

  useEffect(() => {
    setFilterAmount(
      subCategorys.data &&
        subCategorys.data.filter((x) => x.categoriaId === actualCategory)
    );
  }, [subCategorys.data, actualCategory]);

  return (
    <Container>
      {categorys.data &&
      subCategorys.data &&
      categorysFilter &&
      categorysFilter.length > 0 ? (
        <>
          <ContainerForm>
            <TitlePages marginTop="40px">
              Gerenciar <span>Subcategorias</span>
            </TitlePages>
            <DescriptionPages>
              Escolha uma subcategoria a ser gerenciada
            </DescriptionPages>
            <ContentCards>
              {categorys.data.map((category, index) => {
                return (
                  category.usuarioId === user.id && (
                    <Selector
                      key={index}
                      category={category}
                      setShowProducts={setShowProducts}
                      setActualCategory={setActualCategory}
                      id={category.id}
                    />
                  )
                );
              })}
            </ContentCards>
          </ContainerForm>
          <ContainerCards show={showProducts}>
            <ButtonBack onClick={() => setShowProducts(false)}>
              <BsArrowLeft className="icon" />
            </ButtonBack>
            <SideManager
              type="Subcategorias"
              amount={filterAmount && filterAmount.length}
            />
            <CardsWrapper>
              {filterAmount && filterAmount.length > 0 ? (
                subCategorys.data.map((subCategory, index) => {
                  return (
                    <>
                      {subCategory.categoriaId === actualCategory && (
                        <Card
                          key={index}
                          name={subCategory.nome}
                          id={subCategory.id}
                          api={deleteSubcategory}
                          type="subcategoria"
                          invalidateQuery={"subcategorys"}
                        />
                      )}
                    </>
                  );
                })
              ) : (
                <p>Não há subcategorias a serem gerenciadas</p>
              )}
            </CardsWrapper>
          </ContainerCards>
        </>
      ) : (
        "Nenhuma categoria foi caastrada"
      )}
    </Container>
  );
}
