import { useFormik } from "formik";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router";
import Card from "../../../components/card";
import {
  ContainerText,
  Input,
  Label,
} from "../../../components/componentsForm/stylesGlobal";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import FilledButton from "../../../components/filledButton";
import SelectPersonality from "../../../components/select";
import {
  editSubcategory,
  getSubcategoryById,
} from "../../../services/api/subcategorys";
import {
  Container,
  DescriptionPages,
  InputsContent,
  TitlePages,
} from "../../../styleGlobal/styles";

export default function EditSubcategorys() {
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ["categorysEdit", id],
    getSubcategoryById,
    {
      onSuccess: (data) => {
        for (let key in data) {
          formik.setFieldValue(key, data[key]);
        }
      },
    }
  );

  const client = useQueryClient();

  const mutation = useMutation(editSubcategory, {
    onSuccess: () => {
      setLoading(false);
      client.invalidateQueries("categorysRegister");
      setMessageError({
        type: "success",
        message: "Categoria editada com sucesso",
        open: true,
      });
      setTimeout(() => {
        setMessageError({
          type: "",
          message: "",
          open: false,
        });
      }, 3000);
    },
    onError: (e) => {
      setTimeout(() => {
        setMessageError({
          type: "error",
          message: "Erro ao editar categoria",
          open: true,
        });
      }, 4000);
    },
  });

  const formik = useFormik({
    initialValues: {
      id: "",
      nome: "",
    },

    onSubmit: (values) => {
      setLoading(true);
      mutation.mutate(values);
    },
  });

  return (
    <Container>
      <ContainerForm>
        <TitlePages>
          Editar <span>Subategoria</span>
        </TitlePages>
        <DescriptionPages>
          Ao lado é exibido as informações da subcategoria. As alterações irão
          atualizar as informações.
        </DescriptionPages>
        <InputsContent>
          <ContainerText>
            <Label>Nome</Label>
            <Input type="text" name="name" />
          </ContainerText>
          <ContainerText>
            <Label>Categoria</Label>
            <SelectPersonality
            /* value={categorys[actualCategory].name}
              itensList={categorys}
              setActualCategory={setActualCategory} */
            />
          </ContainerText>
          <FilledButton>Editar</FilledButton>
        </InputsContent>
      </ContainerForm>
      <ContainerCards>
        <Card
          max
          name={"Celulares"}
          updatedAt={"03/03/2023"}
          createdAt={"03/03/2023"}
          type="subcategoria"
        />
      </ContainerCards>
    </Container>
  );
}
