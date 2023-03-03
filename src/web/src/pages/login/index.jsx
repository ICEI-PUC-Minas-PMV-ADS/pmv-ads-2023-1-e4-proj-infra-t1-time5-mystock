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

export default function Login() {
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
          <Text>Login</Text>
          <h4>Faça seu login para acessar o app</h4>
        </MainText>
        <TextField>
          <Label>E-mail</Label>
          <Input
            type="text"
            name="email"
            placeholder="Ex: luanasilva@email.com"
          />
          <Label>Senha</Label>
          <Input type="password" name="password" placeholder="*******" />
        </TextField>
        <FilledButton>Entrar</FilledButton>
        <EndingText>
          <h4>
            Ainda não tem conta? <a href="src/pages/signUp">Cadastre-se</a>
          </h4>
        </EndingText>
      </RightLogin>
    </Container>
  );
}
