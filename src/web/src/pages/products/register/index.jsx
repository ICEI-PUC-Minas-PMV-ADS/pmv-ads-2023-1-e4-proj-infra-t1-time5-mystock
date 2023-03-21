import { useMutation, useQuery, useQueryClient } from "react-query";
import Card from "../../../components/card";
import {
  ContainerText,
  Input,
  Label,
  Select,
} from "../../../components/componentsForm/stylesGlobal";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import FilledButton from "../../../components/filledButton";
import {
  CenterSpinner,
  Container,
  DescriptionPages,
  InputsContent,
  TitlePages,
} from "../../../styleGlobal/styles";
import { createProducts, getProducts } from "../../../services/api/products";
import { useState } from "react";
import { useFormik } from "formik";
import {
  getSubCategorys,
  getSubcategorys,
} from "../../../services/api/subcategorys";
import Spinner from "../../../components/spinner";

export default function RegisterProduct() {
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });
  const { data, isLoading } = useQuery("products", getProducts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const dataSubcategorys = useQuery("subcategorys", getSubCategorys);

  const client = useQueryClient();

  return (
    <Container>
      {dataSubcategorys.data ? (
        <>
          <ContainerForm>
            <TitlePages>
              <span>Cadastrar</span> produto
            </TitlePages>
            <DescriptionPages>
              Ao lado é exibido os produtos relacionados a categoria do
              formulário. O produto será adicionado a lista de produtos da
              categoria informada.
            </DescriptionPages>
            <InputsContent>
              <ContainerText>
                <Label>Nome</Label>
                <Input type="text" name="nome" />
                <Label>Subcategoria</Label>
                <Select>
                  {dataSubcategorys.data.map((subcategory, index) => {
                    return <option></option>;
                  })}
                </Select>
                <Label>Quantidade</Label>
                <Input type="number" name="quantity" />
              </ContainerText>
              <FilledButton>Cadastrar</FilledButton>
            </InputsContent>
          </ContainerForm>
          <ContainerCards>
            {/* {teste.map((item, index) => {
          return <Card key={index} name={item.name} register />;
        })} */}
          </ContainerCards>
        </>
      ) : (
        <CenterSpinner>
          <Spinner size="30px" />
        </CenterSpinner>
      )}
    </Container>
  );
}
