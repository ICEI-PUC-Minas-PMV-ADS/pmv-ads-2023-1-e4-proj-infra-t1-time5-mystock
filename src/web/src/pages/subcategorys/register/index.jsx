import { useFormik } from "formik";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Card from "../../../components/card";
import {
  ContainerText,
  Input,
  Label,
} from "../../../components/componentsForm/stylesGlobal";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import FilledButton from "../../../components/filledButton";
import MessageError from "../../../components/messageError";
import SelectPersonality from "../../../components/select";
import Spinner from "../../../components/spinner";
import { getCategorys } from "../../../services/api/categorys";
import {
  createSubcategory,
  getSubcategorys,
} from "../../../services/api/subcategorys";
import {
  CenterSpinner,
  Container,
  DescriptionPages,
  Form,
  InputsContent,
  TitlePages,
} from "../../../styleGlobal/styles";

export default function RegisterSubCategorys() {
  const [actualCategory, setActualCategory] = useState(0);
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });

  const dataSubctagorys = useQuery("subcategorys", getSubcategorys);

  const dataCategorys = useQuery("categorysRegister", getCategorys, {
    onSuccess: (data) => {
      formik.setFieldValue("categoriaId", data[actualCategory].id);
    },
  });

  const client = useQueryClient();

  const mutation = useMutation(createSubcategory, {
    onSuccess: () => {
      setLoading(false);
      client.invalidateQueries("subcategorysRegister");
      setMessageError({
        type: "success",
        message: "Subategoria cadastrada com sucesso",
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
      setLoading(false);
      setMessageError({
        type: "error",
        message: "Erro ao cadastrar subcategoria",
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
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      categoriaId: "",
    },

    onSubmit: (values) => {
      setLoading(true);
      mutation.mutate(values);
    },
  });

  return (
    <Container>
      {dataSubctagorys.data && dataCategorys.data ? (
        <>
          <ContainerForm>
            <Form onSubmit={formik.handleSubmit}>
              <TitlePages>
                Cadastrar <span>Subategoria</span>
              </TitlePages>
              <DescriptionPages>
                Ao lado é exibido as subcategorias relacionadas a categoria. As
                alterações irão atualizar as informações.
              </DescriptionPages>
              <InputsContent>
                <ContainerText>
                  <Label>Nome</Label>
                  <Input
                    type="text"
                    name="nome"
                    onChange={formik.handleChange}
                  />
                </ContainerText>
                <ContainerText>
                  <Label>Categoria</Label>
                  <SelectPersonality
                    value={
                      dataCategorys.data &&
                      dataCategorys.data[actualCategory].nome
                    }
                    itensList={dataCategorys.data}
                    setActualCategory={setActualCategory}
                    onChange={(value) => {
                      formik.setFieldValue("categoriaId", value);
                    }}
                  />
                </ContainerText>
                <FilledButton type="submit" loading={loading}>
                  Editar
                </FilledButton>
                {messageError && (
                  <MessageError
                    type={messageError.type}
                    message={messageError.message}
                    display={messageError.open}
                  />
                )}
              </InputsContent>
            </Form>
          </ContainerForm>
          <ContainerCards>
            {dataSubctagorys.data.map((subCategory, index) => {
              return <Card key={index} name={subCategory.nome} register />;
            })}
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
