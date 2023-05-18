# Arquitetura da Solução

![arquitetura](https://user-images.githubusercontent.com/91069587/223845852-1e8460c8-94e1-40aa-b8c3-29882825be5c.jpg)

## Diagrama de Classes

![classes](https://user-images.githubusercontent.com/91069587/233789227-5c99e44f-8b5a-46ff-ba77-0384f89f0dcd.jpg)

## Modelo ER

![er](https://user-images.githubusercontent.com/91069587/233789250-90d034ae-3ce4-45e7-adfb-f5ca4997fbb8.jpg)


## Esquema Relacional

![relacional](https://user-images.githubusercontent.com/91069587/233789265-2ead6844-cb2e-4f60-8917-f98e9ad2d8a4.jpg)


## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

O grupo optou por priorizar algumas sub-características para o projeto MyStock seguindo os fundamentos descriminados na norma técnica ISO/IEC 25010, seguem os itens para a avaliação da qualidade de software.

Adequação funcional: 
-Será averiguado se o público-alvo para qual a aplicação móvel foi oferecida está satisfeito com o produto.

Confiabilidade:
-Será analisado se a aplicação apresenta algum tipo de falha durante sua execução. Ou ainda se ocorre algum comportamento inesperado durante seu funcionamento após alguma modificação.

Usabilidade:
-A praticidade do uso do aplicativo é um dos pilares para uma experiência prazerosa para o usuário. O projeto está sendo desenvolvido de forma que as atividades no uso da aplicação sejam realizadas com a menor quantidade de cliques.

Eficiência:
-Serão realizados testes para avaliar a performance do software e os mecanismos utilizados. O software apresentará funcionalidades que são auto explicativas.

Manutenabilidade:
-Serão realizados testes relacionados à lentidão durante o uso. Se tratando da reusabilidade da aplicação serão reduzidos custos e tempo no processo de desenvolvimento de modo a aumentar a qualidade, entre outras diversas vantagens.

## Documentação API MyStock

## Finalidade:

-Receber requisição da aplicação web e mobile MyStock, para controle de estoque, onde a primeira requisição é de cadastro e após o login do cadastrado todas informações de estoque acessada estará vinculada a esse login.

## Especificações da API:

> - 	Protocolo HTTP
> - 	JWT para gerar tokem de acesso
> - 	Crud para criação de usuários, categorias, subcategorias e produtos
> - 	Banco de dados SQL com SqlServer

## Rotas:
- /api/Usuarios
- /api/Usuarios/{Autenticacao}
- /api/Categorias
- /api/Categorias/{UsuarioId}
- /api/SubCategorias
- /api/Produtos
## OBS: Após feita a autenticação o ID  do usuário é passado como parâmetro para as categorias, fazendo com que os relacionamentos fiquem vinculados ao usuário logado.
## OBS2: Para edição, visualização e exclusão o parâmetro é o ID correspondente colocado ao final da rota, exemplo:
 - /api/Model-correspondente/{id}, esse exemplo serve para todas a rotas acima.



