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
  TitlePages,
} from "../../../styleGlobal/styles";

export default function RegisterCategorys() {
  const [actualCategory, setActualCategory] = useState(0);
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

  return (
    <Container>
      <ContainerForm>
        <TitlePages>
          Cadastrar <span>Subategoria</span>
        </TitlePages>
        <DescriptionPages>
          Ao lado é exibido as subcategorias relacionadas a categoria. As
          alterações irão atualizar as informações.
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
        {subCategorys.map((subCategory, index) => {
          return (
            <>
              {subCategory.categoryId === actualCategory && (
                <Card key={index} name={subCategory.name} register />
              )}
            </>
          );
        })}
      </ContainerCards>
    </Container>
  );
}
