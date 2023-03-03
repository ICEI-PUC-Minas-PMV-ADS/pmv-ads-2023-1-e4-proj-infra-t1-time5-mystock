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
import {
  Container,
  DescriptionPages,
  TitlePages,
} from "../../../styleGlobal/styles";

export default function EditCategorys() {
  const { id } = useParams();

  const categorys = [
    { name: "Eletrônicos", id: 0 },
    { name: "Roupas", id: 1 },
    { name: "Sapatos", id: 2 },
  ];

  return (
    <Container>
      <ContainerForm>
        <TitlePages>
          Editar <span>Categoria</span>
        </TitlePages>
        <DescriptionPages>
          Ao lado é exibido as informações da categoria. As alterações irão
          atualizar as informações.
        </DescriptionPages>
        <ContainerText>
          <Label>Nome</Label>
          <Input type="text" name="name" />
        </ContainerText>
        <FilledButton>Editar</FilledButton>
      </ContainerForm>
      <ContainerCards>
        <Card
          max
          name={"Eletrônicos"}
          updatedAt={"03/03/2023"}
          createdAt={"03/03/2023"}
        />
      </ContainerCards>
    </Container>
  );
}
