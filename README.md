# Teste Front-end consumindo API MARVEL 

## Tecnologias Utilizadas

- React
- Styled components

## Como Utilizar

1. Acesse o aplicativo hospedado em [https://teste-frontend-flax.vercel.app/](https://teste-frontend-flax.vercel.app/).
2. Navegação entre os herois pode ser feita por pagina ou buscando pelo nome.
3. Ordenação pode ser feita por nome "A/Z, Z/A" através do botão 'switch'. 
4. Clicando no coração abaixo da imagem você pode favoritar seu heroi favorito no limite de 5.
5. Clicando no botão ao lado de "somente favoritos" é mostrado apenas os herois favoritados.
6. Clicando na imagem do heroi você é direcionado para pagina Hero que mostra os detalhes do heroi.
7. Dentro de cada heroi tem o "rating" ou avaliação de até 5 estrelas.
8. Logo abaixo temos os ultimos lançamentos de quadrinhos daquele heroi.

## Funcionalidades
- Buscar pelo nome (em branco é a exibição padrão dos primeiros herois disponiveis na API).
- Adicionar rating ou avaliação para cada heroi (Até 5 estrelas).
- Adicionar até 5 herois nos favoritos.
- Mostrar somente favoritos.
- Ordenação por nome "A/Z, "Z/A".
- Navegação entre paginas.
- Tanto o rating quanto o favoritos são salvos no Localstorage.

## Componentes
O projeto é composto pelos seguintes componentes:

<details>
  <summary style="color: blue;">Characters</summary>
 Componente que recebe a requisição da API como props "data" verifica se os dados recebidos são dos favoritos ou os dados originais, para fazer a funcionalidade de mostrar apenas favoritos.
</details>

<details>
<summary style="color: blue;">Character</summary>
Componente que renderiza cada heroi na UI e faz a função de adicionar nos favoritos.
</details>

<details>
  <summary><span style="color: blue;">SearchForm</span></summary>
Componente que faz a busca de herois por nome.
</details>

## Páginas
O projeto é composto pelos seguintes páginas:

<details>
  <summary><span style="color: blue;">Home</span></summary>
  Pagina Home que mostra todos os 20 primeiros herois retornados na api e controla a paginação, ordenação e faz a chamada na api para retornar os dados para o componente Characters.
</details>

<details>
  <summary><span style="color: blue;">Hero</span></summary>
   Pagina Hero que renderiza os detalhes do heroi clicado permitindo dar uma nota de 0 a 5 estrelas e ver os ultimos 10 quadrinhos daquele heroi.
</details>


## Desenvolvimento

Se você deseja executar o projeto localmente e realizar alterações, siga as etapas abaixo:

1. Clone este repositório em sua máquina local usando o seguinte comando:

```shell
git clone https://github.com/seu-usuario/Teste-Frontend.git
```

2. Acesse o diretório do projeto:

```shell
cd seu-diretório/Teste-Frontend
```

3. Instale as dependências do projeto:

```shell
npm install / yarn install
```

4. Inicie o servidor de desenvolvimento:

```shell
npm run dev / yarn run dev
```

5. Abra seu navegador e acesse seu localHost para visualizar o aplicativo em execução.

**NÃO SE ESQUEÇA DE DEFINIR AS VARIAVEIS DE AMBIENTE COM A CHAVE DA API DA MARVEL.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema no aplicativo ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue.

## Autor

João Paulo
Licença

Contato
Caso tenha alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato através do seguinte email: jpgoncalves021@gmail.com.