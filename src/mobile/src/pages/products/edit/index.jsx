import React, { useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Text, View } from 'react-native';
import { useFormik } from 'formik';
import { useParams } from '@react-navigation/native';
import SelectPersonality from '../../../components/select';
import FilledButton from '../../../components/filledButton';
import MessageError from '../../../components/messageError';
import Card from '../../../components/card';
import Spinner from '../../../components/spinner';
import { getSubCategorys } from '../../../services/api/subcategorys';
import { getProductById, editProduct } from '../../../services/api/products';
import { useAuth } from '../../../context/auth';
import http from '../../../services/http';

const RegisterProduct = () => {
  const [loading, setLoading] = useState(false);
  const [categorys, setCategorys] = useState();
  const { user } = useAuth();
  const [subcategoryValue, setSubcategoryValue] = useState();
  const [filterId, setFilterId] = useState([]);
  const [actualCategory, setActualCategory] = useState();
  const [messageError, setMessageError] = useState({
    type: '',
    message: '',
    open: false,
  });

  const { id } = useParams();

  const { data } = useQuery(['productsEdit', id], getProductById, {
    onSuccess: (data) => {
      for (let key in data) {
        if (key === 'id') {
          continue;
        }
        formik.setFieldValue(key, data[key]);
      }
      setSubcategoryValue(data.subCategoriaId);
    },
  });

  useEffect(() => {
    http.get(`api/Categorias`).then((res) => {
      setCategorys(res.data.filter((x) => x.usuarioId === user.id));
    });
  }, [user.id]);

  useEffect(() => {
    let ids = [];
    categorys &&
      categorys.forEach((category) => {
        ids.push(category.id);
      });
    setFilterId(ids);
  }, [categorys]);

  const dataSubcategorys = useQuery('subcategorys', getSubCategorys, {
    refetchOnWindowFocus: false,
  });

  const client = useQueryClient();

  const subCategorias = dataSubcategorys.data
    ? dataSubcategorys.data.filter(
        (x) => filterId && filterId.includes(x.categoriaId),
      )
    : [];

  var nameSubcategory = subCategorias.find((x) => x.id === subcategoryValue);

  const mutation = useMutation((id) => editProduct(id), {
    onSuccess: () => {
      setLoading(false);
      client.invalidateQueries('productsEdit');
      setMessageError({
        type: 'success',
        message: 'Produto editado com sucesso',
        open: true,
      });
      setTimeout(() => {
        setMessageError({
          type: '',
          message: '',
          open: false,
        });
      }, 3000);
    },
    onError: (e) => {
      console.dir(e);
      setLoading(false);
      setMessageError({
        type: 'error',
        message: 'Erro ao editar produto',
        open: true,
      });
      setTimeout(() => {
        setMessageError({
          type: '',
          message: '',
          open: false,
        });
      }, 3000);
    },
  });

  const formik = useFormik({
    initialValues: {
      id: id,
      nome: '',
      quantidade: '',
      subCategoriaId: '',
    },

    onSubmit: (values) => {
      setLoading(true);
      mutation.mutate(values);
    },
  });
  return (
    <Container>
      {nameSubcategory && subCategorias ? (
        <>
          <ContainerForm>
            <Formik onSubmit={formik.handleSubmit}>
              {() => (
                <>
                  <TitlePages>
                    <Text>
                      <Text style={{ fontWeight: 'bold' }}>Cadastrar</Text> produto
                    </Text>
                  </TitlePages>
                  <DescriptionPages>
                    <Text>
                      Ao lado é exibido os produtos relacionados a categoria do formulário. O produto será adicionado a lista de produtos da categoria informada.
                    </Text>
                  </DescriptionPages>
                  <InputsContent>
                    <ContainerText>
                      <Label>Nome</Label>
                      <Input
                        type="text"
                        name="nome"
                        value={formik.values.nome}
                        onChangeText={formik.handleChange('nome')}
                      />
                      <Label>Quantidade</Label>
                      <Input
                        type="text"
                        name="quantidade"
                        value={formik.values.quantidade}
                        onChangeText={formik.handleChange('quantidade')}
                      />
                      <Label>Subcategoria</Label>
                      <SelectPersonality
                        value={
                          subCategorias[actualCategory]
                            ? subCategorias[actualCategory].nome
                            : nameSubcategory.nome
                        }
                        itensList={subCategorias}
                        setActualCategory={setActualCategory}
                        onValueChange={(value) => {
                          formik.setFieldValue('subCategoriaId', value);
                        }}
                      />
                    </ContainerText>
                    <FilledButton onPress={formik.handleSubmit} loading={loading}>
                      <Text>Editar</Text>
                    </FilledButton>
                    {messageError && (
                      <MessageError
                        type={messageError.type}
                        message={messageError.message}
                        display={messageError.open}
                      />
                    )}
                  </InputsContent>
                </>
              )}
            </Formik>
          </ContainerForm>
          <ContainerCards>
            {data && (
              <Card
                max
                name={data.nome}
                amount={data.quantidade}
                id={id}
                api={deleteProduct}
              />
            )}
          </ContainerCards>
        </>
      ) : (
        <CenterSpinner>
          <Spinner size="30px" />
        </CenterSpinner>
      )}
    </Container>
  );
}