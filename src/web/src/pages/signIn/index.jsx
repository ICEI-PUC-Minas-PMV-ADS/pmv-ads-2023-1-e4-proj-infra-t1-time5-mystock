import {
  Container,
  ContainerText,
  LeftLogin,
  RightLogin,
  ContainerImg,
  TextField,
  EndingText,
  MainText,
  Text,
  Input,
  Label,
} from "../../components/componentsForm/stylesGlobal";
import FilledButton from "../../components/filledButton";

export default function SignIn() {
  return (
    <Container>
      <LeftLogin image="images/background.png">
        <ContainerText>
          <Text>Olá,</Text>
          <h2>Bem vindo ao myStock!</h2>
          <h4>Aqui você pode gerenciar seu estoque de produtos!</h4>
        </ContainerText>
        <ContainerImg>
          <img
            className="principal"
            src="images/login-image.png"
            alt="desenho de um homem de camisa azul e barba colocando um icone em um tablet"
          />
        </ContainerImg>
      </LeftLogin>
      <RightLogin>
        <MainText>
          <Text>Cadastro</Text>
        </MainText>
        <TextField>
            <Label>Primeiro Nome</Label>
            <Input
              type="text"
              name="firstName"
              placeholder="Ex: Luana"
            />
            <Label>Último Nome</Label>
            <Input
              type="text"
              name="lastName"
              placeholder="Ex: Silva"
            />
          <Label>E-mail</Label>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Ex: luanasilva@email.com"
                    />
          
          <Label>Senha</Label>
          <Input type="password" name="password" placeholder="*******" />
        </TextField>
        <FilledButton>Cadastrar</FilledButton>
        <EndingText>
          <h4>
            Já tem cadastro? Faça o <a href="/login">Login</a>
          </h4>
        </EndingText>
      </RightLogin>
    </Container>
  );
}