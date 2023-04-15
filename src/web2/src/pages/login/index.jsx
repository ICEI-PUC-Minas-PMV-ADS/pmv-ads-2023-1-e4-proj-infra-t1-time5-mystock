import { useFormik } from "formik";
import { useEffect, useState } from "react";
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
import MessageError from "../../components/messageError";
import useAuth from "../../context/auth";
import { Form } from "../../styleGlobal/styles";
import Background from "../../assets/images/background.png";
import ManBlue from "../../assets/images/login-image.png";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },

    onSubmit: (values) => {
      setLoading(true);
      login({
        email: values.email,
        senha: values.senha,
      }).then(
        () => {
          setLoading(false);
          navigate("/products");
        },
        (e) => {
          setLoading(false);
          setMessageError({
            type: "error",
            message: "Email ou Senha inválidos. Por favor, tente novamente",
            open: true,
          });
          setTimeout(() => {
            setMessageError({
              type: "",
              message: "",
              open: false,
            });
          }, 3000);
        }
      );
    },
  });

  return (
    <Container>
      <LeftLogin image={Background}>
        <ContainerText>
          <Text>Olá,</Text>
          <h2>Bem vindo ao myStock!</h2>
          <h4>Aqui você pode gerenciar seu estoque de produtos!</h4>
        </ContainerText>
        <ContainerImg>
          <img
            className="principal"
            src={ManBlue}
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
              type="email"
              name="email"
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
          {messageError && (
            <MessageError
              type={messageError.type}
              message={messageError.message}
              display={messageError.open}
            />
          )}
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
