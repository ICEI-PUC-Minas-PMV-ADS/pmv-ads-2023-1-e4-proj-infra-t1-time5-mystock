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


export default function RegisterCategory() {
  const teste = [
    {name: "Eletrônicos"},
    ];


  return (
    <Container>
      <ContainerForm>
        <TitlePages>
          <span>Cadastrar</span> categorias
        </TitlePages>
        <DescriptionPages>
        Ao lado é exibido as categorias existentes. O categoria será adicionado a lista de categorias existentes.
        </DescriptionPages>
        <InputsContent>
          <ContainerText>
            <Label>Nome</Label>
            <Input type="text" name="name" />
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