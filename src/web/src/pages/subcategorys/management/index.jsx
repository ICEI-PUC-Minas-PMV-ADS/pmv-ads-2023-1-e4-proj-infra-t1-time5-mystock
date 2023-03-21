import { useMemo, useState } from "react";
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
import { getSubCategorys } from "../../../services/api/subcategorys";
import { useFormik } from "formik";

export default function SubcategorysManagement() {
  const [showProducts, setShowProducts] = useState(false);

  const categorys = useQuery("categorys", getCategorys);
  const subCategorys = useQuery("subcategorys", getSubCategorys, {
    onSuccess: (data) => {
      formik.setFieldValue("id", data[0].categoriaId);
    },
  });

  const formik = useFormik({
    initialValues: {
      id: "",
    },
  });

  const amountSubcategorys = useMemo(() => {
    const filterAmount =
      subCategorys.data &&
      subCategorys.data.filter((x) => x.categoriaId === formik.values.id);

    return filterAmount;
  }, []);

  return (
    <Container>
      {categorys.data && subCategorys.data ? (
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
                  <Selector
                    key={index}
                    category={category}
                    setShowProducts={setShowProducts}
                    formik={formik}
                  />
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
              amount={amountSubcategorys && amountSubcategorys.length}
            />
            <CardsWrapper>
              {subCategorys.data.map((subCategory, index) => {
                if (subCategory.categoriaId === formik.values.id) {
                  return (
                    <Card
                      key={index}
                      name={subCategory.nome}
                      id={subCategory.id}
                    />
                  );
                }
              })}
            </CardsWrapper>
          </ContainerCards>
        </>
      ) : (
        "Carregando"
      )}
    </Container>
  );
}
