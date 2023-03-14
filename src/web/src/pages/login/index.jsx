import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
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
import useAuth from "../../context/auth";
import { Form } from "../../styleGlobal/styles";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },

    onSubmit: (values) => {
      setLoading(true);
      login({
        // Lembrar de falar com o Rapha para fazer com que a Api aceite o email do usuário
        email: values.email,
        senha: values.senha,
      }).then(
        () => {
          setLoading(false);
          navigate("/products");
        },
        (e) => {
          console.log(e);
        }
      );
    },
  });

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
        <Form onSubmit={formik.handleSubmit}>
          <MainText>
            <Text>Login</Text>
            <h4>Faça seu login para acessar o app</h4>
          </MainText>
          <TextField>
            <Label>Email</Label>
            <Input
              type="text"
              name="id"
              placeholder="email"
              onChange={formik.handleChange}
            />
            <Label>Senha</Label>
            <Input
              type="password"
              name="senha"
              placeholder="*******"
              onChange={formik.handleChange}
            />
          </TextField>
          <FilledButton loading={loading} type="submit">
            Entrar
          </FilledButton>
        </Form>

        <EndingText>
          <h4>
            Ainda não possui uma conta? <a href="/register">Cadastre-se</a>
          </h4>
        </EndingText>
      </RightLogin>
    </Container>
  );
}
