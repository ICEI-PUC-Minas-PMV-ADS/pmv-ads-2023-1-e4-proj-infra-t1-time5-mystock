import { useState } from "react";
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
  Container,
  DescriptionPages,
  TitlePages,
} from "../../../styleGlobal/styles";

export default function EditSubcategorys() {
  const { id } = useParams();
  const [actualCategory, setActualCategory] = useState(0);
  const categorys = [
    { name: "Eletrônicos", id: 0 },
    { name: "Roupas", id: 1 },
    { name: "Sapatos", id: 2 },
  ];

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
        <ContainerText>
          <Label>Nome</Label>
          <Input type="text" name="name" />
        </ContainerText>
        <ContainerText>
          <Label>Categoria</Label>
          <SelectPersonality
            value={categorys[actualCategory].name}
            itensList={categorys}
            setActualCategory={setActualCategory}
          />
        </ContainerText>
        <FilledButton>Editar</FilledButton>
      </ContainerForm>
      <ContainerCards>
        <Card
          max
          name={"Celulares"}
          updatedAt={"03/03/2023"}
          createdAt={"03/03/2023"}
        />
      </ContainerCards>
    </Container>
  );
}
