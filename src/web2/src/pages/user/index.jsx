import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Container,
  RightLogin,
  TextField,
  EndingText,
  Input,
  Label,
} from "../../components/componentsForm/stylesGlobal";
import FilledButton from "../../components/filledButton";
import MessageError from "../../components/messageError";
import useAuth from "../../context/auth";
import { Form } from "../../styleGlobal/styles";
import http from "../../services/http";

export default function EditUser(){
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  console.log(user)
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });
  const formik=useFormik({ 
    initialValues:{  
    name: user&& user.name,
    sobrenome: user && user.sobrenome,
    email: user && user.email,
    senha: user && user.senha,},
    onSubmit:(values)=>{
      setLoading(true)
      http.put(`api/Usuarios/${user.id}`,{
        id: user.id,
        name: values.name,
        sobrenome: values.sobrenome,
        email: values.email,
        senha: values.senha,
      }).then(()=>{
        setLoading(false)
        localStorage.setItem("user",user)
        setMessageError({
          type: "success",
          message: "Usuário editado com sucesso",
          open: true,
        });
        setTimeout(() => {
          setMessageError({
            type: "",
            message: "",
            open: false,
          });
        }, 3000);
      })
    }
  })
  return <Container>

  <RightLogin>
    <Form onSubmit={formik.handleSubmit}>
      <TextField>
        <Label>Primeiro Nome</Label>
        <Input
          type="text"
          name="name"
          placeholder="Ex: Luana"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <Label>Último Nome</Label>
        <Input
          type="text"
          name="sobrenome"
          placeholder="Ex: Silva"
          onChange={formik.handleChange}
          value={formik.values.sobrenome}
        />
        <Label>E-mail</Label>
        <Input
          type="text"
          name="email"
          placeholder="Ex: luanasilva@email.com"
          onChange={formik.handleChange}
          value={formik.values.email}
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
        Editar
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
       Sair
      </h4>
    </EndingText>
  </RightLogin>
</Container>
  
}