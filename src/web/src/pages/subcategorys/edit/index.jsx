import { useState } from "react";
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
  InputsContent,
  TitlePages,
} from "../../../styleGlobal/styles";

export default function EditSubcategorys() {
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
        <InputsContent>
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
