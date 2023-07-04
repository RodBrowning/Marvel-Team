# README - Aplicação Marvel Team

Após estudar a API e compreender os dados, foquei em estabelecer a identidade visual da aplicação. Utilizei o Figma para criar o layout com os traços visuais do site da Marvel. Além do layout, aqui foram definidas as cores, fontes e tamanhos das fontes. Optei por seguir a temática de quadrinhos, com traços finos e bem definidos, cores vivas e animações sutis e confortáveis. Foquei em uma persona jovem, familiarizada com tecnologia, tendo em mente que se espera uma experiência imersiva por parte desse público.

## Identidade Visual

Foram criadas três telas no protótipo. A primeira é a **relação dos super-heróis**, que é a página inicial **(home page)**. Nesta tela, criei um **mosaico** de arranjo que lembra as páginas dos quadrinhos, com a imagem do personagem em destaque e seu nome na parte inferior direita. O tamanho dos cards foi pensado para se disporem de forma que a quantidade de cores e a visão de vários personagens agrupados possam engajar o usuário na experiência. Apliquei um efeito interessante com hover do mouse, que ilumina as imagens sutilmente, oferecendo um destaque extra aos detalhes do personagem. Nos dispositivos móveis, ao pressionar a imagem, ela se ilumina.

Nessa mesma tela, também se encontra a **search box para filtrar os personagens**, que são exibidos seguindo a mesma disposição inicial.

**A segunda tela é a do personagem**, onde é exibida a imagem, nome, descrição, 4 quadrinhos em que participou e uma lista completa com todos os quadrinhos, séries e eventos em que o personagem teve participação. 

Até aqui, atenderia aos critérios do desafio, porém, achei um desperdício não utilizar a quantidade de informações interessantes que tinha à disposição.

Então, pensei em uma terceira tela mais genérica, com os **trabalhos relacionados ao personagem**, que poderia detalhar mais os itens da lista. Nessa página, é exibida a imagem, o tipo de quadrinho (como comic, digital vertical comic, infinite comic, etc.), título, data de lançamento, autor, ano de início e fim da série, dia de início e fim dos eventos, além de outro mosaico com os personagens presentes nas histórias, bem como um resumo dos quadrinhos, séries e eventos.

Toda a aplicação é adaptável a todos os tamanhos de tela, e a aplicação tem temas dark e light. Não existe um botão para ativar isso, ela segue o tema do dispositivo.

Aqui estão os protótipos iniciais:

[https://github.com/RodBrowning/Marvel-Team/tree/main/public/prototype-images](https://github.com/RodBrowning/Marvel-Team/tree/main/public/prototype-images)


<img src="https://raw.githubusercontent.com/RodBrowning/Marvel-Team/main/public/prototype-images/HomeHome%20Dark.png" alt="Home dark" width="620" >

<img src="https://raw.githubusercontent.com/RodBrowning/Marvel-Team/main/public/prototype-images/Home-lightHome%20Light.png" alt="Home light" width="620">

<img src="https://raw.githubusercontent.com/RodBrowning/Marvel-Team/main/public/prototype-images/DesignDesign.png" alt="Design" width="620">

<img src="https://raw.githubusercontent.com/RodBrowning/Marvel-Team/main/public/prototype-images/SeriesSeries%20Dark.png" alt="Series Dark" width="620">

## Requisitos Técnicos

Para o desenvolvimento, utilizei o `create-react-app` com `--typescript` ON. Comecei criando as rotas principais: home e personagem. Para a estrutura, optei por uma arquitetura que isolasse as atribuições. Dividi essas atribuições em uma **hierarquia de pastas**:

- **Pages**: Contém as páginas correspondentes às rotas da aplicação.
- **GlobalStyles**: Responsável por definir variáveis globais e realizar o reset CSS.
- **Components**: Contém componentes reutilizáveis, artefatos sem nenhuma lógica, somente exibem informações ou oferecem styled components, como botões, searchBox, heroSection, containers, titles, etc.
- **Modules**: Contém componentes com lógica envolvida e que podem ser reutilizados em várias páginas. Um exemplo é o componente de pesquisa completo.
- **Utils**: Inclui funções helpers, fetch, hooks e manipulação de cache do navegador, entre outros.

Essa é a hierarquia de pastas do projeto.

## Técnicas de Layout

No layout, utilizei principalmente grid para o macro layout e flexbox a nível de componente. Utilizei `position absolute` e a função `clamp` do CSS para auxiliar na criação de componentes responsivos com uma única linha de código, além de media queries para reorganizar as colunas do grid e a direção do flexbox, e questões de espaçamento.


## Trabalhando com dados

Para o fetch de dados, utilizei o `React Query` devido à extrema facilidade de lidar com os estados das requisições. Ele possui caching nativo,loading, error, retry, refetch é leve e extremamente fácil de usar. Utilizei infinite query para a home page, com a intenção de prender a atenção do usuário por mais tempo. Aproveitei a mesma query para fazer tanto a requisição de todos os personagens como a busca por nome. Se a API receber `undefined` para o parâmetro **"nameStartsWith"** para o nome, ela retorna todos os personagens. Dessa forma, para a home page, fazemos uma requisição para a rota de personagens com o parâmetro `undefined` e ela retorna todos. Quando se faz uma pesquisa, redirecionamos para a rota home com o texto de busca, e a aplicação retorna o que encontrar. A aplicação segue o fluxo natural. Se o texto for apagado e uma pesquisa for feita, também retorna todos.

A página de personagem imprime os dados mencionados anteriormente.

Além dessas duas, temos mais uma página que é compartilhada com três outras rotas: **comic, serie e evento**, que são os **trabalhos relacionados**. Apesar de serem três rotas diferentes da API, elas possuem informações semelhantes e podem compartilhar a mesma página.


## Funcionalidades da Aplicação

O resultado foi uma aplicação bastante dinâmica, pois o usuário tem uma página inicial cheia de personagens, e ao clicar em qualquer um deles, pode obter informações sobre o personagem, bem como todos os trabalhos em que ele participou. Ao clicar em um trabalho, já são exibidos outros personagens que têm outros trabalhos com outros personagens, e assim por diante. Pensando nessa grande quantidade de requisições para dados que não mudam com frequência, a aplicação guarda em `cache` todos os dados pesquisados por **24 horas**. Como os personagens se cruzam muito e eles também se repetem, quando isso acontece, a aplicação não faz outra requisição, economizando requisições e tornando a **aplicação mais rápida** conforme o usuário a utiliza. Apesar de guardar os dados em memória, o React Query mantém o mesmo comportamento de exibir dados em chunks na paginação infinita para manter o desempenho da aplicação.


## Considerações finais

Sobre a aplicação, é isso, e se me perguntassem o que eu faria melhor, se tivesse mais tempo, eu faria **testes unitários** e testes end-to-end com **Jest** e **Cypress**. Documentaria com **Storybook** ou **JSDoc**, ou até mesmo ambos, **por que não?** Criaria uma página **404**, criaria um layout um pouco mais assimétrico como nos quadrinhos e trabalharia na exibição de possíveis **erros**, assim como faço na minha aplicação de **caça-palavras**, mais especificamente no formulário de contato.

Segue o link, caso goste de jogos mentais: [https://word-search-ochre.vercel.app/](https://word-search-ochre.vercel.app/).

A aplicação está hospedada na Vercel e pode ser acessada pelo link acima. Ela possui suporte a PWA, então é possível instalá-la no celular como um aplicativo. Eu adoro jogar no ônibus ou no transito. Muita diversão!

Além disso, aqui está o link para o protótipo no Figma: [https://www.figma.com/file/ypNIM41t7PQ0ONNg44lZcH/Marvel-App?type=design&node-id=0-1&mode=design&t=wOmfCNp8CgvDkmtO-0](https://www.figma.com/file/ypNIM41t7PQ0ONNg44lZcH/Marvel-App?type=design&node-id=0-1&mode=design&t=wOmfCNp8CgvDkmtO-0).

Para executar a aplicação, siga as instruções abaixo. Além disso, basta informar suas **chaves de acesso** no `.env` e ser feliz. Espero que se divirtam e nos vemos em breve.

Por favor, não hesite em me perguntar se tiver mais alguma dúvida!

#Gratidão.


## Executando a Aplicação Localmente

Para executar a aplicação localmente, siga as instruções abaixo:

1. Clone o repositório para o seu ambiente local:

   ```
   git clone <URL do repositório>
   ```

2. Acesse a pasta do projeto:

   ```
   cd marvel-team
   ```

3. Instale as dependências do projeto:

   ```
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione a chave da API da Marvel:

   ```
   REACT_APP_MARVEL_API_KEY=<Sua chave da API da Marvel>
   ```

5. Inicie a aplicação:

   ```
   npm start
   ```

A aplicação será iniciada localmente em `http://localhost:3000` e você poderá acessá-la pelo seu navegador.
