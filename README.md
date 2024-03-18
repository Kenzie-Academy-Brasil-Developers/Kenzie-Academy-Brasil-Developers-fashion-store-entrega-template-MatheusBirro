# Fashion Store Front-End.

## Inicialização do projeto.
- **Node Version**: 20.9.0^
- **Npm Version**: 10.1.0^
- **Instalação de dependências**: `npm i`| `npm install`

## Introdução
O Fashion Store é um projeto Front-End em react baseado no figma disponibilizado pela minha escola (Kenzie Academy) e utilizando uma API gerada por eles.

O projeto consiste em um site de venda de produto de roupa, onde o usuário consegue criar uma conta de admin e alterar os produtos no banco de dados da API.

## Fashion Store API
- **Documentação**: <https://github.com/Kenzie-Academy-Brasil-Developers/fashion-store-api>
- **URL Base**: <https://fashion-store-api.onrender.com/>

>[!WARNING]
>Como a API está rodando em um servidor grátis pode ser que ela demore um pouco para iniciar e após um tempo sem uso o banco de dados será reiniciado.

## Vercel 
- **Link**: <https://fashionstore-getfa5zr1-matheusbirros-projects.vercel.app>

## Figma 
- **Link**: <https://www.figma.com/file/PjMqKkuTOt87DcufrQ0WJV/Fashion-Store?type=design&node-id=0-1&mode=design>

Esse foi o figma usado como refência, porém como não havia todas as páginas mobile nele, algumas páginas eu desenvolvi da maneira que achei mais coerente.

## Estilização

Toda a parte de CSS foi feita através da biblioteca do SASS.

## Bibliotecas Usadas
- **React**: <https://react.dev/>
- **ZOD Documentação**: <https://zod.dev/>
- **React-Toastify Documentação**: <https://fkhadra.github.io/react-toastify/introduction/>
- **React-axios Documentação**: <https://www.npmjs.com/package/react-axios>
- **React DOM Documentação**: <https://legacy.reactjs.org/docs/react-dom.html>
- **React Router DOM Documentação**: <https://reactrouter.com/en/main>
- **React Hook Form Documentação**: <https://react-hook-form.com/docs>
- **SASS Documentação**: <https://sass-lang.com/documentation/>


## Páginas
### Tela de Cadastro
1. **Acesso**: Para o acesso a tela de cadastro foi feita uma alteração no layout do figma da Home alterando o texto do botão e adicionando uma nova funcionalidade de levar o usuário a tela de login onde o mesmo poderá acessar a tela de cadastro através do botoão "cadastre-se".

2. **Cadastro**: Todos os requisitos do cadastro são feitos através da biblioteca do ZOD no arquivo `FormSchema.js` pela constante `formSchemaRegister`.

3. **Sucesso**: Em caso de sucesso no cadastro será gerado um toast de sucesso através da biblioteca React-Toastify e o usuário será redirecionado para a página de login automaticamente.

4. **Erro**: Em caso de erro será gerado um erro através do toast ou indicará o erro abaixo do campo com erro.

### Tela de Login
1. **Acesso**: Para o acesso a tela de Login foi feita uma alteração no layout do figma da Home alterando o texto do botão e adicionando uma nova funcionalidade de levar o usuário a tela de login.

2. **Login**: Todos os requisitos do login são feitos através da biblioteca do ZOD no arquivo `FormSchema.js` pela constante `formSchemaLogin`.

3. **Sucesso**: Em caso de sucesso no login será gerado um toast de sucesso através da biblioteca React-Toastify e o usuário será redirecionado para o painel do administrador automaticamente.

4. **Erro**: Em caso de erro será gerado um toast indicando o erro.

### Tela de Produtos do Administrador
1. **Criando novo produto**: Foi usado o caminho de uma imagem como padrão caso não seja passado o link de nenhuma imagem pois a API usada não fornece uma imagem padrão caso ela não seja passada.

2. **Editando produto**: A alteração dos produtos terá as mesmas regras da criação, porém o model que abre já vem com os campos preenchidos, como essa alteração so pode ser feita por um admin essa alteração aparecerá em todo o site.

### Tela de Produtos Específico

1. **Acesso**: Clicando no botão `Saiba Mais` vc terá acesso a uma página específica de cada produto contendo mais informações sobre ele.

2. **Problemas no desenvolvimento**: Enquanto estava desenvolvendo essa página tive dificuldades no momento de retirar o produto principal da página do lista de recomendação de uma forma dinâmica onde eu pudesse usar a mesma lista da home page na página especifica de cada produto, para resolver esse problema criei um UseState chamado `filteredProductList` para que eu tivesse uma lista apenas para isso, eu começo "setando" nela todos os produtos no momento em que a página é carregada pela função `loadProducts` e para renderizar a lista já filtrada existe uma condição dentro da `renderProducts` onde a variavel `product` é setada no momento do clique no "Saiba mais" através do id do produto.  

```typescript
if (Object.keys(product).length != 0) {
    const newFilteredProductList = productList.filter( (products) => products !== product)
    setFilteredProductList(newFilteredProductList)
}
```

### HomePage

1. **Carrinho de compras**: Para que o carrinho tivesse um contador em cada produto podendo alterar sua quantidade dentro do próprio modal foram criados dois UseState `cartProductListFull` que contém todos os produtos do carrinho e `cartProductList` que contém apenas um produto de cada para que seja renderizado de maneira correta no carrinho.

### Proteção das Rotas de Administrador

Todas as rotas de admin são protegidos pela função `ProtectedAdminRoutes` que só permitem o acesso caso tenha sido feito o login.