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
import useAuth from "../../context/auth";
import { Form } from "../../styleGlobal/styles";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      sobrenome: "",
      email: "",
      senha: "",
    },

    onSubmit: (values) => {
      setLoading(true);
      signUp({
        name: values.name,
        sobrenome: values.sobrenome,
        email: values.email,
        senha: values.senha,
      }).then(
        () => {
          setLoading(false);
          navigate("/login");
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
            <Text>Cadastro</Text>
          </MainText>
          <TextField>
            <Label>Primeiro Nome</Label>
            <Input
              type="text"
              name="name"
              placeholder="Ex: Luana"
              onChange={formik.handleChange}
            />
            <Label>Último Nome</Label>
            <Input
              type="text"
              name="sobrenome"
              placeholder="Ex: Silva"
              onChange={formik.handleChange}
            />
            <Label>E-mail</Label>
            <Input
              type="text"
              name="email"
              placeholder="Ex: luanasilva@email.com"
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
            Cadastrar
          </FilledButton>
        </Form>
        <EndingText>
          <h4>
            Já tem cadastro? Faça o <a href="/login">Login</a>
          </h4>
        </EndingText>
      </RightLogin>
    </Container>
  );
}
