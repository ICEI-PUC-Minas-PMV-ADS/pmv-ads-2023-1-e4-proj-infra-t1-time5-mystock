import { useParams } from "react-router";
import Card from "../../../components/card";
import {
  ContainerText,
  Input,
  Select,
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

export default function EditProducts() {
  const { id } = useParams();

  const categorys = [
    { name: "Eletrônicos", id: 0 },
    { name: "Roupas", id: 1 },
    { name: "Sapatos", id: 2 },
  ];

  return (
    <Container>
      <ContainerForm>
        <TitlePages marginTop="40px">
          Editar <span>Produto</span>
        </TitlePages>
        <DescriptionPages>
          Ao lado é exibido as informações do produto. As alterações irão
          atualizar as informações.
        </DescriptionPages>
        <ContainerText>
          <Label>Nome</Label>
          <Input type="text" name="name" />
        </ContainerText>
        <ContainerText>
          <Label>Categoria</Label>
          <Select name="category">
            {categorys.map((category, index) => {
              return <option key={index}>{category.name}</option>;
            })}
          </Select>
        </ContainerText>
        <ContainerText>
          <Label>Quantidade</Label>
          <Input type="text" name="quantity" />
        </ContainerText>
        <FilledButton>Editar</FilledButton>
      </ContainerForm>
      <ContainerCards>
        <Card
          max
          name={"iPhone 11"}
          amount={"78"}
          updatedAt={"03/03/2023"}
          createdAt={"03/03/2023"}
        />
      </ContainerCards>
    </Container>
  );
}
