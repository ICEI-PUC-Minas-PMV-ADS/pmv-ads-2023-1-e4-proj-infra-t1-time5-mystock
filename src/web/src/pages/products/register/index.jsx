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
  InputsContent,
  TitlePages,
} from "../../../styleGlobal/styles";


export default function RegisterProduct() {
  const teste = [
    {name: "Iphone 11"},
    ];


  return (
    <Container>
      <ContainerForm>
        <TitlePages>
          <span>Cadastrar</span> produto
        </TitlePages>
        <DescriptionPages>
        Ao lado é exibido os produtos relacionados a categoria do formulário. O produto será adicionado a lista de produtos da categoria informada.
        </DescriptionPages>
        <InputsContent>
          <ContainerText>
            <Label>Nome</Label>
            <Input type="text" name="name" />
            <Label>Categoria</Label>
            <Input type="text" name="category" />
            <Label>Quantidade</Label>
            <Input type="number" name="quantity" />
          </ContainerText>
          <FilledButton>Cadastrar</FilledButton>
        </InputsContent>
      </ContainerForm>
      <ContainerCards>

      {teste.map((item, index)=>{
      return <Card key={index} name={item.name} register />
      })}

      </ContainerCards>
    </Container>
  );
}