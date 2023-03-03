import {Container, ContainerText, LeftLogin, RightLogin, ContainerImg, TextField, Button, EndingText, MainText} from "./styles"

export default function Login(){
  return <Container>
  <LeftLogin image="images/background.png">
    <ContainerText>
      <h1>Olá,</h1>
      <h2>Bem vindo ao myStock!</h2>
      <h4>Aqui você pode criar um quadro de tarefas e compartilhá-las!</h4>
    </ContainerText>
    <ContainerImg>
      <img className="principal" src="images/login-image.png" alt="desenho de um homem de camisa azul e barba colocando um icone em um tablet"/>
    </ContainerImg>
     
  </LeftLogin>
  <RightLogin>
    <MainText>
      <h1>Login</h1>
      <h4>Faça seu login para acessar o app</h4>
    </MainText>
    <TextField>
      <label for="e-mail">E-mail</label>
      <input type="text" name="e-mail" placeholder="Ex: luanasilva@email.com"></input>
      <label for="password">Senha</label>
      <input type="password" name="password" placeholder="*******"></input>         
    </TextField>
    <Button>
      Entrar
    </Button>
    <EndingText>
      <h6>Ainda não tem conta? <a href="src/pages/signUp">Cadastre-se</a>
      </h6>
    </EndingText>
  </RightLogin>
</Container>
}
